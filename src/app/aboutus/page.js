import PageWrapper from '@/components/wrappers/PageWrapper';

import React from 'react';
import OurServices from '@/components/sections/ourservices/OurServices';
import AboutUs from '@/components/sections/aboutus/AboutUs';
export const metadata = {
  title: 'About Us | GYS Technologies',
  description:
    'Discover the story behind GYS Technologies, our mission, and how we deliver exceptional digital solutions globally.',
  keywords: [
    'GYS Technologies',
    'About GYS',
    'Tech Company',
    'Digital Solutions',
    'Software Development Company',
    'App Development India',
  ],
  metadataBase: new URL('https://www.gystechnologies.com'),
  openGraph: {
    title: 'About Us | GYS Technologies',
    description:
      'Discover the story behind GYS Technologies, our mission, and how we deliver exceptional digital solutions globally.',
    url: 'https://www.gystechnologies.com/about',
    siteName: 'GYS Technologies',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/og/about-og.jpg', 
        width: 1200,
        height: 630,
        alt: 'About GYS Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | GYS Technologies',
    description:
      'Explore who we are at GYS Technologies and how we innovate in the digital space.',
    images: ['/assets/og/about-og.jpg'],
    site: '@gystechnologies', 
  },
  alternates: {
    canonical: 'https://www.gystechnologies.com/aboutus',
  },
};


const page = () => {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <PageWrapper>
        <AboutUs/>
      </PageWrapper>
    </div>
  );
};

export default page;


