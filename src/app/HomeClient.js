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
                  <div className="result-header-center">
                    <a
                      href="https://buy.stripe.com/eVqbJ0bnW64Fb6t2HegrS02"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="support-nudge-btn-sm"
                    >
                      🌱 {lang === 'ko' ? '씨앗 심기' : 'Plant a seed'} · €5+
                    </a>
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

            {/* ── Support nudge (결과 확인 후) ── */}
            <div className="support-nudge">
              <p className="support-nudge-text">
                {lang === 'ko' ? '이 서비스가 도움이 됐다면 🌿' : 'If this was helpful 🌿'}
              </p>
              <a
                href="https://buy.stripe.com/eVqbJ0bnW64Fb6t2HegrS02"
                target="_blank"
                rel="noopener noreferrer"
                className="support-nudge-btn"
              >
                <span>🌱</span>
                <span>{lang === 'ko' ? '씨앗 심기' : 'Plant a seed'}</span>
                <span className="bmc-divider">·</span>
                <span>€5+</span>
              </a>
            </div>
          </div>
        )}

        {/* ── About Section ── */}
        <section className="home-about-section">
          {lang === 'ko' ? (
            <>
              <h2>SNS Garden이란 무엇인가요?</h2>
              <p>
                SNS Garden은 Threads와 인스타그램의 팔로워·팔로잉 목록을 비교해 맞팔하지 않는 계정을 즉시 찾아주는
                무료 분석 도구입니다. 회원가입도, 앱 설치도, 로그인도 필요 없습니다. 복사한 텍스트를 붙여넣는 것만으로
                수백, 수천 명의 목록을 수 초 안에 분석합니다.
              </p>
              <p>
                모든 데이터는 여러분의 브라우저 안에서만 처리됩니다. 어떤 서버에도 저장되지 않으며,
                탭을 닫는 순간 완전히 삭제됩니다. 개인 정보 보호를 최우선으로 설계된 도구입니다.
              </p>

              <h2>왜 팔로잉 목록을 정리해야 할까요?</h2>
              <p>
                Threads와 인스타그램 알고리즘은 내가 팔로우하는 계정들의 활동 상태를 분석해 피드 구성에 반영합니다.
                활동하지 않는 유령 계정, 콘텐츠와 무관한 계정들이 팔로잉 목록에 쌓일수록 알고리즘이 내 계정에
                부여하는 네트워크 신호 품질이 낮아집니다. 이것은 게시물 도달 범위에 직접적인 영향을 줍니다.
              </p>
              <p>
                반대로 팔로잉 목록을 정기적으로 정리하면 피드 품질이 높아지고, 진짜 관심 있는 콘텐츠가
                더 많이 노출되며, 내 게시물의 알고리즘 반응률도 점진적으로 개선됩니다.
                단순한 숫자 줄이기가 아니라 디지털 공간을 건강하게 유지하는 습관입니다.
              </p>

              <h2>SNS Garden의 특징</h2>
              <ul className="home-feature-list">
                <li><strong>완전 무료</strong> — 모든 기능을 제한 없이 무료로 이용할 수 있습니다.</li>
                <li><strong>100% 브라우저 처리</strong> — 데이터가 서버를 경유하지 않아 개인정보 유출 위험이 없습니다.</li>
                <li><strong>설치 불필요</strong> — 앱 설치나 계정 연동 없이 웹에서 바로 사용합니다.</li>
                <li><strong>Threads + 인스타그램 지원</strong> — 두 플랫폼 모두 분석할 수 있습니다.</li>
                <li><strong>CSV 내보내기</strong> — 비맞팔 계정 목록을 파일로 저장해 관리할 수 있습니다.</li>
              </ul>
              <p>
                처음 사용하신다면 <Link href="/guide">이용 가이드</Link>를 먼저 읽어보세요.
                더 자세한 SNS 성장 전략은 <Link href="/tips">Tips 섹션</Link>에서 확인할 수 있습니다.
              </p>
            </>
          ) : (
            <>
              <h2>What is SNS Garden?</h2>
              <p>
                SNS Garden is a free browser-based tool that compares your followers and following lists on Threads
                and Instagram to instantly identify accounts that don't follow you back. No signup, no app installation,
                no login required. Paste your copied lists and get results in seconds.
              </p>
              <p>
                Everything is processed entirely inside your browser. Nothing is stored on any server, and all data
                disappears the moment you close the tab. Privacy-first by design.
              </p>

              <h2>Why Clean Your Following List?</h2>
              <p>
                The Threads and Instagram algorithms factor in the activity patterns of accounts you follow when
                shaping your feed and distributing your posts. A following list full of inactive accounts or
                irrelevant profiles weakens the network quality signals your account sends to the algorithm —
                which directly reduces how widely your posts are seen.
              </p>
              <p>
                Regular audits of your following list improve feed quality, surface content you actually care about,
                and gradually improve how the algorithm responds to your posts. It's not about chasing numbers —
                it's about maintaining a healthy digital space.
              </p>

              <h2>What Makes SNS Garden Different</h2>
              <ul className="home-feature-list">
                <li><strong>Completely free</strong> — No paywalls, no limits on any feature.</li>
                <li><strong>100% browser-processed</strong> — Your data never leaves your device.</li>
                <li><strong>No installation</strong> — No app, no account connection. Works in any browser.</li>
                <li><strong>Threads + Instagram</strong> — Switch between platforms with one click.</li>
                <li><strong>CSV export</strong> — Download your non-follower list for offline review.</li>
              </ul>
              <p>
                New to SNS Garden? Read the <Link href="/guide">How-to Guide</Link> to get started.
                For deeper growth strategies, explore the <Link href="/tips">Tips section</Link>.
              </p>
            </>
          )}
        </section>

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
