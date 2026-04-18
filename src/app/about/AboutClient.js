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
            <div className="header-badge">🌿 {lang === 'ko' ? 'SNS Garden 소개' : 'About SNS Garden'}</div>
            <h1>{lang === 'ko' ? 'SNS Garden을 만든 이유' : 'Why We Built SNS Garden'}</h1>
            <p className="article-lead">
              {lang === 'ko'
                ? '더 깨끗하고, 더 의미 있는 소셜 미디어 경험을 위한 여정에서 시작되었습니다.'
                : 'It started with a simple frustration. And a belief that your digital space should feel like yours.'}
            </p>
          </header>

          <div className="article-body">
            {lang === 'ko' ? (
              <>
                <h2>처음엔 단순한 불편함에서 시작했습니다</h2>
                <p>
                  SNS를 운영하다 보면 어느 순간 이런 생각이 듭니다. "내가 왜 이 사람을 팔로우하고 있지?" Threads나 인스타그램을 몇 달만 써도
                  팔로잉 목록은 수백, 수천 명으로 불어나 있고, 정작 나에게 중요한 사람들의 글은 피드에서 밀려 보이지 않게 됩니다.
                  맞팔하지 않는 계정, 6개월째 글 한 줄 올리지 않은 유령 계정들. 이것들이 조용히 내 디지털 공간을 점령하고 있었습니다.
                </p>
                <p>
                  수동으로 하나씩 대조하는 건 지루하고 오래 걸립니다. 그래서 만들었습니다. 내가 쓰려고. 그게 SNS Garden의 시작입니다.
                </p>

                <h2>우리가 지키는 단 하나의 원칙</h2>
                <p>
                  SNS Garden은 여러분의 데이터를 단 1바이트도 서버에 저장하지 않습니다. 팔로워 목록, 팔로잉 목록, 어떠한 개인 정보도
                  우리의 서버를 거치지 않습니다. 붙여넣기 한 텍스트는 오직 여러분의 웹 브라우저 메모리 안에서만 처리되고,
                  탭을 닫는 순간 영구적으로 소거됩니다.
                </p>
                <p>
                  이것은 기술적 선택이었지만, 동시에 철학적 선택이기도 합니다. "무료"라는 이름 아래 사용자 데이터로 돈을 버는 수많은 도구들을
                  보면서, SNS Garden은 다른 방향을 선택했습니다. 지속 가능성을 위해 소량의 구글 광고를 게재하지만, 그것이 전부입니다.
                  여러분의 팔로워 목록은 팔지 않습니다.
                </p>

                <h2>이 사이트에서 다루는 주제들</h2>
                <p>
                  SNS Garden은 단순한 도구를 넘어, SNS를 더 현명하게 운영하려는 모든 분들을 위한 정보 공간이기도 합니다.
                  우리가 다루는 주제는 다음과 같습니다:
                </p>
                <ul>
                  <li>Threads와 인스타그램의 알고리즘 원리와 최신 업데이트 분석</li>
                  <li>팔로워 수보다 중요한 진짜 성장 지표 해석법</li>
                  <li>릴스, 스토리, 게시물 유형별 최적화 전략</li>
                  <li>디지털 피로를 줄이고 건강한 SNS 습관을 만드는 방법</li>
                  <li>소규모 마이크로 인플루언서로서 지속 가능한 수익화 전략</li>
                </ul>
                <p>
                  초보자가 처음 읽어도 이해할 수 있도록 쓰되, 경험자가 읽었을 때도 새로운 관점이나 심화 팁을 얻어갈 수 있는 깊이를 목표로 합니다.
                  텍스트는 길지 몰라도 읽고 나면 하나라도 실행에 옮길 수 있는 내용이길 바랍니다.
                </p>

                <h2>SNS Garden 도구, 어떻게 쓰는 건가요?</h2>
                <p>
                  사용법은 아주 간단합니다. Threads나 인스타그램 앱에서 팔로워 목록과 팔로잉 목록을 텍스트로 복사한 뒤,
                  SNS Garden 분석기에 붙여넣으면 됩니다. 브라우저가 두 목록을 비교해 맞팔하지 않는 계정들을 즉시 추출해줍니다.
                  회원가입도, 로그인도, 앱 설치도 필요 없습니다.
                </p>
                <p>
                  처음 써보는 분들이 가장 많이 하는 질문은 "정말 서버에 안 가나요?"입니다. 네, 정말입니다. 이 도구는 순수하게
                  자바스크립트로 작성된 브라우저 앱이며, 외부 서버와 통신하는 코드가 없습니다. 개발자 도구 네트워크 탭으로
                  직접 확인해보셔도 됩니다. 숨길 것이 없습니다.
                </p>

                <h2>이 사이트의 콘텐츠는 어떻게 만들어지나요?</h2>
                <p>
                  SNS Garden의 모든 글은 직접 SNS 계정을 운영하면서 실제로 적용해본 전략과 관찰을 바탕으로 작성됩니다.
                  어떤 방법이 효과가 있었고, 어떤 것이 기대와 달랐는지 솔직하게 기록합니다.
                </p>
                <p>
                  특히 알고리즘 관련 내용은 인스타그램과 Threads의 공식 자료, 메타 엔지니어들의 발표, 그리고 직접 실험한 데이터를
                  종합해 작성합니다. "이렇게 하면 좋다더라"는 수준의 정보가 아니라, 왜 그렇게 작동하는지 원리를 함께 설명하려
                  노력합니다. 그래야 플랫폼이 바뀌어도 스스로 판단할 수 있기 때문입니다.
                </p>

                <h2>앞으로 어떤 내용이 추가될 예정인가요?</h2>
                <p>
                  현재 준비 중인 콘텐츠는 다음과 같습니다:
                </p>
                <ul>
                  <li>Threads 팔로워 분석기 기능 확장 — 계정 활동 패턴별 분류 기능</li>
                  <li>인스타그램 스토리 조회수 분석 가이드</li>
                  <li>소규모 계정 운영자를 위한 월별 SNS 점검 체크리스트</li>
                  <li>플랫폼별 알고리즘 변화 모니터링 시리즈</li>
                </ul>
                <p>
                  업데이트 소식을 놓치지 않으려면 북마크를 추가해두거나, 이메일로 피드백을 보내주시면 새 글이 올라올 때
                  알림을 받을 수 있도록 방법을 안내해드리겠습니다.
                </p>

                <h2>정원사는 익명이지만, 정원은 실제입니다</h2>
                <p>
                  SNS Garden의 운영자는 익명을 유지합니다. 하지만 이 안에 담긴 정보들은 직접 SNS를 운영하고, 실험하고,
                  실패하고, 성장하면서 쌓아온 실제 경험에서 비롯된 것들입니다. 팔로워 수가 정체됐을 때 느꼈던 답답함,
                  언팔로우 정리 후 피드가 달라지는 걸 처음 확인했을 때의 놀라움, 릴스 한 편이 갑자기 터졌다가 다음 편은
                  묻혔을 때의 당혹감. 이런 경험들이 쌓여 이 사이트가 됐습니다.
                </p>
                <p>
                  이름 없는 정원사가 가꾸는 이 공간이 여러분의 디지털 생활에 조금이나마 도움이 되길 바랍니다. 궁금한 점이나
                  피드백이 있으시면 언제든지 아래 이메일로 연락 주세요. 모든 메시지를 직접 읽고 답장합니다.
                </p>
                <p>
                  도구 사용법이 궁금하다면 <Link href="/guide">이용 가이드</Link>를,
                  SNS 성장 전략이 필요하다면 <Link href="/tips">Tips 섹션</Link>을 방문해주세요.
                </p>
                <div className="tool-cta" style={{ marginTop: '20px', padding: '16px' }}>
                  <p style={{ marginBottom: 0 }}>
                    📬 Email: <a href="mailto:automative2099@gmail.com">automative2099@gmail.com</a>
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2>It Started with a Simple Frustration</h2>
                <p>
                  After using Threads and Instagram for a while, you start to notice it. Your Following list has grown into
                  hundreds, sometimes thousands of accounts. Some haven't posted in months. Some never followed you back.
                  And the posts from people you actually care about? They're buried somewhere you never scroll to.
                </p>
                <p>
                  Comparing lists manually is tedious and time-consuming. So we built a tool to do it automatically.
                  We built it for ourselves, first. That's where SNS Garden began.
                </p>

                <h2>One Principle We Never Compromise On</h2>
                <p>
                  SNS Garden stores absolutely zero bytes of your data on our servers. Your follower list, your following list,
                  any personal information—none of it ever touches our infrastructure. Everything you paste into the tool
                  is processed exclusively inside your web browser's RAM, and the moment you close the tab,
                  it's permanently erased.
                </p>
                <p>
                  This was a deliberate technical and philosophical choice. Watching countless "free" tools quietly collect and
                  monetize user data, we chose a different path. We sustain the service through a small amount of Google
                  advertising—that's it. Your follower data is not for sale.
                </p>

                <h2>What We Write About Here</h2>
                <p>
                  SNS Garden is more than a tool. It's also a resource for anyone trying to use social media more intentionally.
                  Here are the topics we cover:
                </p>
                <ul>
                  <li>How the Threads and Instagram algorithms actually work, and what recent updates mean for you</li>
                  <li>The metrics that matter beyond follower counts—and how to read them honestly</li>
                  <li>Optimization strategies for Reels, Stories, and long-form posts</li>
                  <li>Building sustainable habits that reduce digital fatigue</li>
                  <li>Monetization pathways for small, high-trust accounts</li>
                </ul>
                <p>
                  We write so that beginners can follow along, but experienced creators still walk away with something new.
                  The posts may be long, but the goal is that you finish each one with at least one thing you can actually do today.
                </p>

                <h2>How Does the SNS Garden Tool Actually Work?</h2>
                <p>
                  The process is straightforward. Copy your follower list and following list from the Threads or Instagram app,
                  paste them into the SNS Garden analyzer, and your browser instantly identifies which accounts aren't following
                  you back. No signup, no login, no app installation required.
                </p>
                <p>
                  The most common question from first-time users is: "Are you sure it doesn't go to a server?" Yes, certain.
                  This tool is a pure browser application written in JavaScript with no code that communicates with external servers.
                  Open your browser's developer tools and check the Network tab while using it—there's nothing to hide.
                </p>

                <h2>How Is the Content Here Created?</h2>
                <p>
                  Every article on SNS Garden is written from direct experience managing social media accounts—strategies that
                  worked, approaches that didn't, and observations gathered along the way.
                </p>
                <p>
                  Algorithm-related content is based on official Meta documentation, statements from Instagram and Threads
                  engineers, and personal experimentation. The goal isn't to tell you what to do—it's to explain why things
                  work the way they do, so that when the platform changes (and it always does), you can adapt on your own.
                </p>

                <h2>What's Coming Next?</h2>
                <p>
                  Content currently in development includes:
                </p>
                <ul>
                  <li>Expanded follower analyzer features — sorting by account activity patterns</li>
                  <li>A complete guide to reading Instagram Stories view data</li>
                  <li>A monthly SNS health checklist for smaller accounts</li>
                  <li>An ongoing series tracking algorithm changes across platforms</li>
                </ul>
                <p>
                  Bookmark this page or send an email to be notified when new content goes live.
                </p>

                <h2>The Gardener is Anonymous. The Garden is Real.</h2>
                <p>
                  The person behind SNS Garden stays anonymous. But everything here comes from real experience—the frustration
                  of a growth plateau that wouldn't budge, the surprise of watching reach improve after a following list cleanup,
                  the confusion of a Reel that exploded one week and disappeared the next. Those experiences built this site.
                </p>
                <p>
                  We hope this corner of the internet makes your social media life a little cleaner and a little more intentional.
                  If you have a question or feedback, reach out anytime. Every message gets a personal reply.
                </p>
                <p>
                  Ready to get started? Visit the <Link href="/guide">How-to Guide</Link> or browse
                  the <Link href="/tips">Tips section</Link> for growth strategies.
                </p>
                <div className="tool-cta" style={{ marginTop: '20px', padding: '16px' }}>
                  <p style={{ marginBottom: 0 }}>
                    📬 Email: <a href="mailto:automative2099@gmail.com">automative2099@gmail.com</a>
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
