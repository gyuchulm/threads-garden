'use client';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  const { lang } = useLang();
  const today = '2025-03-20';

  return (
    <main>
      <div className="container">
        <article className="article">
          <header className="page-header">
            <h1>{lang === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}</h1>
            <p className="article-lead">
              {lang === 'ko' ? `최종 수정일: ${today}` : `Last updated: ${today}`}
            </p>
          </header>

          <div className="article-body">
            {lang === 'ko' ? (
              <>
                <h2>1. 수집하는 정보</h2>
                <p>
                  Threads Garden은 사용자로부터 어떠한 개인정보도 수집하지 않습니다.
                  팔로워/팔로잉 텍스트 데이터는 사용자의 브라우저 내에서만 처리되며,
                  서버로 전송되거나 저장되지 않습니다.
                </p>

                <h2>2. 쿠키 및 트래킹</h2>
                <p>
                  본 서비스는 현재 쿠키, 로컬스토리지, 세션스토리지 등을 통해 사용자 정보를 저장하지 않습니다.
                  향후 애드센스(Google AdSense) 광고 서비스가 추가될 경우, Google의 쿠키 정책에 따라
                  광고 목적의 쿠키가 사용될 수 있습니다.
                </p>

                <h2>3. 제3자 서비스</h2>
                <p>
                  본 사이트는 Google AdSense 광고를 표시할 수 있습니다.
                  Google은 사용자의 웹 활동을 기반으로 맞춤 광고를 제공하기 위해 쿠키를 사용합니다.
                  Google의 개인정보 처리방침은 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>에서 확인하실 수 있습니다.
                </p>

                <h2>4. 외부 링크</h2>
                <p>
                  본 서비스는 Threads 프로필 링크 등 외부 사이트로 연결되는 링크를 포함합니다.
                  외부 사이트의 개인정보처리방침에 대해서는 책임을 지지 않습니다.
                </p>

                <h2>5. 개인정보처리방침 변경</h2>
                <p>
                  본 방침은 서비스 변경에 따라 업데이트될 수 있으며,
                  변경 시 이 페이지에 최종 수정일을 업데이트하여 고지합니다.
                </p>

                <h2>6. 문의</h2>
                <p>
                  개인정보 관련 문의는 Threads 계정을 통해 연락해 주세요.
                </p>
              </>
            ) : (
              <>
                <h2>1. Information We Collect</h2>
                <p>
                  Threads Garden does not collect any personal information from users.
                  Follower/following text data is processed entirely within your browser
                  and is never transmitted to or stored on any server.
                </p>

                <h2>2. Cookies & Tracking</h2>
                <p>
                  This service currently does not store any user information via cookies, localStorage, or sessionStorage.
                  If Google AdSense advertising is added in the future, cookies may be used for advertising purposes in accordance with Google's cookie policies.
                </p>

                <h2>3. Third-Party Services</h2>
                <p>
                  This site may display Google AdSense ads. Google uses cookies to serve personalized ads based on your web activity.
                  Google's Privacy Policy can be found at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
                </p>

                <h2>4. External Links</h2>
                <p>
                  This service contains links to external sites such as Threads profiles.
                  We are not responsible for the privacy practices of those external sites.
                </p>

                <h2>5. Changes to This Policy</h2>
                <p>
                  This policy may be updated as the service evolves.
                  Changes will be reflected by updating the "Last updated" date on this page.
                </p>

                <h2>6. Contact</h2>
                <p>
                  For privacy-related inquiries, please contact us via Threads.
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
