import TermsClient from './TermsClient';

export const metadata = {
  title: '이용약관 | SNS Garden',
  description: 'SNS Garden 서비스 이용약관. 서비스의 이용 조건, 사용자 책임, 면책 조항, 제3자 플랫폼 관련 안내를 포함합니다.',
  alternates: {
    canonical: 'https://sns-garden.com/terms/',
  },
  openGraph: {
    title: '이용약관 | SNS Garden',
    description: 'SNS Garden 서비스 이용약관.',
    url: 'https://sns-garden.com/terms/',
    type: 'website',
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
