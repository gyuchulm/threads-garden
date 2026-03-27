'use client';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  const { lang } = useLang();
  const today = '2026-03-27';

  return (
    <main>
      <div className="container">
        <header className="page-header">
          <div className="header-badge">🛡️ {lang === 'ko' ? '보안 및 신뢰' : 'Security & Trust'}</div>
          <h1>{lang === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}</h1>
          <p className="article-lead">
            {lang === 'ko' ? `최종 수정일: ${today}` : `Last updated: ${today}`}
          </p>
        </header>

        <article className="article" style={{ paddingTop: 0 }}>
          <div className="article-body">
            {lang === 'ko' ? (
              <>
                <h2>1. 데이터 처리 원칙 (Data Sovereignty)</h2>
                <p>
                  SNS Garden은 사용자의 데이터 주권을 최우선으로 합니다. 
                  우리의 핵심 기술적 자부심은 <strong>"서버 수집 없는 로컬 처리"</strong>입니다. 
                  사용자가 붙여넣는 팔로워/팔로잉 데이터는 사용자의 웹 브라우저 메모리 내에서만 연산되며, 
                  당사의 서버로 전송되거나 어떠한 형태로도 별도 저장되지 않습니다.
                </p>

                <h2>2. 제3자 서비스 및 광고 (Google AdSense)</h2>
                <p>
                  본 서비스는 지속 가능한 운영을 위해 Google AdSense 광고를 게재할 수 있습니다. 
                  이 과정에서 Google은 다음과 같은 방식을 사용합니다:
                </p>
                <ul>
                  <li>Google 등 제3자 판매업체는 사용자의 이전 웹사이트 방문 기록을 토대로 맞춤형 광고를 게재하기 위해 쿠키를 사용합니다.</li>
                  <li>Google의 <strong>광고 쿠키(DART 쿠키)</strong> 사용을 통해 사용자가 본 사이트 및 인터넷의 다른 사이트를 방문한 기록을 바탕으로 관련성 높은 광고를 제공할 수 있습니다.</li>
                  <li>사용자는 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google 광고 설정</a>을 방문하여 맞춤형 광고 게재를 중단(Opt-out)할 수 있습니다.</li>
                </ul>

                <h2>3. 방문 분석 (Analytics)</h2>
                <p>
                  사용자 경험 개선과 사이트 트래픽 분석을 위해 Vercel Analytics 및 Google Analytics를 사용합니다. 
                  이 과정에서 수집되는 정보는 비식별화된 통계 정보(브라우저 유형, 접속 시간, 유입 경로 등)이며, 
                  어떠한 개인 식별 정보도 포함하지 않습니다.
                </p>

                <h2>4. 쿠키 및 로컬 스토리지 관리</h2>
                <p>
                  본 사이트는 서비스의 기본 기능 수행(언어 설정 저장 등)을 위해 쿠키나 로컬 스토리지를 사용할 수 있습니다. 
                  사용자는 브라우저 설정을 통해 쿠키 수집을 거부하거나 저장된 쿠키를 삭제할 수 있습니다. 
                  다만, 쿠키 수집 거부 시 서비스의 일부 기능 이용에 어려움이 있을 수 있습니다.
                </p>

                <h2>5. 데이터 보안</h2>
                <p>
                  모든 데이터 연산은 클라이언트 사이드(Client-side)에서 이루어지므로 물리적인 서버 데이터 유출 위험으로부터 안전합니다. 
                  사용자가 분석을 마치고 브라우저 탭을 닫는 순간, 메모리에 로드되었던 모든 분석 데이터는 즉시 소거됩니다.
                </p>

                <h2>6. 문의처</h2>
                <p>
                  본 개인정보 처리방침 또는 서비스 이용 중 궁금한 점이 있으시면 아래의 공식 연락처로 문의해 주시기 바랍니다.
                </p>
                <div className="tool-cta" style={{ marginTop: '20px', padding: '16px' }}>
                  <p style={{ marginBottom: 0 }}>
                    Email: <a href="mailto:automative2099@gmail.com">automative2099@gmail.com</a>
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2>1. Data Processing Principles (Data Sovereignty)</h2>
                <p>
                  At SNS Garden, user data sovereignty is our top priority. 
                  Our technical pride lies in <strong>"Zero-Server Local Processing."</strong> 
                  Follower and following data pasted by users is processed exclusively within your web browser\'s RAM. 
                  It is never transmitted to our servers or stored in any external database.
                </p>

                <h2>2. Third-Party Services & Advertising (Google AdSense)</h2>
                <p>
                  To sustain our free service, we may display Google AdSense advertisements. 
                  In this process, Google operates as follows:
                </p>
                <ul>
                  <li>Third-party vendors, including Google, use cookies to serve ads based on a user\'s prior visits to your website or other websites.</li>
                  <li>Google\'s use of <strong>advertising cookies (including the DART cookie)</strong> enables it and its partners to serve ads to users based on their visit to your sites and/or other sites on the Internet.</li>
                  <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</li>
                </ul>

                <h2>3. Traffic Analysis (Analytics)</h2>
                <p>
                  We use Vercel Analytics and Google Analytics to monitor site traffic and improve user experience. 
                  The collected data involves de-identified statistical information (e.g., browser type, visit duration, referral paths) and does not include any personally identifiable information (PII).
                </p>

                <h2>4. Cookies and Local Storage Management</h2>
                <p>
                  This site may use cookies or local storage for basic functional purposes (such as saving language preferences). 
                  Users can refuse the collection of cookies or delete saved cookies through their browser settings. 
                  However, rejecting cookies may result in the limitation of certain site functionalities.
                </p>

                <h2>5. Data Security</h2>
                <p>
                  Since all data computation is performed on the client side, your information is physically isolated from server-side data breach risks. 
                  The moment you close the browser tab after analysis, all data loaded in the RAM is instantly purged.
                </p>

                <h2>6. Contact Us</h2>
                <p>
                  If you have any questions regarding this Privacy Policy or our services, please contact us via our official email.
                </p>
                <div className="tool-cta" style={{ marginTop: '20px', padding: '16px' }}>
                  <p style={{ marginBottom: 0 }}>
                    Email: <a href="mailto:automative2099@gmail.com">automative2099@gmail.com</a>
                  </p>
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
