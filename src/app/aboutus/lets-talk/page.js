import Home from '@/components/sections/home/Home';
import PageWrapper from '@/components/wrappers/PageWrapper';
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import BookCall from '@/components/sections/aboutus/LetsConnect/BookCall';
export const metadata = {
  title: 'GYS Technologies | Custom Software & App Development Company',
  description:
    'GYS Technologies empowers businesses with innovative digital solutions. We specialize in web development, mobile apps, cloud platforms, and enterprise software.',
  keywords: [
    'GYS Technologies',
    'Custom Software Development',
    'Mobile App Development',
    'Web Development Company India',
    'Enterprise Software Solutions',
    'Cloud Development Services',
    'App Developers India',
    'Digital Transformation',
    'Tech Company India',
  ],
  metadataBase: new URL('https://www.gystechnologies.in'),
  alternates: {
    canonical: 'https://www.gystechnologies.in',
  },
  openGraph: {
    title: 'GYS Technologies | Custom Software & App Development Company',
    description:
      'Discover how GYS Technologies delivers scalable, performance-driven digital solutions. From web to mobile and cloud — we bring your vision to life.',
    url: 'https://www.gystechnologies.in',
    siteName: 'GYS Technologies',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/og/home-og.jpg', 
        width: 1200,
        height: 630,
        alt: 'GYS Technologies Homepage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GYS Technologies | Web & App Development Experts',
    description:
      'Partner with GYS Technologies for high-performance web, mobile, and cloud development solutions built for speed and scale.',
    site: '@gystechnologies', 
    images: ['/assets/og/home-og.jpg'], 
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
      {/* <PageWrapper> */}
      <Header/>
      <BookCall />
       
      {/* </PageWrapper> */}
    </div>
  );
}
