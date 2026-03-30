'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useLang } from '@/context/LangContext';
import { usePlatform } from '@/context/PlatformContext';
import { posts } from '@/data/posts';
import Link from 'next/link';
import Footer from '@/components/Footer';

import { parseSocialList } from '@/lib/parser';

// ─── 파싱 (Threads/Insta 공용: 통합 알고리즘 사용) ───
function parseSocialText(raw, platform) {
  const list = parseSocialList(raw, platform);
  const data = {};
  list.forEach(item => {
    // 대소문자 구분 없이 매칭하기 위해 아이디를 소문자로 변환하여 키로 사용
    const id = item.id.toLowerCase();
    data[id] = item.name || item.id;
  });
  return data;
}

function getInitial(username) {
  return username ? username[0].toUpperCase() : '?';
}

function downloadCSV(data, platform) {
  const header = '아이디,이름/소개,프로필 링크\n';
  const baseUrl = platform === 'threads' ? 'https://www.threads.net/@' : 'https://www.instagram.com/';
  const rows = data
    .map(r => `"${r.username}","${r.description}","${baseUrl}${r.username}"`)
    .join('\n');
  const blob = new Blob(['\uFEFF' + header + rows], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${platform}_garden_weeds.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ─── 청소 중 애니메이션 훅 ───
const TOOLS = ['🧹', '⛏️', '🪣', '🌿'];
function useCleaningAnim(active) {
  const [frame, setFrame] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (active) {
      ref.current = setInterval(() => setFrame(f => (f + 1) % TOOLS.length), 400);
    } else {
      clearInterval(ref.current);
      setFrame(0);
    }
    return () => clearInterval(ref.current);
  }, [active]);
  return TOOLS[frame];
}

export default function Home() {
  const { lang, t } = useLang();
  const { platform } = usePlatform();
  const [followersRaw, setFollowersRaw] = useState('');
  const [followingRaw, setFollowingRaw] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 100;
  const tool = useCleaningAnim(isAnalyzing);

  // 실시간 실제 카운트 계산 (인스타그램의 경우 복잡하므로 파서 활용)
  const [followerStats, setFollowerStats] = useState(0);
  const [followingStats, setFollowingStats] = useState(0);

  useEffect(() => {
    const fCount = Object.keys(parseSocialText(followersRaw, platform)).length;
    setFollowerStats(fCount);
  }, [followersRaw, platform]);

  useEffect(() => {
    const fCount = Object.keys(parseSocialText(followingRaw, platform)).length;
    setFollowingStats(fCount);
  }, [followingRaw, platform]);

  const analyze = useCallback(() => {
    setError('');
    if (!followersRaw.trim() || !followingRaw.trim()) {
      setError(t.error.empty);
      return;
    }

    setIsAnalyzing(true);
    setResults(null);

    // 청소 애니메이션 최소 1.4초 노출
    setTimeout(() => {
      const followersDict = parseSocialText(followersRaw, platform);
      const followingDict = parseSocialText(followingRaw, platform);
      const followerIds = new Set(Object.keys(followersDict));
      const followingIds = new Set(Object.keys(followingDict));

      const weeds = [...followingIds]
        .filter(id => !followerIds.has(id))
        .map(id => ({ username: id, description: followingDict[id] ?? '정보 없음' }))
        .sort((a, b) => a.username.localeCompare(b.username));

      setResults(weeds);
      setCurrentPage(1);
      setIsAnalyzing(false);
    }, 1400);
  }, [followersRaw, followingRaw, t]);

  const canAnalyze = !isAnalyzing && followersRaw.trim().length > 0 && followingRaw.trim().length > 0;

  return (
    <main>
      <div className="container">
        {/* ── Hero ── */}
        <header className="header">
          <div className="header-badge">
            {platform === 'threads' ? 'Threads Optimization' : 'Instagram Cleanup'}
          </div>
          <h1>{t.hero.title} <span>{platform === 'threads' ? 'Threads' : 'Instagram'} Garden</span></h1>
          <p>{t.hero.desc}</p>
        </header>

        {/* ── Guide ── */}
        <div className="guide">
          {t.guide[platform].map((step, i) => (
            <div key={i} className="guide-row">
              {i > 0 && <div className="guide-divider" />}
              <div className="guide-step">
                <span className="step-num">{i + 1}</span>
                <span><strong>{step.title}</strong> — {step.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Input Grid ── */}
        <div className="input-grid">
          <div className="input-card">
            <div className="input-card-header">
              <div className="input-card-icon followers">🪴</div>
              <span className="input-card-title">{t.input.followersTitle}</span>
              {followerStats > 0 && (
                <span className="input-card-count">{followerStats}{t.input.countUnit}</span>
              )}
            </div>
            <textarea
              id="followers-input"
              placeholder={t.input.followersPlaceholder}
              value={followersRaw}
              onChange={e => setFollowersRaw(e.target.value)}
            />
          </div>
          <div className="input-card">
            <div className="input-card-header">
              <div className="input-card-icon following">🌿</div>
              <span className="input-card-title">{t.input.followingTitle}</span>
              {followingStats > 0 && (
                <span className="input-card-count">{followingStats}{t.input.countUnit}</span>
              )}
            </div>
            <textarea
              id="following-input"
              placeholder={t.input.followingPlaceholder}
              value={followingRaw}
              onChange={e => setFollowingRaw(e.target.value)}
            />
          </div>
        </div>
        <div className="security-note">
          ⚠️ {t.parseNote}
        </div>

        {/* ── Error ── */}
        {error && (
          <div className="alert alert-error">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* ── Analyze Button ── */}
        <div className="analyze-row">
          <button
            id="analyze-btn"
            className={`btn-analyze ${isAnalyzing ? 'btn-analyzing' : ''}`}
            onClick={analyze}
            disabled={!canAnalyze}
          >
            {isAnalyzing ? (
              <>
                <span className="tool-spin">{tool}</span>
                {t.btn.analyzing}
              </>
            ) : t.btn.analyze}
          </button>
        </div>
        <div className="security-note">
          🔒 {t.secureNote}
        </div>

        {/* ── Support ── */}
        <div className="bmc-row">
          <a
            href="https://buy.stripe.com/eVqbJ0bnW64Fb6t2HegrS02"
            target="_blank"
            rel="noopener noreferrer"
            className="bmc-btn"
          >
            <span className="bmc-icon">🌱</span>
            <span className="bmc-label">
              {lang === 'ko' ? '씨앗 심기' : 'Plant a seed'}
            </span>
            <span className="bmc-divider">·</span>
            <span className="bmc-price">€5+</span>
          </a>
        </div>

        {/* ── Cleaning Overlay ── */}
        {isAnalyzing && (
          <div className="cleaning-banner">
            <div className="cleaning-tools">
              {TOOLS.map((emoji, i) => (
                <span
                  key={i}
                  className="cleaning-tool"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>
            <p className="cleaning-text">가든을 청소하고 있어요...</p>
          </div>
        )}

        {/* ── Results ── */}
        {results !== null && !isAnalyzing && (
          <div className="results-section">
            {results.length === 0 ? (
              <div className="alert alert-success">
                <span>🌸</span>
                <span>{t.results.empty}</span>
              </div>
            ) : (
              <>
                <div className="alert alert-warning">
                  <span>🌾</span>
                  <span dangerouslySetInnerHTML={{ __html: t.results.warning(results.length) }} />
                </div>
                <div className="result-header">
                  <div className="result-title">
                    {t.results.title}
                    <span className="result-badge">{results.length}</span>
                  </div>
                  <div className="result-actions">
                    <button className="btn-export" onClick={() => downloadCSV(results, platform)}>
                      📥 {t.btn.export}
                    </button>
                  </div>
                </div>
                <div className="table-wrapper">
                  <table className="results-table">
                    <thead>
                      <tr>
                        <th style={{ width: '40px' }}>#</th>
                        <th>{t.table.id}</th>
                        <th>{t.table.desc}</th>
                        <th>{t.table.profile}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((user, idx) => (
                        <tr key={user.username}>
                          <td className="idx-cell">{(currentPage - 1) * ITEMS_PER_PAGE + idx}</td>
                          <td><span className="username">{user.username}</span></td>
                          <td><span className="description">{user.description}</span></td>
                          <td>
                            <a
                              href={platform === 'threads' 
                                ? `https://www.threads.net/@${user.username}` 
                                : `https://www.instagram.com/${user.username}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="raw-profile-link"
                            >
                              {platform === 'threads' ? '@' : ''}{user.username} {t.nav.guide === 'Guide' ? 'Profile' : '프로필'}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {results.length > ITEMS_PER_PAGE && (
                  <div className="pagination">
                    {Array.from({ length: Math.ceil(results.length / ITEMS_PER_PAGE) }).map((_, i) => (
                      <button
                        key={i}
                        className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* ── Recent Tips Grid ── */}
        <section className="home-tips-section">
          <div className="section-header">
            <h2>{lang === 'ko' ? '정원 가꾸기 팁' : 'Gardening Tips'}</h2>
            <p className="section-subtitle">
              {lang === 'ko' 
                ? '팔로워 관리부터 알고리즘 공략까지, 전문가의 인사이트를 만나보세요.' 
                : 'From follower management to algorithm hacks, explore expert insights.'}
            </p>
          </div>

          <div className="tips-grid">
            {posts.slice(0, 6).map((post) => (
              <Link key={post.slug} href={`/tips/${post.slug}`} className="tip-card-link">
                <article className="home-tip-card">
                  <div className="tip-meta-badges">
                    <span className={`platform-tag tag-${post.platform}`}>
                      {post.platform === 'general' ? 'COMMON' : post.platform.toUpperCase()}
                    </span>
                    <span className="tip-category">{lang === 'ko' ? post.ko.category : post.en.category}</span>
                  </div>
                  <h3 className="tip-title">{lang === 'ko' ? post.ko.title : post.en.title}</h3>
                  <p className="tip-desc">{lang === 'ko' ? post.ko.description : post.en.description}</p>
                  <div className="tip-footer">
                    <span className="tip-date">{post.date}</span>
                    <span className="tip-more">{lang === 'ko' ? '자세히 보기 →' : 'Read More →'}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="section-footer">
            <Link href="/tips" className="btn-secondary">
              {lang === 'ko' ? '모든 팁 보기' : 'View All Tips'}
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
