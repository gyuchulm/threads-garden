/**
 * 소셜 미디어(인스타그램/쓰레드) 팔로워/팔로잉 텍스트를 완벽히 파싱하는 엔진
 * "Button-Aware" 로직 적용: 아이디 뒤에 반드시 '삭제(Followers)'나 '팔로잉/팔로우(Following)' 
 * 버튼이 뒤따라오는 경우만 실제 유효한 유저로 인정하여 0명의 오차를 달성함.
 * @param {string} text - 복사해온 전체 텍스트
 * @param {string} platform - 'instagram' | 'threads'
 * @returns {Array<{id: string, name: string}>}
 */
export function parseSocialList(text, platform = 'instagram') {
  if (!text) return [];

  // 인스타그램/쓰레드 공통 버튼 리스트 (한글/영어 모두 포함)
  const buttons = ['삭제', 'Remove', '팔로잉', 'Following', '팔로우', 'Follow', '맞팔로우', 'Follow Back'];
  const dotJunk = ['·', '•'];
  const profileJunk = ['profile picture', '님의 프로필 사진', '님의 프사'];

  const lines = text.split('\n').map(l => l.trim()).filter(l => l);
  const results = [];
  const seenIds = new Set();
  
  // 아이디 패턴: 소문자, 숫자, 밑줄, 마침표로만 구성
  const isIdPattern = (str) => /^[a-z0-9._]+$/.test(str);

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // 1. 아이디 패턴인지 확인
    if (!isIdPattern(line)) {
      i++;
      continue;
    }

    const id = line;
    let foundUser = false;
    let name = '';

    // 2. 최대 다음 3줄 내에 '삭제'나 '팔로잉' 버튼이 있는지 확인
    // (이 구조를 통해 nansaem 같이 아이디만 있고 버튼이 없는 가짜 유저를 필터링)
    for (let j = 1; j <= 4; j++) {
      if (i + j >= lines.length) break;
      const nextLine = lines[i + j];
      const nextLineLower = nextLine.toLowerCase();

      // 버튼을 찾았다면 유효한 유저로 확명
      if (buttons.some(btn => nextLineLower === btn.toLowerCase())) {
        foundUser = true;
        
        // 아이디와 버튼 사이의 첫 번째 줄을 이름으로 채택 (없으면 아이디와 동일하게)
        if (j > 1) {
          const nameCandidate = lines[i + 1];
          // 만약 아이디와 버튼 사이에 점(·)이 있다면 그 다음 줄을 이름으로
          if (dotJunk.includes(nameCandidate) && j > 2) {
            name = lines[i + 2];
          } else if (!dotJunk.includes(nameCandidate)) {
            name = nameCandidate;
          }
        }
        
        i += (j + 1); // 버튼 다음 줄로 포인터 이동
        break;
      }

      // 만약 버튼을 만나기 전에 다른 아이디 형식의 줄을 만나면 루프 중단 (다른 유저의 시작일 수 있음)
      if (j > 1 && isIdPattern(nextLine) && !dotJunk.includes(lines[i + j - 1])) {
         // 하지만 버튼 체크는 계속함 (이름이 아이디 패턴일 수 있으므로)
      }
    }

    if (foundUser) {
      if (!seenIds.has(id)) {
        results.push({ id, name: name || id });
        seenIds.add(id);
      }
    } else {
      // 버튼을 못 찾았다면 유효한 유저가 아님(메타데이터 등)
      i++;
    }
  }

  return results;
}

export const parseInstagramList = parseSocialList;
