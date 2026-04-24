'use client';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  const { lang } = useLang();
  const today = '2026-04-24';

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
                <h2>1. 개요 및 연락처</h2>
                <p>
                  SNS Garden(https://sns-garden.com, 이하 "서비스")은 사용자의 개인정보를 소중히
                  다루며, 관련 법령(개인정보 보호법, GDPR, CCPA 등)을 준수합니다. 본 방침과 관련된
                  모든 문의는 <a href="mailto:automative2099@gmail.com">automative2099@gmail.com</a>
                  으로 연락해 주시기 바랍니다. (운영자: SNS Garden / 데이터 책임자 연락처: 동일 이메일)
                </p>

                <h2>2. 데이터 처리 원칙 (Data Sovereignty)</h2>
                <p>
                  SNS Garden의 핵심 기술 원칙은 <strong>"서버 수집 없는 로컬 처리(Zero-Server Local Processing)"</strong>
                  입니다. 사용자가 팔로워·팔로잉 입력란에 붙여넣는 텍스트는 사용자 브라우저의 메모리
                  안에서만 연산되며, 당사의 서버로 전송되지 않고 어떠한 데이터베이스에도 저장되지 않습니다.
                  분석이 끝나고 탭을 닫는 순간 해당 데이터는 즉시 소거됩니다.
                </p>

                <h2>3. 수집·처리되는 정보의 구분</h2>
                <p>
                  본 서비스가 관여하는 정보는 크게 세 가지로 구분됩니다.
                </p>
                <ul>
                  <li><strong>(a) 사용자가 직접 붙여넣는 데이터</strong> — 팔로워·팔로잉 텍스트. 브라우저 내부에서만 처리되며 서버로 전송되지 않습니다.</li>
                  <li><strong>(b) 접속 로그 성격의 정보</strong> — IP 주소, 브라우저 종류, 접속 시각, 유입 경로, 대략적 위치(국가 수준). 이는 제3자 분석 도구(Google Analytics, Vercel Analytics)에 의해 비식별 또는 가명 처리된 형태로 수집·분석됩니다.</li>
                  <li><strong>(c) 광고 제공을 위한 쿠키·식별자</strong> — 아래 제4항에 따라 Google AdSense 및 파트너가 운영합니다.</li>
                </ul>

                <h2>4. 제3자 서비스 및 광고 (Google AdSense)</h2>
                <p>
                  본 서비스는 지속 가능한 운영을 위해 Google AdSense 광고를 게재할 수 있습니다. 이 과정에서
                  Google을 포함한 제3자 광고 공급업체는 다음과 같이 동작합니다.
                </p>
                <ul>
                  <li>Google을 비롯한 <strong>제3자 광고 공급업체 및 광고 네트워크</strong>는 사용자가 본 사이트 및 인터넷상의 다른 사이트를 방문한 기록을 토대로 광고를 게재하기 위해 쿠키를 사용합니다.</li>
                  <li>Google의 <strong>DART 쿠키</strong>를 사용하면 Google과 파트너가 본 사이트 및 인터넷상의 다른 사이트 방문 기록을 바탕으로 사용자에게 관련성 높은 광고를 게재할 수 있습니다.</li>
                  <li>사용자는 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google 광고 설정</a>을 방문하여 맞춤형 광고 게재를 거부(Opt-out)할 수 있습니다.</li>
                  <li>제3자 광고 공급업체의 쿠키 사용에 대한 추가 정보와 Opt-out 방법은 <a href="https://www.aboutads.info/" target="_blank" rel="noopener noreferrer">www.aboutads.info</a> 에서 확인할 수 있습니다.</li>
                  <li>EU·EEA·영국 이용자의 경우, 서비스는 Google의 EU 사용자 동의 정책에 따라 맞춤 광고 사용 전 별도 동의를 수집합니다.</li>
                </ul>

                <h2>5. 방문 분석 (Analytics)</h2>
                <p>
                  사용자 경험 개선과 사이트 트래픽 분석을 위해 Vercel Analytics 및 Google Analytics(GA4)를
                  사용할 수 있습니다. 이 과정에서 수집되는 정보는 비식별화된 통계(브라우저 유형, 접속
                  시간, 유입 경로, 대략적 위치 등)이며, 성명·전화번호 등 직접 식별 정보는 포함되지
                  않습니다. Google Analytics의 데이터 처리는
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Google 개인정보처리방침</a>의 적용을 받습니다.
                </p>

                <h2>6. 결제 및 후원 (Stripe)</h2>
                <p>
                  본 서비스는 자발적 후원 결제 기능을 제공하며, 결제는 Stripe, Inc.에 의해 처리됩니다.
                  후원 시 입력되는 카드 정보 등은 Stripe에 직접 전송되며 SNS Garden은 이를 전혀 수집·보관하지
                  않습니다. 자세한 내용은
                  <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer"> Stripe 개인정보처리방침</a>을 참고해 주십시오.
                </p>

                <h2>7. 쿠키 및 로컬 스토리지 관리</h2>
                <p>
                  본 사이트는 기본 기능 수행(언어 설정 저장, 플랫폼 설정 유지 등)을 위해 쿠키나 로컬
                  스토리지를 사용할 수 있습니다. 또한 광고·분석 목적으로 제3자 쿠키가 사용될 수 있으며,
                  EU·EEA·영국 이용자에게는 최초 방문 시 동의 배너를 통해 선택권을 제공합니다.
                  사용자는 언제든지 브라우저 설정에서 쿠키 저장을 거부·삭제할 수 있으나, 일부 기능의
                  이용이 제한될 수 있습니다.
                </p>

                <h2>8. 이용자 권리</h2>
                <p>
                  EU GDPR 및 캘리포니아 CCPA에 따라 사용자는 본인의 개인정보에 대한 접근·정정·삭제·처리
                  제한·이전 요청권 및 자동화된 의사결정에 대한 거부권을 가집니다. 본 서비스는 사용자의
                  팔로워·팔로잉 데이터를 저장하지 않으므로 해당 권리 행사에 필요한 실질 데이터가 존재하지
                  않으나, 접속 로그·광고 식별자 등 간접 정보에 대한 문의는 이메일로 접수됩니다.
                </p>

                <h2>9. 데이터 보안</h2>
                <p>
                  모든 분석 연산은 클라이언트 사이드에서 이루어져 서버 데이터 유출 위험으로부터 구조적으로
                  격리되어 있습니다. 다만 제3자 스크립트(Google AdSense, Google Analytics, Vercel
                  Analytics, Stripe)는 각 제공자가 자체 보안 정책에 따라 운영하며, 본 서비스는 해당
                  제3자 시스템의 보안 사고에 대해서는 직접적인 통제력이 없습니다.
                </p>

                <h2>10. 아동의 개인정보</h2>
                <p>
                  본 서비스는 만 14세 미만 아동을 주 대상으로 하지 않습니다. 14세 미만 아동의 개인정보가
                  부주의로 수집된 사실이 확인되는 경우, 즉시 해당 데이터를 삭제 조치합니다.
                </p>

                <h2>11. 방침 변경</h2>
                <p>
                  본 방침은 관계 법령·서비스 정책의 변경에 따라 개정될 수 있으며, 변경 시 본 페이지에
                  개정일과 함께 공지합니다. 중대한 변경이 있을 경우 사이트 상단 등을 통해 별도로
                  안내합니다.
                </p>

                <h2>12. 문의처</h2>
                <div className="tool-cta" style={{ marginTop: '20px', padding: '16px' }}>
                  <p style={{ marginBottom: 0 }}>
                    📬 Email: <a href="mailto:automative2099@gmail.com">automative2099@gmail.com</a>
                  </p>
                </div>
                <p style={{ marginTop: '16px' }}>
                  관련 이용약관은 <Link href="/terms/">이용약관 페이지</Link>에서 확인할 수 있습니다.
                </p>
              </>
            ) : (
              <>
                <h2>1. Overview and Contact</h2>
                <p>
                  SNS Garden (https://sns-garden.com, "the Service") takes user privacy seriously and complies
                  with applicable data protection laws including Korea's PIPA, the EU GDPR, and California's
                  CCPA. For any inquiry related to this policy, please contact
                  {' '}<a href="mailto:automative2099@gmail.com">automative2099@gmail.com</a>. (Operator: SNS
                  Garden; data officer contact: same email.)
                </p>

                <h2>2. Data Processing Principle (Data Sovereignty)</h2>
                <p>
                  The core technical principle of SNS Garden is <strong>"Zero-Server Local Processing."</strong>
                  Any text you paste into the follower/following input fields is processed solely within your
                  browser's RAM. It is never transmitted to our servers, never stored in any database, and is
                  permanently erased the moment you close the tab.
                </p>

                <h2>3. Categories of Information</h2>
                <p>
                  The Service handles three distinct categories of information:
                </p>
                <ul>
                  <li><strong>(a) Data you paste directly</strong> — your follower/following lists. These are processed entirely inside your browser and are never sent to our servers.</li>
                  <li><strong>(b) Access-log-style information</strong> — IP address, browser type, access timestamp, referrer, and coarse location (country level). This is collected in de-identified or pseudonymized form by third-party analytics providers (Google Analytics, Vercel Analytics).</li>
                  <li><strong>(c) Advertising cookies and identifiers</strong> — operated by Google AdSense and its partners as described in Section 4.</li>
                </ul>

                <h2>4. Third-Party Services and Advertising (Google AdSense)</h2>
                <p>
                  To sustain the free operation of the Service, we may display advertisements through Google
                  AdSense. In this process, Google and other third-party vendors operate as follows:
                </p>
                <ul>
                  <li><strong>Third-party vendors, including Google,</strong> use cookies to serve ads based on a user's prior visits to this website or other websites.</li>
                  <li>Google's use of the <strong>DART cookie</strong> enables it and its partners to serve ads to users based on their visit to this site and/or other sites on the Internet.</li>
                  <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</li>
                  <li>For additional information about third-party vendor cookies and to opt out via the Digital Advertising Alliance, visit <a href="https://www.aboutads.info/" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.</li>
                  <li>For users in the EU, EEA, and the UK, the Service collects prior consent for personalized advertising in accordance with Google's EU user consent policy.</li>
                </ul>

                <h2>5. Traffic Analytics</h2>
                <p>
                  We may use Vercel Analytics and Google Analytics (GA4) to understand site usage and improve
                  user experience. The information collected is de-identified statistical information (browser
                  type, visit duration, referrer, coarse location, etc.) and does not include direct identifiers
                  such as name or phone number. Google Analytics data handling is governed by the
                  {' '}<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.
                </p>

                <h2>6. Payments and Support (Stripe)</h2>
                <p>
                  The Service supports voluntary financial contributions, which are processed by Stripe, Inc.
                  Card data you enter during checkout is transmitted directly to Stripe. SNS Garden does not
                  collect or retain any payment card information. For details, please review the
                  {' '}<a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe Privacy Policy</a>.
                </p>

                <h2>7. Cookies and Local Storage</h2>
                <p>
                  This site may use cookies or local storage for basic functional purposes (saving language
                  preferences, retaining platform selection, etc.). Third-party cookies may also be used for
                  analytics and advertising purposes, and users in the EU, EEA, and the UK are presented with
                  a consent banner on first visit. You may refuse or delete cookies at any time through your
                  browser settings, although some functionality may be limited as a result.
                </p>

                <h2>8. Your Rights</h2>
                <p>
                  Under the EU GDPR and California's CCPA, you have the right to access, correct, delete,
                  restrict, and port your personal information, and to object to automated decision-making.
                  Because SNS Garden does not store your follower/following data, there is typically no
                  substantive data to act on for those specific categories; however, inquiries about
                  access-log-level or advertising-identifier data can be submitted by email.
                </p>

                <h2>9. Data Security</h2>
                <p>
                  All analysis runs on the client side, so your paste input is structurally isolated from
                  server-side data-breach risk. Third-party scripts (Google AdSense, Google Analytics, Vercel
                  Analytics, Stripe) operate under each provider's own security policy, and the Service does
                  not have direct control over security incidents affecting those third-party systems.
                </p>

                <h2>10. Children's Privacy</h2>
                <p>
                  The Service is not primarily directed at children under 14. If we become aware that personal
                  information of a child under 14 has been inadvertently collected, we will promptly delete it.
                </p>

                <h2>11. Changes to This Policy</h2>
                <p>
                  This policy may be updated to reflect changes in applicable law or service policy. Any
                  updates will be posted on this page with a revised "Last updated" date. Material changes may
                  additionally be announced via a site-wide notice.
                </p>

                <h2>12. Contact</h2>
                <div className="tool-cta" style={{ marginTop: '20px', padding: '16px' }}>
                  <p style={{ marginBottom: 0 }}>
                    📬 Email: <a href="mailto:automative2099@gmail.com">automative2099@gmail.com</a>
                  </p>
                </div>
                <p style={{ marginTop: '16px' }}>
                  See our <Link href="/terms/">Terms of Service</Link> for related usage rules.
                </p>
              </>
            )}
          </div>
        </article>

        <Footer />
      </div>
    </main>
  );
}
