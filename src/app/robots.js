export const dynamic = 'force-static';

export default function robots() {
  const commonDisallow = ['/private/', '/en/', '/kr/', '/ko/'];

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
