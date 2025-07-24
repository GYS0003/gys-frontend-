import Home from '@/components/sections/home/Home';
import PageWrapper from '@/components/wrappers/PageWrapper';
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
export const metadata = {
  title: 'GYS Technologies | Web, Mobile & Custom Software Solutions',
  description:
    'GYS Technologies delivers cutting-edge web development, mobile apps, and enterprise software solutions tailored for startups and businesses in India and beyond.',
  keywords: [
    'GYS Technologies',
    'Software Development Company India',
    'Custom Software Solutions',
    'Web Development Services',
    'Mobile App Development',
    'Enterprise Software Development',
    'Tech Company India',
    'Digital Transformation Services',
    'App Development Agency',
  ],
  metadataBase: new URL('https://www.gystechnologies.in'),
  alternates: {
    canonical: 'https://www.gystechnologies.in',
  },
  openGraph: {
    title: 'GYS Technologies | Web, Mobile & Custom Software Solutions',
    description:
      'Discover how GYS Technologies empowers businesses through innovative web, mobile, and enterprise software development solutions.',
    url: 'https://www.gystechnologies.in',
    siteName: 'GYS Technologies',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/og/gys-home-og.jpg', // ✅ Replace with actual image path
        width: 1200,
        height: 630,
        alt: 'GYS Technologies Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GYS Technologies | Web, Mobile & Custom Software Solutions',
    description:
      'Build faster and smarter with GYS Technologies. Explore our web, app, and enterprise software development services.',
    site: '@gystechnologies', // Replace with your Twitter/X handle if verified
    images: ['/assets/og/gys-home-og.jpg'], // ✅ Replace with actual image path
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
