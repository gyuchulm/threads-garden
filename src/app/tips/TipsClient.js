'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import { posts } from '@/data/posts';
import Footer from '@/components/Footer';

export default function TipsPage() {
  const { lang } = useLang();
  const [filter, setFilter] = useState('all'); // 'all' | 'threads' | 'instagram'

  const filteredPosts = posts.filter(post =>
    filter === 'all' || post.platform === filter
  );

  return (
    <main>
      <div className="container">
        <header className="page-header">
          <div className="header-badge">🌿 SNS Growth Tips</div>
          <h1>{lang === 'ko' ? '소셜 미디어 성장 팁' : 'Social Media Tips'}</h1>
          <p>
            {lang === 'ko'
              ? 'Threads와 Instagram 성장을 위한 실용적인 가이드'
              : 'Practical guides for growing on Threads and Instagram'}
          </p>

          <div className="filter-bar">
            {[
              { id: 'all', label: lang === 'ko' ? '전체' : 'All' },
              { id: 'threads', label: 'Threads' },
              { id: 'instagram', label: 'Instagram' },
            ].map(f => (
              <button
                key={f.id}
                className={`filter-btn ${filter === f.id ? 'active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </header>

        <div className="post-grid">
          {filteredPosts.map(post => {
            const content = post[lang] ?? post.ko;
            return (
              <Link href={`/tips/${post.slug}`} key={post.slug} className="post-card">
                <div className="post-card-inner">
                  <div className="post-meta">
                    <span className="post-category tag-platform">{post.platform?.toUpperCase()}</span>
                    <span className="post-category">{content.category}</span>
                  </div>
                  <h2 className="post-title">{content.title}</h2>
                  <p className="post-desc">{content.description}</p>
                  <div className="post-footer">
                    <span className="post-date">{post.date}</span>
                    <span className="post-read">⏱ {post.readTime}{lang === 'ko' ? '분' : 'min'}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <Footer />
      </div>
    </main>
  );
}
