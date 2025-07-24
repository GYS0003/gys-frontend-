import React from 'react'
import PageWrapper from '@/components/wrappers/PageWrapper';
import Portfolio from '@/components/sections/portfolio/Portfolio';
export const metadata = {
  title: 'Our Work & Case Studies | Portfolio | GYS Technologies',
  description:
    'Explore GYS Technologies’ portfolio featuring custom-built software, web, and mobile solutions. See how we help clients scale with impactful digital products.',
  keywords: [
    'GYS Technologies Portfolio',
    'Software Development Projects',
    'Web Development Case Studies',
    'Mobile App Work Samples',
    'UI/UX Design Projects',
    'Custom Software Examples',
    'Digital Solutions Showcase',
    'Client Success Stories',
    'Enterprise Tech Projects',
    'IT Services Portfolio',
  ],
  metadataBase: new URL('https://www.gystechnologies.in'),
  openGraph: {
    title: 'Portfolio | GYS Technologies',
    description:
      'See how GYS Technologies delivers innovative and high-performance digital solutions across industries. View our project portfolio.',
    url: 'https://www.gystechnologies.in/portfolio',
    siteName: 'GYS Technologies',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/og/portfolio-og.jpg', // ✅ Replace with your actual portfolio OG image
        width: 1200,
        height: 630,
        alt: 'GYS Technologies Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | GYS Technologies',
    description:
      'Browse our portfolio of software and app development work. GYS Technologies empowers brands through technology.',
    images: ['/assets/og/portfolio-og.jpg'], // ✅ Replace with actual image path
    site: '@gystechnologies',
  },
  alternates: {
    canonical: 'https://www.gystechnologies.in/portfolio',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
const page = () => {
  return (
     <div className="font-[family-name:var(--font-geist-sans)]">
      <PageWrapper>
        <Portfolio/>
      </PageWrapper>
    </div>
  )
}

export default page
