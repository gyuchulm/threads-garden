const fs = require('fs');
const path = require('path');

const samplePath = path.join(__dirname, 'src/data/sample.md');
const text = fs.readFileSync(samplePath, 'utf8');

const parts = text.split('#following');
const followersRaw = parts[0] || '';
const followingRaw = parts[1] || '';

function testCount(raw, name) {
  const lines = raw.split('\n')
    .map(l => l.trim())
    .filter(l => {
      if (!l) return false;
      const s = l.toLowerCase();
      
      // 사용자께서 명시하신 정크만 제거
      if (s.includes('profile picture')) return false;
      if (s.includes('followed by')) return false;
      if (s === '·' || s === '•') return false;
      
      // ## followers 헤더 등 헤더라인 제거 (헤더는 사용자 리스트에 포함되지 않으므로)
      if (s.startsWith('##')) return false;

      return true;
    });

  console.log(`${name} 총 유효 라인 수:`, lines.length);
  console.log(`${name} 2개씩 묶었을 때 (count / 2):`, lines.length / 2);
}

console.log('--- 파서 본질적 테스트 (최소 필터링) ---');
testCount(followersRaw, 'Followers');
console.log('-------------------------');
testCount(followingRaw, 'Following');
