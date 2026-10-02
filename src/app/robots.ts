import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://iamrahulshaw.in/sitemap.xml',
    host: 'https://iamrahulshaw.in',
  };
}
