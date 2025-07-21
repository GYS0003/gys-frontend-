import Footer from "@/components/layout/footer/Footer";
import Career from "@/components/sections/career/Career";
import PageWrapper from "@/components/wrappers/PageWrapper";
import React from "react";
export const metadata = {
  title: 'Careers | GYS Technologies',
  description:
    'Join GYS Technologies and become part of a leading digital innovation team. Explore exciting job openings for AI engineers, developers, and designers. Shape your future with us.',
  keywords: [
    'Careers at GYS Technologies',
    'GYS Technologies Jobs',
    'Tech Jobs India',
    'Software Developer Jobs',
    'UI Designer Jobs',
    'AI Engineer Openings',
    'Hiring at GYS',
    'Tech Careers',
    'Join GYS Team',
    'Full-time Developer Jobs',
  ],
  metadataBase: new URL('https://www.gystechnologies.com'),
  openGraph: {
    title: 'Careers | GYS Technologies',
    description:
      'Discover career opportunities at GYS Technologies. Join our innovative team and work on cutting-edge digital solutions across AI, Web, and Design.',
    url: 'https://www.gystechnologies.com/careers',
    siteName: 'GYS Technologies',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        // url: '/assets/og/careers-og.jpg', // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'GYS Technologies Careers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | GYS Technologies',
    description:
      'Explore open positions at GYS Technologies. Be part of a team transforming digital experiences across the globe.',
    // images: ['/assets/og/careers-og.jpg'],
    site: '@gystechnologies',
  },
  alternates: {
    canonical: 'https://www.gystechnologies.com/careers',
  },
};

const page = () => {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <PageWrapper>
        <Career/>
        <Footer/>

      </PageWrapper>
    </div>
  );
};

export default page;
