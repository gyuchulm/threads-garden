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

                <h2>자주 묻는 질문 (FAQ)</h2>

                <h3>Q. 팔로워 목록은 어떻게 복사하나요?</h3>
                <p>
                  Threads 모바일 앱에서 내 프로필 → 팔로워 탭으로 이동합니다. 목록이 로드된 상태에서 화면을 길게 누르거나,
                  Threads 웹사이트(threads.net)에서 팔로워 목록 페이지를 열고 전체 텍스트를 드래그해 복사합니다.
                  "아이디 이름" 형식으로 줄바꿈된 텍스트가 복사되면 정상입니다.
                </p>

                <h3>Q. 팔로워가 많으면 복사가 안 되나요?</h3>
                <p>
                  팔로워가 수천 명 이상이라면 목록이 무한 스크롤 방식으로 로드됩니다. 이 경우 충분히 스크롤을 내려
                  목록을 모두 불러온 뒤 복사하는 것이 중요합니다. 일부만 복사하면 비맞팔 분석 결과의 정확도가 낮아질 수 있습니다.
                  한 번에 전체를 복사하기 어렵다면 여러 번 나눠서 붙여넣기 해도 됩니다.
                </p>

                <h3>Q. 분석 결과가 실제 숫자와 다를 수 있나요?</h3>
                <p>
                  텍스트 복사 방식 특성상 약간의 오차가 발생할 수 있습니다. Threads의 팔로워/팔로잉 표시 형식이
                  업데이트되거나, 목록이 완전히 로드되기 전에 복사한 경우 일부 계정이 누락될 수 있습니다.
                  정확도를 높이려면 목록을 끝까지 스크롤한 뒤 복사하세요.
                </p>

                <h3>Q. 인스타그램에도 사용할 수 있나요?</h3>
                <p>
                  네, Threads Garden은 인스타그램 팔로워/팔로잉 분석도 지원합니다. 홈 화면 상단의 플랫폼 탭에서
                  '인스타'를 선택하면 인스타그램 전용 분석 모드로 전환됩니다. 사용 방법은 Threads와 동일합니다.
                </p>

                <h3>Q. 로그인이나 앱 설치가 필요한가요?</h3>
                <p>
                  전혀 필요하지 않습니다. Threads Garden은 별도의 회원가입, 로그인, 앱 설치 없이 웹 브라우저에서 바로
                  사용할 수 있습니다. Threads나 인스타그램 계정 연동도 요구하지 않습니다. 텍스트 복사-붙여넣기만으로
                  모든 분석이 완료됩니다.
                </p>

                <h3>Q. 분석 후 직접 언팔로우도 해주나요?</h3>
                <p>
                  아니요. Threads Garden은 비맞팔 계정 목록을 찾아주는 분석 도구입니다. 실제 언팔로우 작업은
                  Threads 또는 인스타그램 앱에서 직접 진행해야 합니다. 자동 언팔로우 기능은 플랫폼 정책상 제공하지 않으며,
                  직접 선택해서 정리하는 방식을 권장합니다.
                </p>

                <h2>팔로잉 목록 정리, 왜 중요한가요?</h2>
                <p>
                  단순히 숫자를 줄이는 것 이상의 효과가 있습니다. Threads와 인스타그램 알고리즘은 내가 팔로우하는 계정들의
                  활동 상태를 분석해 피드 구성에 반영합니다. 오랫동안 활동하지 않은 유령 계정, 콘텐츠가 무관한 계정들이
                  팔로잉 목록에 많을수록 내 피드의 품질과 알고리즘 신호 강도가 낮아집니다.
                </p>
                <p>
                  실제로 팔로잉 목록을 정기적으로 정리한 계정들은 같은 게시물 기준으로 더 높은 노출과 반응률을 경험합니다.
                  Threads Garden을 활용해 3개월에 한 번씩 팔로잉 목록을 점검하고, 비활성 계정과 비맞팔 계정을 정리하는 것을
                  권장합니다. 작은 습관 하나가 SNS 계정 전체의 건강도를 높여줍니다.
                </p>
                <p>
                  더 자세한 전략은 <Link href="/tips/">Tips 섹션</Link>에서 확인하세요.
                </p>
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

                <h2>Frequently Asked Questions</h2>

                <h3>Q. How do I copy my follower list?</h3>
                <p>
                  Open the Threads mobile app, go to your profile, and tap the Followers tab. Once the list loads,
                  scroll through it entirely, then select all text and copy. You can also use threads.net in a desktop
                  browser, navigate to your followers page, and drag-select the full list. The copied text should appear
                  as a list of usernames separated by line breaks.
                </p>

                <h3>Q. What if I have thousands of followers?</h3>
                <p>
                  Threads uses infinite scroll, which means the full list only loads as you scroll down. For accurate
                  results, scroll all the way to the bottom of both your followers and following lists before copying.
                  If only part of the list loads, the analysis will reflect only the accounts that were loaded at the
                  time of copying.
                </p>

                <h3>Q. Can I use this for Instagram too?</h3>
                <p>
                  Yes. Threads Garden supports both Threads and Instagram follower analysis. Switch between platforms
                  using the tabs at the top of the home page. The process is identical — copy your follower and following
                  lists from Instagram, paste them in, and analyze.
                </p>

                <h3>Q. Do I need to log in or install anything?</h3>
                <p>
                  No. Threads Garden requires no account, no login, and no app installation. There is no API connection
                  to Threads or Instagram. Everything works through plain text copy-and-paste, processed entirely in
                  your browser.
                </p>

                <h3>Q. Will it automatically unfollow accounts for me?</h3>
                <p>
                  No. Threads Garden is an analysis tool — it identifies which accounts are not following you back.
                  The actual unfollowing must be done manually in the Threads or Instagram app. Automated unfollowing
                  violates platform policies, which is why we deliberately don't offer that feature.
                </p>

                <h2>Why Does Cleaning Your Following List Matter?</h2>
                <p>
                  The Threads and Instagram algorithms analyze the activity patterns of accounts you follow to shape
                  your feed and distribute your own posts. A following list full of inactive accounts or irrelevant
                  profiles weakens the quality signals your account sends to the algorithm. This can reduce how widely
                  your own posts are distributed, even if your content is good.
                </p>
                <p>
                  Accounts that regularly audit their following lists tend to see higher reach and engagement on the
                  same content. We recommend using Threads Garden once every three months to remove inactive and
                  non-reciprocal accounts. For deeper strategies on growing and managing your social presence, visit
                  the <Link href="/tips/">Tips section</Link>.
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
