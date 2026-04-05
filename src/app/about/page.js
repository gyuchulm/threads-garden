import AboutClient from './AboutClient';

export const metadata = {
  title: 'SNS Garden 소개 | Threads & Instagram 맞팔 분석기',
  description: 'SNS Garden은 Threads와 Instagram 팔로워 데이터를 100% 클라이언트 사이드에서 처리하는 무료 맞팔 분석 도구입니다. 서버에 데이터를 저장하지 않습니다.',
  alternates: {
    canonical: 'https://sns-garden.com/about/',
  },
  openGraph: {
    title: 'SNS Garden 소개',
    description: 'SNS Garden은 Threads와 Instagram 팔로워 데이터를 100% 클라이언트 사이드에서 처리하는 무료 맞팔 분석 도구입니다.',
    url: 'https://sns-garden.com/about/',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
