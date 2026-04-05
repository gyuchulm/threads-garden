import Script from 'next/script';
import HomeClient from './HomeClient';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'SNS Garden — 맞팔 분석기',
  url: 'https://sns-garden.com/',
  description: '팔로워와 팔로잉을 비교해 맞팔하지 않는 계정을 찾아드립니다. Find Threads & Instagram accounts that don\'t follow you back.',
  applicationCategory: 'SocialNetworkingApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: {
    '@type': 'Organization',
    name: 'SNS Garden',
    url: 'https://sns-garden.com/',
  },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="json-ld-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
