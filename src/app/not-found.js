import Link from 'next/link';

export const metadata = {
  title: '페이지를 찾을 수 없습니다 | SNS Garden',
  description: '요청하신 페이지를 찾을 수 없습니다. SNS Garden 홈으로 돌아가세요.',
};

export default function NotFound() {
  return (
    <main>
      <div className="container" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '48px 24px' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>🌿</div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
            404 — 페이지를 찾을 수 없어요
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
            Page not found — The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '32px' }}>
            URL이 잘못됐거나 페이지가 삭제되었을 수 있습니다.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                background: 'var(--accent)',
                color: '#fff',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
              }}
            >
              🏠 홈으로 가기
            </Link>
            <Link
              href="/tips/"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                border: '1px solid var(--border)',
              }}
            >
              📚 Tips 보기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
