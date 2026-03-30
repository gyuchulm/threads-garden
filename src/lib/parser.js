/**
 * 소셜 미디어(인스타그램/쓰레드) 팔로워/팔로잉 텍스트 파서
 *
 * Instagram: 결정론적 상태 기계
 *   팔로워 8케이스 + 팔로잉 2케이스를 처리합니다.
 *   [팔로우O, 프로필O, 설명O]  id / 설명
 *   [팔로우O, 프로필O, 설명X]  id
 *   [팔로우O, 프로필X, 설명O]  id's profile picture / id / 설명
 *   [팔로우O, 프로필X, 설명X]  id's profile picture / id
 *   [팔로우X, 프로필O, 설명O]  id / · / 설명
 *   [팔로우X, 프로필O, 설명X]  id / ·
 *   [팔로우X, 프로필X, 설명O]  id's profile picture / id / · / 설명
 *   [팔로우X, 프로필X, 설명X]  id's profile picture / id / ·
 *
 * Threads: 이름 → 아이디 순서 파서
 */

const ID_RE = /^[a-zA-Z0-9._]+$/;
const PROFILE_PIC_RE = /^(.+?)(?:'s profile picture|님의 프로필 사진|님의 프사)$/i;
const SEPARATORS = new Set(['·', '•', '.']);
const JUNK_WORDS = [
  '삭제', 'remove', '팔로잉', 'following', '팔로우', 'follow',
  '맞팔로우', '인기', 'followed by', '인기가 높은', '회원님을 위한 추천',
];

const isId          = s => ID_RE.test(s);
const isSep         = s => SEPARATORS.has(s);
const isJunk        = s => JUNK_WORDS.some(j => s.toLowerCase().includes(j));
const getPpId       = s => { const m = s.match(PROFILE_PIC_RE); return m ? m[1] : null; };
// 대문자로 시작하는 ID 패턴 → display name (인스타그램 ID는 소문자만 허용)
const isDisplayName = s => isId(s) && /^[A-Z]/.test(s);
// 설명(bio)인지: 일반 비-ID 텍스트이거나, 대문자 시작 ID 패턴(display name)인 경우
const isDesc        = s => s && (!isId(s) || isDisplayName(s)) && !isSep(s) && !getPpId(s) && !isJunk(s);

/**
 * Instagram 팔로워/팔로잉 통합 파서 (상태 기계)
 * @param {string} text
 * @returns {Array<{id: string, name: string}>}
 */
function parseInstagram(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const results = [];
  const seen = new Set();

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // 잡동사니 건너뛰기
    if (isJunk(line)) { i++; continue; }

    let id = null;

    // Case A: "아이디's profile picture" 줄
    const ppId = getPpId(line);
    if (ppId) {
      id = ppId;
      i++;
      // 다음 줄이 실제 username(소문자)이면 그걸 우선 사용
      if (i < lines.length && isId(lines[i]) && !isJunk(lines[i]) && !isDisplayName(lines[i])) {
        id = lines[i];
        i++;
      }
    // Case B: 일반 아이디 줄 (소문자/숫자 시작 — 대문자 시작은 display name으로 처리)
    } else if (isId(line) && !isDisplayName(line)) {
      id = line;
      i++;
    } else {
      i++; continue; // display name 단독줄 또는 인식 불가 줄 건너뛰기
    }

    let name = id; // 기본값: 아이디 = 이름

    // 구분자(· • .) 건너뛰기
    if (i < lines.length && isSep(lines[i])) {
      i++;
    }

    // 다음 줄이 설명(bio)이면 이름으로 취득
    if (i < lines.length && isDesc(lines[i])) {
      name = lines[i];
      i++;
    }

    const key = id.toLowerCase();
    if (!seen.has(key)) {
      results.push({ id, name });
      seen.add(key);
    }
  }

  return results;
}

/**
 * Threads 팔로워/팔로잉 파서 (이름 → 아이디 순서)
 * @param {string} text
 * @returns {Array<{id: string, name: string}>}
 */
function parseThreads(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const results = [];
  const seen = new Set();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!isId(line) || isDisplayName(line) || isJunk(line)) continue;

    const id = line;
    let name = id;

    // 앞줄이 표시 이름인 경우 (Threads 기본 형식: 이름 → 아이디)
    if (i > 0 && isDesc(lines[i - 1])) {
      name = lines[i - 1];
    }

    const key = id.toLowerCase();
    if (!seen.has(key)) { results.push({ id, name }); seen.add(key); }
  }

  return results;
}

/**
 * @param {string} text - 복사해온 전체 텍스트
 * @param {string} platform - 'instagram' | 'threads'
 * @returns {Array<{id: string, name: string}>}
 */
export function parseSocialList(text, platform = 'instagram') {
  if (!text) return [];
  return platform === 'threads' ? parseThreads(text) : parseInstagram(text);
}

export const parseInstagramList = parseSocialList;
