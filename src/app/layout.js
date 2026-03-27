import './globals.css';
import { LangProvider } from '@/context/LangContext';
import { PlatformProvider } from '@/context/PlatformContext';
import Nav from '@/components/Nav';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  metadataBase: new URL('https://sns-garden.com'),
  title: 'Threads Garden — 맞팔 분석기 | Unfollow Finder',
  description: '팔로워와 팔로잉을 비교해 맞팔하지 않는 계정을 찾아드립니다. Find Threads accounts that don\'t follow you back.',
  verification: {
    google: 'M1PA4SnZ2UMduDf15aSlzAHEzNLf6MAD1fuzO6dzhhI',
  },
  alternates: {
    canonical: 'https://sns-garden.com',
    languages: {
      'ko-KR': 'https://sns-garden.com',
      'en-US': 'https://sns-garden.com/en', // Assuming we might add /en later, but for now we'll just map both.
    },
  },
  other: {
    'google-adsense-account': 'ca-pub-4103420208538428',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#f8f7f4" />
      </head>
      <body>
        {/* Google AdSense Verification */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4103420208538428"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
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
