'use client';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import { getPostBySlug } from '@/data/posts';
import Footer from '@/components/Footer';

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
    if (lines.length > 1 && lines.every(l => /^[-✅❌•]/.test(l.trim()))) {
      return (
        <ul key={i}>
          {lines.map((l, j) => (
            <li key={j} dangerouslySetInnerHTML={{
              __html: l.replace(/^[-✅❌•]\s*/, '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            }} />
          ))}
        </ul>
      );
    }
    const html = block.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />;
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
