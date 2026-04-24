'use client';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';

export default function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="footer">
      <nav className="footer-nav" aria-label="footer navigation">
        <Link href="/">{lang === 'ko' ? '홈' : 'Home'}</Link>
        <span>·</span>
        <Link href="/tips/">{lang === 'ko' ? '팁 & 가이드' : 'Tips'}</Link>
        <span>·</span>
        <Link href="/guide/">{lang === 'ko' ? '이용 가이드' : 'Guide'}</Link>
        <span>·</span>
        <Link href="/about/">{t.nav.about}</Link>
        <span>·</span>
        <Link href="/privacy/">{t.nav.privacy}</Link>
        <span>·</span>
        <Link href="/terms/">{lang === 'ko' ? '이용약관' : 'Terms'}</Link>
      </nav>
      <p style={{ marginTop: '12px', fontSize: '12.5px', color: 'var(--text-muted)' }}>
        © 2026 SNS Garden. All rights reserved.<br />
        {lang === 'ko' ? '고객지원' : 'Support'}: <a href="mailto:automative2099@gmail.com" style={{ textDecoration: 'underline' }}>automative2099@gmail.com</a>
      </p>
      <p style={{ marginTop: '8px', fontSize: '11.5px', color: 'var(--text-muted)', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5 }}>
        {lang === 'ko'
          ? 'SNS Garden은 Meta Platforms, Inc.와 제휴·후원·승인 관계가 없으며, "Threads"와 "Instagram"은 Meta Platforms, Inc.의 상표입니다. 본 서비스는 API 접근이나 자동 수집을 하지 않는 로컬 분석 도구입니다.'
          : 'SNS Garden is not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc. "Threads" and "Instagram" are trademarks of Meta Platforms, Inc. This service is a local-only analysis tool and does not access any API or perform automated data collection.'}
      </p>
    </footer>
  );
}
