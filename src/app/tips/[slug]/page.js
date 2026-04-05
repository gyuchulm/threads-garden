import { use } from 'react';
import Script from 'next/script';
import BlogPostClient from './BlogPostClient';
import { getAllSlugs, posts } from '@/data/posts';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.ko.title} | SNS Garden Tips`,
    description: post.ko.description,
    alternates: {
      canonical: `https://sns-garden.com/tips/${slug}/`,
    },
    openGraph: {
      title: `${post.ko.title} | SNS Garden Tips`,
      description: post.ko.description,
      url: `https://sns-garden.com/tips/${slug}/`,
      type: 'article',
      publishedTime: post.date,
      siteName: 'SNS Garden',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: post.ko.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.ko.title} | SNS Garden Tips`,
      description: post.ko.description,
      images: ['/og-image.png'],
    },
  };
}

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export default function BlogPostPage({ params }) {
  const { slug } = use(params);
  const post = posts.find((p) => p.slug === slug);

  const blogPostingJsonLd = post ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.ko.title,
    description: post.ko.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'SNS Garden',
      url: 'https://sns-garden.com/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SNS Garden',
      url: 'https://sns-garden.com/',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://sns-garden.com/tips/${slug}/`,
    },
    image: 'https://sns-garden.com/og-image.png',
    inLanguage: 'ko-KR',
  } : null;

  const breadcrumbJsonLd = post ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'SNS Garden',
        item: 'https://sns-garden.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tips',
        item: 'https://sns-garden.com/tips/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.ko.title,
        item: `https://sns-garden.com/tips/${slug}/`,
      },
    ],
  } : null;

  return (
    <>
      {blogPostingJsonLd && (
        <Script
          id={`json-ld-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
        />
      )}
      {breadcrumbJsonLd && (
        <Script
          id={`json-ld-breadcrumb-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      <BlogPostClient slug={slug} />
    </>
  );
}
