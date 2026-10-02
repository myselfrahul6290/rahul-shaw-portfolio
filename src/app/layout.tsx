import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://iamrahulshaw.in'),
  title: {
    default: 'Rahul Shaw | Software Engineer & Full-Stack Developer',
    template: '%s | Rahul Shaw',
  },
  description:
    'Official portfolio of Rahul Shaw, a Software Engineer and Full-Stack Developer based in Kolkata, India. Specializing in Next.js, React, Node.js, and TypeScript.',
  applicationName: 'Rahul Shaw Portfolio',
  authors: [{ name: 'Rahul Shaw', url: 'https://iamrahulshaw.in' }],
  creator: 'Rahul Shaw',
  publisher: 'Rahul Shaw',
  keywords: [
    'Rahul Shaw',
    'Rahul Shaw Software Engineer',
    'Rahul Shaw Portfolio',
    'Rahul Shaw Developer',
    'Rahul Shaw Kolkata',
    'Rahul Shaw India',
    'iamrahulshaw.in',
    'Software Engineer',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'NrXen',
  ],
  alternates: {
    canonical: 'https://iamrahulshaw.in',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Rahul Shaw | Software Engineer & Full-Stack Developer',
    description:
      'Official portfolio of Rahul Shaw, a Software Engineer and Full-Stack Developer. Explore technical projects, experience, and skills.',
    url: 'https://iamrahulshaw.in',
    siteName: 'Rahul Shaw Portfolio',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: '/profile1.png',
        width: 800,
        height: 800,
        alt: 'Rahul Shaw - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Shaw | Software Engineer & Full-Stack Developer',
    description:
      'Official portfolio of Rahul Shaw, a Software Engineer and Full-Stack Developer based in Kolkata, India.',
    images: ['/profile1.png'],
  },
  icons: {
    icon: '/profile1.png',
    shortcut: '/profile1.png',
    apple: '/profile1.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': 'https://iamrahulshaw.in/#profilepage',
      url: 'https://iamrahulshaw.in',
      name: 'Rahul Shaw - Software Engineer Portfolio',
      mainEntity: {
        '@id': 'https://iamrahulshaw.in/#person',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://iamrahulshaw.in/#person',
      name: 'Rahul Shaw',
      alternateName: ['Rahul', 'myselfrahul6290', 'Rahul Shaw Kolkata'],
      url: 'https://iamrahulshaw.in',
      image: 'https://iamrahulshaw.in/profile1.png',
      jobTitle: 'Software Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'NrXen',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kolkata',
        addressCountry: 'India',
      },
      sameAs: [
        'https://www.linkedin.com/in/rahulshaw1002/',
        'https://github.com/myselfrahul6290',
      ],
      knowsAbout: [
        'Full-Stack Development',
        'Software Engineering',
        'Next.js',
        'React',
        'Node.js',
        'TypeScript',
        'GraphQL',
        'FastAPI',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://iamrahulshaw.in/#website',
      url: 'https://iamrahulshaw.in',
      name: 'Rahul Shaw Portfolio',
      publisher: {
        '@id': 'https://iamrahulshaw.in/#person',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
