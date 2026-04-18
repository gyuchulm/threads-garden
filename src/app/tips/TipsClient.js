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

        {/* ── Intro Content ── */}
        <div className="tips-intro">
          {lang === 'ko' ? (
            <>
              <p>
                SNS Garden Tips는 Threads와 인스타그램을 더 효과적으로 운영하고 싶은 분들을 위한 실용 가이드 모음입니다.
                알고리즘 원리, 팔로워 성장 전략, 릴스 최적화, 스토리 활용법, 계정 분석 방법까지 —
                직접 운영하고 실험하면서 검증한 내용을 중심으로 정리했습니다.
              </p>
              <p>
                각 아티클은 초보자도 이해할 수 있도록 기초 개념부터 설명하면서, 경험 있는 운영자도
                새로운 인사이트를 얻을 수 있도록 심화 분석을 포함합니다.
                읽고 나서 바로 실행에 옮길 수 있는 구체적인 팁 위주로 작성됩니다.
              </p>
              <div className="tips-categories">
                <span className="tips-cat-badge">🧭 알고리즘 분석</span>
                <span className="tips-cat-badge">📈 팔로워 성장</span>
                <span className="tips-cat-badge">🎬 릴스 전략</span>
                <span className="tips-cat-badge">📊 계정 분석</span>
                <span className="tips-cat-badge">💰 수익화</span>
                <span className="tips-cat-badge">🌿 디지털 습관</span>
              </div>
            </>
          ) : (
            <>
              <p>
                SNS Garden Tips is a practical guide library for anyone who wants to run their Threads or Instagram
                account more effectively. Algorithm mechanics, follower growth strategy, Reels optimization,
                Stories tactics, account analytics — all based on direct experience, not theory.
              </p>
              <p>
                Each article explains concepts from the ground up so beginners can follow along, while including
                enough depth that experienced creators still leave with something actionable. Every post is written
                with one goal: give you at least one thing you can apply today.
              </p>
              <div className="tips-categories">
                <span className="tips-cat-badge">🧭 Algorithm Analysis</span>
                <span className="tips-cat-badge">📈 Follower Growth</span>
                <span className="tips-cat-badge">🎬 Reels Strategy</span>
                <span className="tips-cat-badge">📊 Account Analytics</span>
                <span className="tips-cat-badge">💰 Monetization</span>
                <span className="tips-cat-badge">🌿 Digital Habits</span>
              </div>
            </>
          )}
        </div>

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
