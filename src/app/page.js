import Home from '@/components/sections/home/Home';
import PageWrapper from '@/components/wrappers/PageWrapper';
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
export const metadata = {
  title: 'GYS Technologies',
  description:
    'GYS Technologies - Empowering digital solutions through innovation and performance. We specialize in web, mobile, and enterprise software development.',
  keywords: [
    'GYS Technologies',
    'Software Development',
    'Web Development',
    'App Development',
    'Custom Software Solutions',
    'Mobile App Development',
    'Tech Company India',
    'Digital Transformation Services',
  ],
  metadataBase: new URL('https://www.gystechnologies.com'),
  alternates: {
    canonical: 'https://www.gystechnologies.com',
  },
  openGraph: {
    title: 'GYS Technologies',
    description:
      'Empowering digital solutions through innovation and performance. Discover custom web and app development with GYS Technologies.',
    url: 'https://www.gystechnologies.com',
    siteName: 'GYS Technologies',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '', // Replace with actual path
        width: 1200,
        height: 630,
        alt: 'GYS Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GYS Technologies',
    description:
      'Custom software and app development services built for speed, scale, and success.',
    site: '@gystechnologies', // Replace with your actual handle
    images: [''], // Replace with actual path
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};


export default function Page() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] scrollbar-hide">
      <PageWrapper>

      <main className="min-h-screen scrollbar-hide"> <Home /></main>
       
      </PageWrapper>
    </div>
  );
}
