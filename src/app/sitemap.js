export const dynamic = 'force-static';
import { posts } from '@/data/posts';

export default function sitemap() {
  const baseUrl = 'https://sns-garden.com';

  // Base routes
  const routes = [
    '',
    '/guide',
    '/tips',
    '/privacy',
    '/about'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog post routes
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/tips/${post.slug}`,
    lastModified: (post.date || new Date().toISOString().split('T')[0]).replace(/\./g, '-'),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...postRoutes];
}
