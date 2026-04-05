import TipsClient from './TipsClient';

export const metadata = {
  title: 'SNS 성장 팁 | SNS Garden — Threads & Instagram 가이드',
  description: 'Threads와 Instagram 팔로워를 늘리고 알고리즘을 이해하기 위한 실용적인 가이드. 맞팔 관리, 릴스 전략, 스토리 최적화 팁을 제공합니다.',
  alternates: {
    canonical: 'https://sns-garden.com/tips/',
  },
  openGraph: {
    title: 'SNS 성장 팁 | SNS Garden',
    description: 'Threads와 Instagram 성장을 위한 실용적인 가이드 모음.',
    url: 'https://sns-garden.com/tips/',
    type: 'website',
  },
};

export default function TipsPage() {
  return <TipsClient />;
}
