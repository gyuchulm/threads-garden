export const dynamic = 'force-static';

export default function robots() {
  // NOTE: /en/, /ko/, /kr/ are NOT disallowed.
  // They are 301-redirected to / via vercel.json.
  // Blocking them in robots.txt prevents crawlers from following the redirect,
  // causing Search Console to report "blocked by robots.txt" errors.
  const commonDisallow = ['/private/'];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: commonDisallow,
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: '/',
        disallow: commonDisallow,
      },
    ],
    sitemap: 'https://sns-garden.com/sitemap.xml',
  };
}
