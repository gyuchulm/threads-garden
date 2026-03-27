'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useLang } from '@/context/LangContext';
import { usePlatform } from '@/context/PlatformContext';
import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const { platform, setPlatform } = usePlatform();
  const pathname = usePathname();
  const router = useRouter();

  const handlePlatformChange = (p) => {
    setPlatform(p);
    if (pathname !== '/') {
      router.push('/');
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            🌿 {platform === 'threads' ? 'Threads' : 'Insta'} Garden
          </Link>
          
          <div className={styles.platformTabs}>
            <button 
              className={`${styles.platformTab} ${platform === 'threads' ? styles.activeTab : ''}`}
              onClick={() => handlePlatformChange('threads')}
            >
              <span>🪴</span> {lang === 'ko' ? '쓰레드' : 'Threads'}
            </button>
            <button 
              className={`${styles.platformTab} ${platform === 'instagram' ? styles.activeTab : ''}`}
              onClick={() => handlePlatformChange('instagram')}
            >
              <span>📸</span> {lang === 'ko' ? '인스타' : 'Insta'}
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <Link
            href="/guide"
            className={`${styles.tipsLink} ${pathname === '/guide' ? styles.active : ''}`}
          >
            {t.nav.guide || 'Guide'}
          </Link>
          <Link
            href="/tips"
            className={`${styles.tipsLink} ${pathname.startsWith('/tips') ? styles.active : ''}`}
          >
            {t.nav.tips}
          </Link>
          <button
            className={styles.langToggle}
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            aria-label="언어 전환"
          >
            {lang === 'ko' ? '🇺🇸 EN' : '🇰🇷 한국어'}
          </button>
        </div>
      </div>
    </nav>
  );
}
