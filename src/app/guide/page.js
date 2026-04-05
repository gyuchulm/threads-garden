import GuideClient from './GuideClient';

export const metadata = {
  title: '이용 가이드 | SNS Garden — Threads & Instagram 맞팔 분석기',
  description: 'Threads & Instagram 팔로워/팔로잉 목록을 안전하게 비교하는 방법. 모든 데이터는 오직 브라우저 내에서만 처리되어 100% 안전합니다.',
  alternates: {
    canonical: 'https://sns-garden.com/guide/',
  },
  openGraph: {
    title: '이용 가이드 | SNS Garden',
    description: 'Threads & Instagram 팔로워/팔로잉 목록을 안전하게 비교하는 방법. 모든 데이터는 브라우저 내에서만 처리됩니다.',
    url: 'https://sns-garden.com/guide/',
    type: 'website',
  },
};

export default function GuidePage() {
  return <GuideClient />;
}
