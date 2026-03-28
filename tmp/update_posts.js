const fs = require('fs');
const path = require('path');

const targetPath = path.resolve('/Users/gyuchulmoon/threads-garden/src/data/posts.js');
let content = fs.readFileSync(targetPath, 'utf8');

// 1. Convert dates from YYYY.MM.DD to YYYY-MM-DD
content = content.replace(/date: '(\d{4})\.(\d{2})\.(\d{2})'/g, "date: '$1-$2-$3'");

// 2. Add _metadata to objects that don't have it
// Find each '{' that's followed by 'slug:' and insert metadata
// We'll use a more surgical approach to avoid double-adding if rerun
content = content.replace(/({\n\s+)(?!_metadata)slug:/g, "$1_metadata: { indexedBy: 'claude' },\n    slug:");

// 3. Update the specific last post (slug: first-comment-algorithm-hack)
// Update its title and change metadata to 'gemini'
content = content.replace(/_metadata: { indexedBy: 'claude' },\n(\s+)slug: 'first-comment-algorithm-hack'/g, "_metadata: { indexedBy: 'gemini' },\n$1slug: 'first-comment-algorithm-hack'");

content = content.replace(/title: '첫 댓글이 알고리즘을 바꾼다: 게시 직후 10분의 법칙'/g, "title: '첫댓글 전략 - 알고리즘에서 가장 과소평가된 무기'");

fs.writeFileSync(targetPath, content);
process.exit(0);
