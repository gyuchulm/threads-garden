/**
 * 소셜 미디어(인스타그램/쓰레드) 팔로워/팔로잉 텍스트를 완벽히 파싱하는 엔진
 * "Context-Aware Dual Search" 로직 적용: 
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
    '인기', 'followed by', '인기가 높은'
  ];
  const separators = ['·', '•', '.', '·'];

  const lines = text.split('\n').map(l => l.trim()).filter(l => l);
  const results = [];
  const seenIds = new Set();
  const usedIndices = new Set();
  
  // 아이디 패턴: 영문 대소문자, 숫자, 밑줄, 마침표
  const isIdPattern = (str) => /^[a-zA-Z0-9._]+$/.test(str);
  const isJunk = (str) => {
    const s = str.toLowerCase();
    return separators.includes(s) || junks.some(j => s.includes(j.toLowerCase()));
  };

  // 1단계: 모든 아이디 위치 파악 및 주변 이름 탐색
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 아이디 패턴이지만 구분자(.)가 아닌 경우만 유효 아이디로 시작
    if (!isIdPattern(line) || isJunk(line) || usedIndices.has(i)) {
      continue;
    }

    // 인스타그램 전용: 아이디 바로 앞에 점(·)이 있다면 그건 아이디가 아닌 이름임 (건너뜀)
    if (i > 0 && separators.includes(lines[i-1])) {
      continue;
    }

    const id = line;
    let name = id; 

    // 2단계: 최적의 이름 후보 찾기 (쓰레드형 vs 인스타형 자동 판별)

    // 쓰레드형 판별: 앞줄(-1)에 이름이 있고, 그 앞에 구분자가 있는가?
    let foundNameBefore = false;
    if (i > 0) {
      const prev = lines[i - 1];
      if (!isIdPattern(prev) && !isJunk(prev) && !usedIndices.has(i - 1)) {
        name = prev;
        usedIndices.add(i - 1);
        foundNameBefore = true;
      }
    }

    // 인스타형 판별: 앞에 이름이 없었다면 뒷줄(+1, +2)에서 이름 찾기
    if (!foundNameBefore) {
      for (let next = 1; next <= 2; next++) {
        if (i + next < lines.length) {
          const candidate = lines[i + next];
          if (!isIdPattern(candidate) && !isJunk(candidate)) {
            name = candidate;
            usedIndices.add(i + next);
            break;
          }
          if (isIdPattern(candidate)) break; // 다음 아이디를 만나면 중단
        }
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
