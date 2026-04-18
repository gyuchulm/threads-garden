'use client';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import { getPostBySlug } from '@/data/posts';
import Footer from '@/components/Footer';

function inlineFormat(str) {
  return str
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function parseTable(lines) {
  // Lines: header row, separator row (|---|---|), body rows
  const headerCells = lines[0].split('|').map(s => s.trim()).filter(Boolean);
  const bodyRows = lines.slice(2).map(line =>
    line.split('|').map(s => s.trim()).filter((_, idx, arr) => idx > 0 || line.trim().startsWith('|') === false ? true : true)
      .filter(Boolean)
  );
  return { headerCells, bodyRows };
}

function renderContent(text) {
  const blocks = text.trim().split(/\n\n+/);
  return blocks.map((block, i) => {
    if (block.startsWith('## ')) {
      return <h2 key={i}>{block.slice(3)}</h2>;
    }
    if (block.startsWith('### ')) {
      return <h3 key={i}>{block.slice(4)}</h3>;
    }
    const lines = block.split('\n');

    // Markdown table detection: requires header row, separator row with dashes, and body rows
    if (
      lines.length >= 2 &&
      lines[0].trim().startsWith('|') &&
      /^\s*\|[\s|:-]+\|\s*$/.test(lines[1])
    ) {
      const headerCells = lines[0].split('|').slice(1, -1).map(s => s.trim());
      const bodyRows = lines.slice(2)
        .filter(l => l.trim().startsWith('|'))
        .map(l => l.split('|').slice(1, -1).map(s => s.trim()));
      return (
        <div key={i} className="table-wrapper" style={{ margin: '20px 0' }}>
          <table className="content-table">
            <thead>
              <tr>
                {headerCells.map((h, j) => (
                  <th key={j} dangerouslySetInnerHTML={{ __html: inlineFormat(h) }} />
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c} dangerouslySetInnerHTML={{ __html: inlineFormat(cell) }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (lines.length > 1 && lines.every(l => /^[-✅❌•]/.test(l.trim()))) {
      return (
        <ul key={i}>
          {lines.map((l, j) => (
            <li key={j} dangerouslySetInnerHTML={{
              __html: inlineFormat(l.replace(/^[-✅❌•]\s*/, ''))
            }} />
          ))}
        </ul>
      );
    }
    return <p key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(block) }} />;
  });
}

export default function BlogPostClient({ slug }) {
  const { lang, t } = useLang();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main>
        <div className="container">
          <div className="page-header">
            <h1>포스트를 찾을 수 없습니다</h1>
            <Link href="/tips">← Threads Tips</Link>
          </div>
        </div>
      </main>
    );
  }

  const content = post[lang] ?? post.ko;

  return (
    <main>
      <div className="container">
        <Link href="/tips" className="back-link">
          ← Threads Tips
        </Link>

        <article className="article">
          <div className="post-meta">
            <span className="post-category">{content.category}</span>
            <span className="post-date">{post.date}</span>
            <span className="post-read">⏱ {post.readTime}{lang === 'ko' ? '분' : ' min read'}</span>
          </div>
          <h1 className="article-title">{content.title}</h1>
          <p className="article-lead">{content.description}</p>
          <div className="article-body">
            {renderContent(content.content)}
          </div>
        </article>

        <div className="article-footer">
          <div className="tool-cta">
            <p>{lang === 'ko' ? '지금 바로 가든을 정리해보세요 👇' : 'Tend your garden now 👇'}</p>
            <Link href="/" className="btn-analyze" style={{ textDecoration: 'none' }}>
              {t.btn.analyze}
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
