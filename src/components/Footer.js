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
      </nav>
      <p style={{ marginTop: '12px', fontSize: '12.5px', color: 'var(--text-muted)' }}>
        © 2026 SNS Garden. All rights reserved.<br />
        Contact: <a href="mailto:automative2099@gmail.com" style={{ textDecoration: 'underline' }}>automative2099@gmail.com</a>
      </p>
    </footer>
  );
}
