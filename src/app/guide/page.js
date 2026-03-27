'use client';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Footer from '@/components/Footer';
import GuideAnimation from '@/components/GuideAnimation';

export default function GuidePage() {
  const { lang, t } = useLang();

  return (
    <main>
      <div className="container">
        <article className="article" style={{ maxWidth: '800px' }}>
          <header className="page-header">
            <div className="header-badge">📺 {t.nav?.guide || 'Guide'}</div>
            <h1>{lang === 'ko' ? '이용 및 데이터 안전 가이드' : 'How to Use & Data Safety'}</h1>
            <p className="article-lead">
              {lang === 'ko'
                ? 'Threads Garden을 사용하는 가장 쉽고 빠른 방법'
                : 'The easiest and fastest way to use Threads Garden'}
            </p>
          </header>

          <div className="article-body">
            {lang === 'ko' ? (
              <>
                <h2>1. 팔로워 / 팔로잉 텍스트 복사하기</h2>
                <p>
                  Threads 모바일 앱이나 웹사이트에서 <strong>전체 팔로워(Followers) 및 팔로잉(Following) 목록</strong>을 드래그하여 바로 복사합니다.<br />
                  복사한 텍스트를 각각 좌측과 우측 입력란에 그대로 붙여넣습니다.
                </p>
                
                <div style={{ margin: '32px 0' }}>
                  <GuideAnimation />
                </div>

                <h2>2. 잡초(비맞팔) 골라내기</h2>
                <p>
                  목록 복사가 끝났다면 하단의 단추인 <strong>[🌱 단추(가든 정리하기)]</strong>를 눌러주세요. 
                  <br/>클릭 즉시, 나를 팔로우하지 않는 계정(정리 대상) 목록이 하단 화면에 표시됩니다.
                </p>

                <h2>3. 🔒 완벽한 데이터 로컬 처리 보장</h2>
                <p>
                  내 팔로잉 리스트 데이터가 서버로 유출될까봐 불안하신가요?<br/>
                  <strong>안심하세요. Threads Garden은 여러분의 데이터를 어떤 서버에도 저장하지 않습니다.</strong> 
                </p>
                <div className="alert alert-success" style={{ marginTop: '16px' }}>
                  <span>🔒</span>
                  <span>
                    모든 텍스트 복사 & 비교 분석 작업은 <strong>오직 사용자의 브라우저 내부(Local)</strong>에서만 즉시 처리됩니다. 
                    브라우저 새로고침 시 데이터는 즉각 휘발되므로 가장 안전한 환경에서 편하게 툴을 이용하세요.
                  </span>
                </div>
              </>
            ) : (
              <>
                <h2>1. Copy Followers / Following Text</h2>
                <p>
                  Select and copy your entire <strong>following and followers list</strong> directly from the Threads app or web site.<br/>
                  Paste each list directly into the respective left and right input fields on the Home page.
                </p>
                
                <div style={{ margin: '32px 0' }}>
                  <GuideAnimation />
                </div>

                <h2>2. Organize Garden (Find Weeds)</h2>
                <p>
                  Once pasted, click the <strong>[🌱 Organize Garden]</strong> button. <br/>
                  The app will immediately scan and isolate accounts that do not follow you back.
                </p>

                <h2>3. 🔒 100% Secure Local Data Processing</h2>
                <p>
                  Are you worried about your sensitive follower list being leaked?
                  <br/><strong>Rest assured, Threads Garden does NOT store any data on any server.</strong>
                </p>
                <div className="alert alert-success" style={{ marginTop: '16px' }}>
                  <span>🔒</span>
                  <span>
                    All text copying and comparison analysis happens <strong>entirely within your own browser (Locally)</strong>. 
                    When you refresh the page, the data evaporates immediately. Feel free to use this tool safely.
                  </span>
                </div>
              </>
            )}
          </div>
        </article>

        <Footer />
      </div>
    </main>
  );
}
