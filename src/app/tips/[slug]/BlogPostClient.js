'use client';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import { getPostBySlug, posts } from '@/data/posts';
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

function getRelatedPosts(currentSlug, platform, count = 3) {
  const samePlatform = posts.filter(p => p.slug !== currentSlug && p.platform === platform);
  const others = posts.filter(p => p.slug !== currentSlug && p.platform !== platform);
  return [...samePlatform, ...others].slice(0, count);
}

function getPrevNext(currentSlug) {
  const idx = posts.findIndex(p => p.slug === currentSlug);
  return {
    prev: idx > 0 ? posts[idx - 1] : null,
    next: idx < posts.length - 1 ? posts[idx + 1] : null,
  };
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
  const relatedPosts = getRelatedPosts(slug, post.platform);
  const { prev, next } = getPrevNext(slug);

  return (
    <main>
      <div className="container">
        {/* HTML Breadcrumb — crawlable by Google */}
        <nav className="breadcrumb" aria-label="breadcrumb">
          <Link href="/">SNS Garden</Link>
          <span className="breadcrumb-sep">›</span>
          <Link href="/tips/">{lang === 'ko' ? '팁 & 가이드' : 'Tips'}</Link>
          <span className="breadcrumb-sep">›</span>
          <span>{content.title}</span>
        </nav>

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

        {/* Prev / Next navigation */}
        {(prev || next) && (
          <nav className="post-nav" aria-label="post navigation">
            {prev ? (
              <Link href={`/tips/${prev.slug}/`} className="post-nav-item post-nav-prev">
                <span className="post-nav-label">← {lang === 'ko' ? '이전 글' : 'Previous'}</span>
                <span className="post-nav-title">{(prev[lang] ?? prev.ko).title}</span>
              </Link>
            ) : <span />}
            {next ? (
              <Link href={`/tips/${next.slug}/`} className="post-nav-item post-nav-next">
                <span className="post-nav-label">{lang === 'ko' ? '다음 글' : 'Next'} →</span>
                <span className="post-nav-title">{(next[lang] ?? next.ko).title}</span>
              </Link>
            ) : <span />}
          </nav>
        )}

        {/* Related Posts — internal link network for SEO */}
        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <h2 className="related-posts-title">
              {lang === 'ko' ? '관련 아티클' : 'Related Articles'}
            </h2>
            <div className="related-posts-grid">
              {relatedPosts.map(rp => {
                const rc = rp[lang] ?? rp.ko;
                return (
                  <Link href={`/tips/${rp.slug}/`} key={rp.slug} className="related-post-card">
                    <span className="related-post-category">{rc.category}</span>
                    <span className="related-post-title">{rc.title}</span>
                    <span className="related-post-meta">{rp.date} · {rp.readTime}{lang === 'ko' ? '분' : ' min'}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <Footer />
      </div>
    </main>
  );
}
