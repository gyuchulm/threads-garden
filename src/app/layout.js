import './globals.css';
import { LangProvider } from '@/context/LangContext';
import { PlatformProvider } from '@/context/PlatformContext';
import Nav from '@/components/Nav';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  metadataBase: new URL('https://sns-garden.com'),
  title: 'SNS Garden — 브라우저에서 돌아가는 맞팔 분석 도구',
  description: '팔로워·팔로잉 목록을 내 브라우저 안에서만 비교해 맞팔 여부를 분석해 드리는 무료 도구. 회원가입·API 연동·서버 저장 없이 사용할 수 있습니다.',
  keywords: ['맞팔 분석', '맞팔 확인', 'threads 맞팔', '인스타 맞팔', 'unfollow analysis', 'follower analysis', 'SNS Garden'],
  verification: {
    google: 'M1PA4SnZ2UMduDf15aSlzAHEzNLf6MAD1fuzO6dzhhI',
  },
  alternates: {
    canonical: 'https://sns-garden.com/',
    languages: {
      'ko-KR': 'https://sns-garden.com/',
      'en-US': 'https://sns-garden.com/',
      'x-default': 'https://sns-garden.com/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://sns-garden.com/',
    title: 'SNS Garden — 브라우저에서 돌아가는 맞팔 분석 도구',
    description: '팔로워와 팔로잉을 브라우저 안에서만 비교 분석하는 무료 도구. Analyze mutual-follow status entirely inside your browser.',
    siteName: 'SNS Garden',
    locale: 'ko_KR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SNS Garden — 맞팔 분석 도구',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SNS Garden — 맞팔 분석 도구',
    description: '브라우저 안에서만 동작하는 맞팔 분석기. 서버 저장 없음.',
    images: ['/og-image.png'],
  },
  other: {
    'google-adsense-account': 'ca-pub-4103420208538428',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SNS Garden',
  url: 'https://sns-garden.com/',
  email: 'automative2099@gmail.com',
  description: 'Threads와 Instagram 팔로워/팔로잉 데이터를 100% 브라우저에서 처리하는 무료 맞팔 분석 도구.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'automative2099@gmail.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#f8f7f4" />
        {/* Google Consent Mode v2 — default to denied for EU/EEA/UK, update() is handled by AdSense Privacy & messaging (CMP) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                functionality_storage: 'granted',
                security_storage: 'granted',
                wait_for_update: 500,
                region: ['EU','EEA','GB','CH','NO','IS','LI']
              });
              gtag('consent', 'default', {
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
                analytics_storage: 'granted',
                functionality_storage: 'granted',
                security_storage: 'granted'
              });
              gtag('set', 'ads_data_redaction', true);
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4103420208538428"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <LangProvider>
          <PlatformProvider>
            <Nav />
            {children}

            {/* Vercel Web Analytics */}
            <Analytics />

            {/* Google Analytics (GA4) */}
            {process.env.NEXT_PUBLIC_GA_ID && (
              <>
                <Script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                />
                <Script id="google-analytics">
                  {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                  `}
                </Script>
              </>
            )}
          </PlatformProvider>
        </LangProvider>
      </body>
    </html>
  );
}
