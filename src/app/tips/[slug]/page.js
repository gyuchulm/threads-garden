import { use } from 'react';
import BlogPostClient from './BlogPostClient';
import { getAllSlugs } from '@/data/posts';

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export default function BlogPostPage({ params }) {
  const { slug } = use(params);
  return <BlogPostClient slug={slug} />;
}
