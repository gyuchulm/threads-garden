'use client';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <main>
      <div className="container">
        <article className="article">
          <header className="page-header">
            <div className="header-badge">🌿</div>
            <h1>{lang === 'ko' ? 'Threads Garden 소개' : 'About Threads Garden'}</h1>
          </header>

          <div className="article-body">
            {lang === 'ko' ? (
              <>
                <h2>서비스 소개</h2>
                <p>
                  <strong>Threads Garden</strong>은 Threads(스레드) 사용자들이 팔로잉 목록을 효율적으로 관리할 수 있도록 만들어진 무료 도구입니다.
                  맞팔하지 않는 계정을 빠르게 파악하고, 더 의미 있는 관계로 채워진 피드를 만드는 것을 돕습니다.
                </p>

                <h2>왜 만들었나요?</h2>
                <p>
                  Threads는 공식 API에서 팔로잉/팔로워 비교 기능을 제공하지 않습니다.
                  수백 명의 팔로잉 목록을 수동으로 비교하는 것은 굉장히 번거롭고 시간이 많이 걸립니다.
                  Threads Garden은 이 과정을 단 몇 초로 줄여드립니다.
                </p>

                <h2>데이터는 어떻게 처리되나요?</h2>
                <p>
                  입력하신 모든 데이터는 <strong>브라우저 내에서만 처리</strong>됩니다.
                  어떤 데이터도 서버로 전송되거나 저장되지 않습니다.
                  완전히 안전합니다.
                </p>

                <h2>문의</h2>
                <p>
                  서비스 관련 문의나 피드백은 Threads 계정을 통해 연락 주세요.
                </p>
              </>
            ) : (
              <>
                <h2>About This Service</h2>
                <p>
                  <strong>Threads Garden</strong> is a free tool for Threads users to efficiently manage their following list.
                  It helps you quickly identify non-mutual follows so you can build a more meaningful feed.
                </p>

                <h2>Why We Built This</h2>
                <p>
                  Threads doesn't offer a built-in way to compare your followers vs. following lists.
                  Manually checking hundreds of accounts is tedious and time-consuming.
                  Threads Garden reduces this to seconds.
                </p>

                <h2>How Is My Data Handled?</h2>
                <p>
                  All data you input is processed <strong>entirely within your browser</strong>.
                  Nothing is sent to or stored on any server. It's completely private and safe.
                </p>

                <h2>Contact</h2>
                <p>
                  For feedback or questions, please reach out via Threads.
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
