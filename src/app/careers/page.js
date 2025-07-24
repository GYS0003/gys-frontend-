import Footer from "@/components/layout/footer/Footer";
import Career from "@/components/sections/career/Career";
import PageWrapper from "@/components/wrappers/PageWrapper";
import React from "react";
export const metadata = {
  title: 'Careers | GYS Technologies',
  description:
    'Join GYS Technologies and be part of a team building innovative web, mobile, and AI solutions. Explore job openings for developers, designers, and engineers.',
  keywords: [
    'Careers at GYS Technologies',
    'GYS Technologies Jobs',
    'Software Developer Jobs',
    'Tech Jobs India',
    'Frontend Developer Openings',
    'Backend Developer Hiring',
    'UI/UX Designer Roles',
    'AI Engineer Jobs',
    'Join GYS Team',
    'Tech Careers 2025',
  ],
  metadataBase: new URL('https://www.gystechnologies.in'),
  openGraph: {
    title: 'Careers | GYS Technologies',
    description:
      'Explore current openings at GYS Technologies. Join a future-ready team working on impactful projects in software development, AI, and design.',
    url: 'https://www.gystechnologies.in/careers',
    siteName: 'GYS Technologies',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/og/careers-og.jpg', // ✅ Ensure this image is present in your public folder
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
      'Join our innovative team at GYS Technologies. We’re hiring developers, designers, and AI professionals who want to make an impact.',
    images: ['/assets/og/careers-og.jpg'], // ✅ Replace with actual image if needed
    site: '@gystechnologies',
  },
  alternates: {
    canonical: 'https://www.gystechnologies.in/careers',
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
        <Career/>
        <Footer/>

      </PageWrapper>
    </div>
  );
};

export default page;
