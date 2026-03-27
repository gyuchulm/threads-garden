import { use } from 'react';
import BlogPostClient from './BlogPostClient';
import { getAllSlugs, posts } from '@/data/posts';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.ko.title} | sns-garden.com Tips`,
    description: post.ko.description,
    alternates: {
      canonical: `https://sns-garden.com/tips/${slug}/`,
    },
  };
}

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export default function BlogPostPage({ params }) {
  const { slug } = use(params);
  return <BlogPostClient slug={slug} />;
}
