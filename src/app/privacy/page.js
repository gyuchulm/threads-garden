import PrivacyClient from './PrivacyClient';

export const metadata = {
  title: '개인정보처리방침 | SNS Garden',
  description: 'SNS Garden의 개인정보처리방침. 모든 데이터는 브라우저 내에서만 처리되며 서버에 저장되지 않습니다. Google AdSense 및 Analytics 사용 안내.',
  alternates: {
    canonical: 'https://sns-garden.com/privacy/',
  },
  openGraph: {
    title: '개인정보처리방침 | SNS Garden',
    description: 'SNS Garden의 개인정보처리방침 및 데이터 보안 정책.',
    url: 'https://sns-garden.com/privacy/',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
