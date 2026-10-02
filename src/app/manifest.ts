import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rahul Shaw - Software Engineer Portfolio',
    short_name: 'Rahul Shaw',
    description: 'Official portfolio of Rahul Shaw, a Software Engineer and Full-Stack Developer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#111827',
    icons: [
      {
        src: '/profile1.png',
        sizes: '192x192 512x512',
        type: 'image/png',
      },
    ],
  };
}
