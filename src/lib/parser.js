/**
 * 인스타그램 팔로워/팔로잉 텍스트를 파싱하는 알고리즘
 * @param {string} text - 복사해온 인스타그램 전체 텍스트
 * @returns {Array<{id: string, name: string}>}
 */
export function parseInstagramList(text) {
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
           /^(##|follower|following|followers|삭제|삭제됨|팔로우|팔로잉|follow|following|추천|맞팔로우)$/i.test(s);
  };

  // 2. 인스타 아이디 패턴: 소문자, 숫자, 밑줄, 마침표로만 구성됨.
  const isIdPattern = (str) => /^[a-z0-9._]+$/i.test(str);

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (isJunk(line)) {
      i++;
      continue;
    }

    // 아이디 후보
    const id = line;

    // 만약 이미 점(·)이 포함된 경우 (예: "id · name")
    if (id.includes('·')) {
      const parts = id.split('·').map(p => p.trim());
      if (parts.length >= 2 && isIdPattern(parts[0])) {
        if (!seenIds.has(parts[0])) {
          results.push({ id: parts[0], name: parts.slice(1).join(' ') });
          seenIds.add(parts[0]);
        }
      }
      i++;
      continue;
    }

    // 아이디 패턴이 아니면 그냥 스킵 (쓰레기 데이터일 가능성)
    if (!isIdPattern(id)) {
      i++;
      continue;
    }

    // 다음 라인들을 보면서 '이름' 혹은 '다음 아이디'를 판단
    let name = '';
    i++;

    while (i < lines.length) {
      const nextLine = lines[i];

      if (isJunk(nextLine)) {
        // 점(·)은 이름의 전조일 수 있으나 현재 구조상 그냥 스킵해도 무방 (다음 non-junk가 이름일 것)
        i++;
        continue;
      }

      // 다음 라인이 "username's profile picture" 인 경우, 현재 유저는 끝난 것
      if (nextLine.toLowerCase().includes('profile picture') || nextLine.includes('님의 프로필 사진')) {
        // name은 여기서 멈춤 (이미 junk 필터에서 걸리겠지만 명시적으로 처리)
        break;
      }

      // 다음 라인이 아이디 패턴이고, 
      // 1) 공백이 없으며 
      // 2) 다음의 다음 라인이 '·' 이거나 'profile picture' 이면 이건 확실히 '다음 아이디'임
      const looksLikeNextId = isIdPattern(nextLine) && !nextLine.includes(' ');
      
      if (looksLikeNextId) {
        // 다음 라인을 미리 내다본다
        let nextNextIdx = i + 1;
        while (nextNextIdx < lines.length && isJunk(lines[nextNextIdx]) && lines[nextNextIdx] !== '·') {
          nextNextIdx++;
        }
        
        // 만약 다음의 다음이 유의미한 구분자(·)라면 현재 라인(nextLine)은 다음 아이디임.
        if (nextNextIdx < lines.length && (lines[nextNextIdx] === '·' || lines[nextNextIdx].includes('profile picture'))) {
          break; 
        }

        // 아이디 패턴이지만 이름일 수도 있음 (예: 5kr4mbl3 \n 5kr4mbl3)
        // 하지만 만약 현재 name이 아직 비어있다면 이것을 이름으로 일단 받아본다.
        if (!name) {
          name = nextLine;
          i++;
          break; // 보통 이름 뒤에는 바로 다음 아이디가 오거나 구분자가 옴
        } else {
          // 이미 name이 있다면 현재 line은 아예 다른 사람의 아이디일 확률이 높음
          break;
        }
      } else {
        // 아이디 패턴이 아니면(공백 있거나 한글 등) 100% 이름
        name = nextLine;
        i++;
        break;
      }
    }

    if (!seenIds.has(id)) {
      results.push({ id, name: name || '정보 없음' });
      seenIds.add(id);
    }
  }

  return results;
}
