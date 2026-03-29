/**
 * 소셜 미디어(인스타그램/쓰레드) 팔로워/팔로잉 텍스트를 파싱하는 통합 알고리즘
 * @param {string} text - 복사해온 전체 텍스트
 * @param {string} platform - 'instagram' | 'threads' (현재는 통합 로직 사용)
 * @returns {Array<{id: string, name: string}>}
 */
export function parseSocialList(text, platform = 'instagram') {
  if (!text) return [];
  
  const lines = text.split('\n')
    .map(l => l.trim())
    .filter(l => l);

  const results = [];
  const seenIds = new Set();
  
  // 1. 필수 필터링: 내용 없는 라인, 단순 구분자, 프로필 사진 관련 텍스트, 헤더
  const isJunk = (str) => {
    if (!str) return true;
    const s = str.toLowerCase();
    return s === '·' || 
           s === '•' ||
           s.includes('profile picture') || 
           s.includes("님의 프로필 사진") ||
           s.includes("님의 프사") ||
           s.startsWith('followed by ') || 
           s.startsWith('following ') ||
           /^(##|follower|following|followers|삭제|삭제됨|팔로우|팔로잉|follow|following|추천|맞팔로우|인기가 높은)$/i.test(s);
  };

  // 2. 아이디 패턴: 소문자, 숫자, 밑줄, 마침표로만 구성됨.
  const isIdPattern = (str) => /^[a-z0-9._]+$/i.test(str);

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (isJunk(line)) {
      i++;
      continue;
    }

    // 아이디 후보
    const idCandidate = line;

    // 만약 이미 점(·)이 포함된 경우 (예: "id · name")
    if (idCandidate.includes('·')) {
      const parts = idCandidate.split('·').map(p => p.trim());
      if (parts.length >= 2 && isIdPattern(parts[0])) {
        if (!seenIds.has(parts[0])) {
          results.push({ id: parts[0], name: parts.slice(1).join(' ') });
          seenIds.add(parts[0]);
        }
      }
      i++;
      continue;
    }

    // 아이디 패턴이 아니면(공백 있거나 대문자 등) 그냥 다음으로
    if (!isIdPattern(idCandidate)) {
      i++;
      continue;
    }

    // 현재 라인을 아이디로 확정
    const id = idCandidate;

    // 다음 라인들을 보면서 '이름' 혹은 '다음 유저의 시작'을 판단
    let name = '';
    let nextIdx = i + 1;

    while (nextIdx < lines.length) {
      const nextLine = lines[nextIdx];

      if (isJunk(nextLine)) {
        if (nextLine === '·' || nextLine === '•') {
           nextIdx++;
           continue;
        }
        break;
      }

      if (nextLine.toLowerCase().startsWith('followed by ')) {
        break;
      }

      const looksLikeAnotherId = isIdPattern(nextLine) && !nextLine.includes(' ');
      
      if (looksLikeAnotherId) {
        let lookAheadIdx = nextIdx + 1;
        while (lookAheadIdx < lines.length && isJunk(lines[lookAheadIdx]) && lines[lookAheadIdx] !== '·') {
          lookAheadIdx++;
        }
        
        if (lookAheadIdx < lines.length && (lines[lookAheadIdx] === '·' || lines[lookAheadIdx].toLowerCase().includes('profile picture'))) {
          break; 
        }

        if (!name) {
          name = nextLine;
          nextIdx++;
          break; 
        } else {
          break; 
        }
      } else {
        name = nextLine;
        nextIdx++;
        break;
      }
    }

    if (!seenIds.has(id)) {
      results.push({ id, name: name || id }); 
      seenIds.add(id);
    }
    i = nextIdx;
  }

  return results;
}

export const parseInstagramList = parseSocialList;
