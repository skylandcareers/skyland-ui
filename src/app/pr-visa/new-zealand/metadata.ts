import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Zealand PR Visa - Complete Guide to Permanent Residency',
  description: 'Comprehensive guide to New Zealand Permanent Residency. Learn about Skilled Migrant Category, points system, application process, and requirements for NZ PR visa.',
  keywords: [
    'New Zealand PR',
    'NZ permanent residency',
    'Skilled Migrant Category',
    'New Zealand immigration',
    'NZ points system',
    'Expression of Interest NZ',
    'New Zealand visa requirements',
    'migrate to New Zealand',
    'New Zealand work visa',
    'NZ PR process'
  ],
  openGraph: {
    title: 'New Zealand PR Visa - Complete Guide to Permanent Residency',
    description: 'Comprehensive guide to New Zealand Permanent Residency. Learn about Skilled Migrant Category, points system, application process, and requirements for NZ PR visa.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/nz-pr-visa.jpg',
        width: 1200,
        height: 630,
        alt: 'New Zealand Permanent Residency Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Zealand PR Visa - Complete Guide to Permanent Residency',
    description: 'Comprehensive guide to New Zealand Permanent Residency. Learn about Skilled Migrant Category, points system, and requirements.',
    images: ['/images/nz-pr-visa.jpg']
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large'
    }
  },
  alternates: {
    canonical: 'https://yourdomain.com/pr-visa/newzealand'
  }
}; 