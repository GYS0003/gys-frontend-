import PageWrapper from '@/components/wrappers/PageWrapper';

import React from 'react';
import OurServices from '@/components/sections/ourservices/OurServices';
import AboutUs from '@/components/sections/aboutus/AboutUs';
export const metadata = {
  title: 'About Us | GYS Technologies',
  description:
    'Learn about GYS Technologies — our mission, values, and the team behind innovative digital solutions in web, mobile, and enterprise software development.',
  keywords: [
    'GYS Technologies',
    'About GYS Technologies',
    'Software Development Company',
    'Custom App Development',
    'Tech Company India',
    'Enterprise Software',
    'Digital Innovation',
    'Mobile App Company',
    'Web Development India',
  ],
  metadataBase: new URL('https://www.gystechnologies.in'),
  openGraph: {
    title: 'About Us | GYS Technologies',
    description:
      'Meet the minds behind GYS Technologies. Learn how our team crafts innovative software and digital experiences for clients worldwide.',
    url: 'https://www.gystechnologies.in/aboutus',
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
      'Discover the journey and vision of GYS Technologies — a leader in web, mobile, and AI-powered software development.',
    images: ['/assets/og/about-og.jpg'], 
    site: '@gystechnologies', 
  },
  alternates: {
    canonical: 'https://www.gystechnologies.in/aboutus',
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
        <AboutUs/>
      </PageWrapper>
    </div>
  );
};

export default page;


