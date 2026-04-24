'use client';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Footer from '@/components/Footer';

export default function TermsClient() {
  const { lang } = useLang();
  const today = '2026-04-24';

  return (
    <main>
      <div className="container">
        <header className="page-header">
          <div className="header-badge">📜 {lang === 'ko' ? '약관 및 정책' : 'Terms & Policies'}</div>
          <h1>{lang === 'ko' ? '이용약관' : 'Terms of Service'}</h1>
          <p className="article-lead">
            {lang === 'ko' ? `최종 수정일: ${today}` : `Last updated: ${today}`}
          </p>
        </header>

        <article className="article" style={{ paddingTop: 0 }}>
          <div className="article-body">
            {lang === 'ko' ? (
              <>
                <h2>1. 서비스 개요</h2>
                <p>
                  SNS Garden(이하 "서비스")은 사용자가 직접 복사하여 붙여넣은 팔로워·팔로잉 텍스트를
                  사용자의 웹 브라우저 내부에서 비교·분석하여, 상호 팔로우가 성립되지 않은 계정 목록을
                  제공하는 무료 분석 도구입니다. 본 서비스는 어떠한 자동화된 데이터 수집, 크롤링, 또는
                  Threads·Instagram API 접근을 수행하지 않습니다.
                </p>

                <h2>2. 약관의 동의</h2>
                <p>
                  사용자는 본 서비스를 이용함으로써 본 약관에 동의하는 것으로 간주됩니다. 본 약관에 동의하지
                  않는 경우 서비스 이용을 즉시 중단하셔야 합니다.
                </p>

                <h2>3. 이용 자격</h2>
                <p>
                  본 서비스는 만 14세 이상의 이용자에게 제공됩니다. 미성년자의 경우 법정대리인의 동의 하에
                  이용하는 것을 권장합니다.
                </p>

                <h2>4. 사용자 책임</h2>
                <ul>
                  <li>사용자는 자신이 합법적으로 접근할 수 있는 팔로워·팔로잉 목록에 한해 서비스를 이용해야 합니다.</li>
                  <li>사용자는 본 서비스의 분석 결과를 활용한 언팔로우·팔로우 등 실제 행동의 모든 결과에 대해 스스로 책임집니다.</li>
                  <li>Threads, Instagram 등 제3자 플랫폼의 이용약관 및 커뮤니티 가이드라인을 준수해야 합니다. 특히 단기간 대량 언팔로우·팔로우는 해당 플랫폼에서 스팸 행위로 분류될 수 있으며, 이에 따른 계정 제한 등의 불이익은 사용자 본인의 책임입니다.</li>
                  <li>분석 결과의 자동화된 처리(스크립트를 통한 일괄 언팔로우 등)는 엄격히 금지됩니다.</li>
                </ul>

                <h2>5. 지적재산권 및 상표</h2>
                <p>
                  "Threads", "Instagram", "Meta"는 Meta Platforms, Inc.의 상표입니다. SNS Garden은 Meta
                  Platforms, Inc.와 어떠한 제휴·후원·승인 관계도 없으며, 해당 상표는 오직 서비스의 기능을
                  설명하기 위한 명목적 용도로만 사용됩니다(nominative fair use). 본 사이트에 게재된 모든
                  블로그 글·가이드·이미지 등은 SNS Garden의 저작물이며, 무단 복제 및 재배포를 금합니다.
                </p>

                <h2>6. 제3자 서비스 및 광고</h2>
                <p>
                  본 서비스는 운영을 위해 Google AdSense 광고를 게재하며, 사이트 이용 분석을 위해 Google
                  Analytics와 Vercel Analytics를 사용합니다. 또한 자발적 후원 결제 처리를 위해 Stripe를
                  이용합니다. 각 제3자 서비스의 데이터 처리에 대한 상세 내용은 <Link href="/privacy/">개인정보처리방침</Link>을 참고해 주십시오.
                </p>

                <h2>7. 면책 조항</h2>
                <p>
                  본 서비스는 "있는 그대로(AS IS)" 제공되며, 분석 결과의 완전성·정확성을 보증하지 않습니다.
                  텍스트 복사 방식의 특성상 목록 누락·오탈자가 발생할 수 있으며, 이로 인한 판단 오류의 책임은
                  SNS Garden이 지지 않습니다. SNS Garden은 서비스 이용으로 인해 발생하는 직·간접적 손해,
                  제3자 플랫폼의 계정 제한, 데이터 손실, 영업 손실 등 어떠한 손해에 대해서도 배상 책임을 지지
                  않습니다.
                </p>

                <h2>8. 서비스의 변경 및 중단</h2>
                <p>
                  SNS Garden은 사전 통지 없이 서비스의 전부 또는 일부를 변경·중단할 수 있습니다. 운영상·기술상
                  상당한 이유가 있는 경우 서비스 전체를 종료할 수 있습니다.
                </p>

                <h2>9. 약관의 변경</h2>
                <p>
                  본 약관은 관련 법령·서비스 정책의 변경에 따라 개정될 수 있으며, 개정 시 사이트에 개정일과
                  함께 게시합니다. 개정된 약관 게시 이후 서비스를 계속 이용하는 경우 변경에 동의한 것으로
                  간주됩니다.
                </p>

                <h2>10. 준거법 및 관할</h2>
                <p>
                  본 약관의 해석 및 적용은 대한민국 법을 준거법으로 하며, 서비스 이용과 관련하여 분쟁이
                  발생할 경우 민사소송법상의 관할 법원을 제1심 관할 법원으로 합니다.
                </p>

                <h2>11. 문의</h2>
                <div className="tool-cta" style={{ marginTop: '20px', padding: '16px' }}>
                  <p style={{ marginBottom: 0 }}>
                    📬 Email: <a href="mailto:automative2099@gmail.com">automative2099@gmail.com</a>
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2>1. Service Overview</h2>
                <p>
                  SNS Garden ("the Service") is a free browser-based analysis tool that compares follower and
                  following lists — which the user themselves copy and paste — entirely inside the user's web
                  browser, and returns a list of accounts that do not follow the user back. The Service performs
                  no automated scraping, no crawling, and does not access Threads or Instagram APIs in any way.
                </p>

                <h2>2. Acceptance of Terms</h2>
                <p>
                  By using the Service, you agree to be bound by these Terms. If you do not agree, you must
                  discontinue use of the Service immediately.
                </p>

                <h2>3. Eligibility</h2>
                <p>
                  The Service is intended for users aged 14 or older. Minors are encouraged to use the Service
                  only with the consent of a parent or legal guardian.
                </p>

                <h2>4. User Responsibilities</h2>
                <ul>
                  <li>You may only use the Service with follower/following data you are lawfully authorized to access.</li>
                  <li>You remain solely responsible for any real-world actions (follow, unfollow, block, etc.) that you take based on the Service's output.</li>
                  <li>You must comply with the Terms of Service and Community Guidelines of third-party platforms, including Threads and Instagram. In particular, performing high-volume unfollowing or following in a short period may be classified as spam behavior by those platforms, and any resulting account restrictions are your sole responsibility.</li>
                  <li>Automated processing of the Service's output (e.g., using scripts to mass-unfollow) is strictly prohibited.</li>
                </ul>

                <h2>5. Intellectual Property & Trademarks</h2>
                <p>
                  "Threads," "Instagram," and "Meta" are trademarks of Meta Platforms, Inc. SNS Garden is not
                  affiliated with, endorsed by, or sponsored by Meta Platforms, Inc. These trademarks are used
                  solely for the nominative purpose of describing the functionality of the Service (nominative
                  fair use). All blog articles, guides, and images published on this site are the copyrighted
                  works of SNS Garden; unauthorized reproduction or redistribution is prohibited.
                </p>

                <h2>6. Third-Party Services & Advertising</h2>
                <p>
                  The Service displays Google AdSense advertisements to sustain its operation, and uses Google
                  Analytics and Vercel Analytics to measure site usage. Voluntary support payments are processed
                  via Stripe. For detailed information about how each of these third parties handles your data,
                  please refer to our <Link href="/privacy/">Privacy Policy</Link>.
                </p>

                <h2>7. Disclaimers</h2>
                <p>
                  The Service is provided "AS IS" with no warranty as to the completeness or accuracy of any
                  analysis output. Due to the nature of text-based copy-and-paste input, entries may be missed
                  or misparsed, and SNS Garden is not liable for any decisions you make based on such output.
                  SNS Garden shall not be liable for any direct or indirect damages, third-party platform account
                  restrictions, data loss, or loss of business arising from use of the Service.
                </p>

                <h2>8. Modification and Discontinuation</h2>
                <p>
                  SNS Garden reserves the right to modify or discontinue all or part of the Service at any time
                  without prior notice, and to permanently shut down the Service when there is substantial
                  operational or technical cause to do so.
                </p>

                <h2>9. Changes to These Terms</h2>
                <p>
                  These Terms may be amended to reflect changes in applicable law or service policy. Any amended
                  Terms will be posted on this page with an updated "Last updated" date. Continued use of the
                  Service after such changes constitutes acceptance of the revised Terms.
                </p>

                <h2>10. Governing Law and Jurisdiction</h2>
                <p>
                  These Terms are governed by and construed in accordance with the laws of the Republic of Korea.
                  Any disputes arising from use of the Service shall be submitted to the court of competent
                  jurisdiction under the Korean Civil Procedure Act.
                </p>

                <h2>11. Contact</h2>
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
