import Footer from "@/components/layout/footer/Footer";
import Career from "@/components/sections/career/Career";
import JobDetail from "@/components/sections/career/Detail";
import PageWrapper from "@/components/wrappers/PageWrapper";
import React from "react";
export const metadata = {
  title: 'Careers | GYS Technologies',
  description:
    'Join GYS Technologies and shape the future of digital innovation. We’re hiring developers, designers, and AI engineers for exciting tech careers in India.',
  keywords: [
    'Careers at GYS Technologies',
    'GYS Technologies Jobs',
    'Software Developer Jobs',
    'AI Engineer Roles',
    'UI UX Designer Openings',
    'Tech Jobs India',
    'Hiring Developers India',
    'Full-time Tech Jobs',
    'Join GYS Team',
    'Digital Careers 2025',
  ],
  metadataBase: new URL('https://www.gystechnologies.in'),
  openGraph: {
    title: 'Careers | GYS Technologies',
    description:
      'Explore job opportunities at GYS Technologies. Be part of a team building AI, web, and mobile solutions for global clients.',
    url: 'https://www.gystechnologies.in/careers',
    siteName: 'GYS Technologies',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/og/careers-og.jpg', // ✅ Make sure this image exists in /public/assets/og/
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
      'We’re hiring! Join GYS Technologies and work with a dynamic team solving real-world tech problems.',
    images: ['/assets/og/careers-og.jpg'], // ✅ Same as OG image
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


const page = ({params}) => {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <PageWrapper>
        <JobDetail params={params} />
        <Footer/>
      </PageWrapper>
    </div>
  );
};

export default page;
