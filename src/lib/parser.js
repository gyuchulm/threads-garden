/**
 * 소셜 미디어(인스타그램/쓰레드) 팔로워/팔로잉 텍스트를 완벽히 파싱하는 엔진
 * "Multi-Directional Search" 로직 적용: 
 * 이름이 아이디 앞에 오는 케이스(쓰레드)와 뒤에 오는 케이스(인스타)를 모두 처리합니다.
 * @param {string} text - 복사해온 전체 텍스트
 * @param {string} platform - 'instagram' | 'threads' (통합 로직 사용)
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

  // 1단계: 모든 아이디 위치 파악
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!isIdPattern(line) || isJunk(line) || usedIndices.has(i)) {
      continue;
    }

    const id = line;
    let name = id; // 기본값은 아이디

    // 2단계: 주변에서 이름 후보 찾기 (전방/후방 탐색)
    
    // 뒤에 이름이 있는가? (인스타 방식)
    let foundNameAfter = false;
    for (let next = 1; next <= 2; next++) {
      if (i + next < lines.length) {
        const candidate = lines[i + next];
        if (!isIdPattern(candidate) && !isJunk(candidate)) {
          name = candidate;
          usedIndices.add(i + next);
          foundNameAfter = true;
          break;
        }
        if (isIdPattern(candidate)) break; // 다음 아이디를 만나면 중단
      }
    }

    // 만약 뒤에서 못 찾았다면, 앞에서 찾아보기 (쓰레드 방식)
    if (!foundNameAfter) {
      for (let prev = 1; prev <= 2; prev++) {
        if (i - prev >= 0) {
          const candidate = lines[i - prev];
          if (!isIdPattern(candidate) && !isJunk(candidate) && !usedIndices.has(i - prev)) {
            name = candidate;
            usedIndices.add(i - prev);
            break;
          }
          if (isIdPattern(candidate)) break; // 이전 아이디를 만나면 중단
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
