'use client';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';

export default function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="footer">
      <p>
        <Link href="/privacy">{t.nav.privacy}</Link>&nbsp;&nbsp;·&nbsp;&nbsp;
        <Link href="/about">{t.nav.about}</Link>
      </p>
      <p style={{ marginTop: '12px', fontSize: '12.5px', color: 'var(--text-muted)' }}>
        © 2026 Threads Garden. All rights reserved.<br />
        Contact: <a href="mailto:automative2099@gmail.com" style={{ textDecoration: 'underline' }}>automative2099@gmail.com</a>
      </p>
    </footer>
  );
}
