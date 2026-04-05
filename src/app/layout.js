import './globals.css';
import { LangProvider } from '@/context/LangContext';
import { PlatformProvider } from '@/context/PlatformContext';
import Nav from '@/components/Nav';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  metadataBase: new URL('https://sns-garden.com'),
  title: 'Threads Garden — 맞팔 분석기 | Unfollow Finder',
  description: '팔로워와 팔로잉을 비교해 맞팔하지 않는 계정을 찾아드립니다. Find Threads & Instagram accounts that don\'t follow you back.',
  keywords: ['threads 맞팔', '인스타 맞팔 확인', 'threads unfollow finder', 'instagram unfollow checker', '맞팔 분석기', 'SNS 정원'],
  verification: {
    google: 'M1PA4SnZ2UMduDf15aSlzAHEzNLf6MAD1fuzO6dzhhI',
  },
  alternates: {
    canonical: 'https://sns-garden.com/',
  },
  openGraph: {
    type: 'website',
    url: 'https://sns-garden.com/',
    title: 'SNS Garden — 맞팔 분석기 | Unfollow Finder',
    description: '팔로워와 팔로잉을 비교해 맞팔하지 않는 계정을 찾아드립니다. Find accounts that don\'t follow you back on Threads & Instagram.',
    siteName: 'SNS Garden',
    locale: 'ko_KR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SNS Garden — 맞팔 분석기',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SNS Garden — 맞팔 분석기 | Unfollow Finder',
    description: '팔로워와 팔로잉을 비교해 맞팔하지 않는 계정을 찾아드립니다.',
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
