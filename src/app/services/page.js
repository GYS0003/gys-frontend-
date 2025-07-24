import PageWrapper from '@/components/wrappers/PageWrapper';

import React from 'react';
import OurServices from '@/components/sections/ourservices/OurServices';
export const metadata = {
  title: 'Services | GYS Technologies',
  description:
    'Discover custom software, mobile app, and web development services by GYS Technologies. We craft scalable, user-centric digital solutions for businesses worldwide.',
  keywords: [
    'GYS Technologies Services',
    'Custom Software Development',
    'Web Development India',
    'Mobile App Development Company',
    'UI/UX Design Experts',
    'Cloud Application Development',
    'Enterprise Software Solutions',
    'Software Company India',
    'Tech Services Provider',
    'Digital Product Development',
  ],
  metadataBase: new URL('https://www.gystechnologies.com'),
  openGraph: {
    title: 'Custom Software & App Development Services | GYS Technologies',
    description:
      'Explore how GYS Technologies delivers web, mobile, and cloud-based solutions tailored to your business needs. Innovation meets performance here.',
    url: 'https://www.gystechnologies.com/services',
    siteName: 'GYS Technologies',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/og/services-og.jpg', // ✅ Make sure this image exists in /public/assets/og
        width: 1200,
        height: 630,
        alt: 'GYS Technologies Services Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software & App Development Services | GYS Technologies',
    description:
      'Unlock business growth with expert web, mobile, and cloud development services from GYS Technologies.',
    images: ['/assets/og/services-og.jpg'], // ✅ Confirm the correct file path
    site: '@gystechnologies', // Replace or remove if not active on Twitter/X
  },
  alternates: {
    canonical: 'https://www.gystechnologies.com/services',
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
        <OurServices/>
      </PageWrapper>
    </div>
  );
};

export default page;


