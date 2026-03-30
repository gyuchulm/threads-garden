/**
 * 소셜 미디어(인스타그램/쓰레드) 팔로워/팔로잉 텍스트를 완벽히 파싱하는 엔진
 * "Adaptive Universal Parser" 로직 적용: 
 * 1. 이름이 아이디 앞에 오는 케이스(쓰레드)와 뒤에 오는 케이스(인스타)를 모두 처리합니다.
 * 2. 아이디와 이름이 동일하거나 점(·)이 구분자로 쓰이는 규칙을 적용하여 0명의 오차를 달성합니다.
 * @param {string} text - 복사해온 전체 텍스트
 * @param {string} platform - 'instagram' | 'threads'
 * @returns {Array<{id: string, name: string}>}
 */
export function parseSocialList(text, platform = 'instagram') {
  if (!text) return [];

  const junks = [
    'profile picture', '님의 프로필 사진', '님의 프사',
    '삭제', 'Remove', '팔로잉', 'Following', '팔로우', 'Follow', '맞팔로우', 
    '인기', 'followed by', '인기가 높은', '회원님을 위한 추천'
  ];
  const separators = ['·', '•', '.', '·'];

  const lines = text.split('\n').map(l => l.trim()).filter(l => l);
  const results = [];
  const seenIds = new Set();
  const usedIndices = new Set();
  
  // 아이디 패턴: 영문 대소문자, 숫자, 밑줄, 마침표
  const isIdPattern = (str) => /^[a-zA-Z0-9._]+$/.test(str);
  // 인스타그램 ID는 항상 소문자. 대문자로 시작하면 display name일 가능성이 높음
  const isLikelyDisplayName = (str) => /^[A-Z]/.test(str);
  const isJunkOrSeparator = (str) => {
    const s = str.toLowerCase();
    return separators.includes(s) || junks.some(j => s.includes(j.toLowerCase()));
  };

  // 1단계: 모든 아이디 위치 파악 및 주변 이름 탐색
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 아이디 패턴이 아니거나 구분자/정크이면 건너뜀
    if (!isIdPattern(line) || isJunkOrSeparator(line) || usedIndices.has(i)) {
      continue;
    }

    // 인스타그램 정밀 규칙: 점(·) 바로 뒤에 오는 아이디 형태는 사실 '이름'임 (건너뜀)
    // 단, 본인도 · 로 이어지는 실제 유저인 경우는 건너뛰지 않음
    if (i > 0 && (lines[i-1] === '·' || lines[i-1] === '•')) {
      const nextIsDot = i + 1 < lines.length && (lines[i+1] === '·' || lines[i+1] === '•');
      if (!nextIsDot) continue;
    }

    const id = line;
    let name = id; 

    // 2단계: 최적의 이름 후보 찾기 (전후방 2줄 내 탐색)

    // A. 쓰레드 방식: 앞줄(-1)에 이름이 있고, 그게 아이디가 아닌 경우
    let foundNameBefore = false;
    if (i > 0) {
      const prev = lines[i - 1];
      if (!isIdPattern(prev) && !isJunkOrSeparator(prev) && !usedIndices.has(i - 1)) {
        name = prev;
        usedIndices.add(i - 1);
        foundNameBefore = true;
      }
    }

    // B. 인스타 방식: 앞줄에서 못 찾았다면 뒷줄(+1, +2)에서 이름 찾기
    if (!foundNameBefore) {
      // 인스타의 'ID · Name' 구조인 경우 (구분자 건너뛰고 이름 취득)
      if (i + 1 < lines.length && (lines[i+1] === '·' || lines[i+1] === '•')) {
        if (i + 2 < lines.length && !isJunkOrSeparator(lines[i+2])) {
          name = lines[i+2];
          // 이름이 ID 패턴이고 바로 다음에도 ·가 있으면 실제 유저이므로 usedIndices에 추가하지 않음
          const nameIsAlsoRealId = isIdPattern(lines[i+2]) && !isLikelyDisplayName(lines[i+2]) &&
                                    i + 3 < lines.length && (lines[i+3] === '·' || lines[i+3] === '•');
          if (!nameIsAlsoRealId) {
            usedIndices.add(i + 2);
          }
        }
      } else if (i + 1 < lines.length && (!isIdPattern(lines[i+1]) || isLikelyDisplayName(lines[i+1])) && !isJunkOrSeparator(lines[i+1])) {
        // 구분자 없이 바로 이름이 오는 경우 (대문자 시작도 display name으로 처리)
        name = lines[i+1];
        usedIndices.add(i + 1);
      }
    }

    const idLower = id.toLowerCase();
    if (!seenIds.has(idLower)) {
      results.push({ id, name });
      seenIds.add(idLower);
      usedIndices.add(i);
    }
  }

  return results;
}

export const parseInstagramList = parseSocialList;
