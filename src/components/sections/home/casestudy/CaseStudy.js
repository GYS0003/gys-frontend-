'use client';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import TA1 from '@/assets/CaseStudy/TA1.png';
import TA2 from '@/assets/CaseStudy/TA2.png';
import TA3 from '@/assets/CaseStudy/TA3.png';
import TA4 from '@/assets/CaseStudy/TA4.png';
import SS1 from '@/assets/CaseStudy/SS1.jpg';
import SS2 from '@/assets/CaseStudy/SS2.jpg';
import SS3 from '@/assets/CaseStudy/SS3.jpg';
import SS4 from '@/assets/CaseStudy/SS4.jpg';
import SA1 from '@/assets/CaseStudy/SA1.jpg';
import SA2 from '@/assets/CaseStudy/SA2.jpg';
import SA3 from '@/assets/CaseStudy/SA3.jpg';
import SA4 from '@/assets/CaseStudy/SA4.jpg';
import GYS1 from '@/assets/CaseStudy/GYS1.jpg';
import GYS2 from '@/assets/CaseStudy/GYS2.jpg';
import GYS3 from '@/assets/CaseStudy/GYS3.jpg';
import GYS4 from '@/assets/CaseStudy/GYS4.jpg';
import DINEEASY1 from '@/assets/CaseStudy/DINEEASY1.png';
import DINEEASY2 from '@/assets/CaseStudy/DINEEASY2.png';
import DINEEASY3 from '@/assets/CaseStudy/DINEEASY3.jpg';
import DINEEASY4 from '@/assets/CaseStudy/DINEEASY4.jpg';



import Image from 'next/image';
import GradientButton from '@/components/ui/GradientButton';

const CASE_STUDY_DATA = [
  {
    id: 'homestay-booking-app',
    companyName: 'Homestay Booking App',
    title: 'Revolutionizing Homestay Bookings with Automation',
    subtitle: 'An integrated digital solution to streamline homestay bookings and enhance guest experiences',
    stats: [
      {
        percentage: 70,
        title: 'Increase in user',
        subtitle: 'registration efficiency',
      },
      {
        percentage: 90,
        title: 'Improvement in',
        subtitle: 'customer satisfaction',
      },
    ],
    sections: [
      {
        title: 'Overview',
        image: TA1,
        description: `We partnered with a prominent travel-tech client to transform their manual homestay booking system into a fully automated digital experience. The platform now serves hosts and travelers with seamless web and mobile interactions.`,
      },
      {
        title: 'Problem',
        image: TA2,
        description: `Their legacy system relied heavily on manual interventions for host confirmations and guest communications. The absence of GPS support, customer reviews, and real-time booking visibility created inefficiencies and scalability challenges.`,
      },
      {
        title: 'Solution',
        image: TA3,
        description: `We delivered a robust web and mobile platform with real-time room availability, GPS integration, host dashboards, automated communication flows, and review management. Admins gained full control with a centralized dashboard.`,
      },
      {
        title: 'Conclusion',
        image: TA4,
        description: `Within 3 months, user onboarding improved by 70%, and satisfaction scores rose by 90%. The client scaled operations effortlessly, boosted by increased automation and analytics capabilities.`,
      },
    ],
  },
  {
    id: 'samsara-studio',
    companyName: 'Samsara Studio',
    title: 'Samsara Studio – Creative Digital Marketing that Works',
    subtitle: 'Helping Samsara Studio deliver performance-driven digital campaigns and client success',
    stats: [
      {
        percentage: 75,
        title: 'Faster reservation',
        subtitle: 'handling process',
      },
      {
        percentage: 88,
        title: 'Increase in repeat',
        subtitle: 'customer bookings',
      },
    ],
    sections: [
      {
        title: 'Overview',
        image: DINEEASY1,
        description: `Samsara Studio, a boutique digital marketing agency, sought to modernize client engagement and streamline campaign onboarding. We enabled a tailored platform to manage services, bookings, and results tracking—all from one place.`,
      },
      {
        title: 'Problem',
        image: DINEEASY2,
        description: `Manual form-based onboarding and static service pages led to high bounce rates. Delayed communication and non-personalized workflows impacted customer retention and feedback.`,
      },
      {
        title: 'Solution',
        image: DINEEASY3,
        description: `We built a conversion-first site with integrated OTP booking, service discovery flows, CRM integration, and analytics dashboards. Users could request services, schedule calls, and get updates in real-time.`,
      },
      {
        title: 'Conclusion',
        image: DINEEASY4,
        description: `Repeat bookings rose by 88%, with a 75% reduction in booking time. The new digital interface helped Samsara Studio close deals faster, improve client satisfaction, and expand their service footprint.`,
      },
    ],
  },
  {
    id: 'samsara-adventures',
    companyName: 'Samsara Adventures',
    title: 'Samsara Adventures – Personalized Travel at Scale',
    subtitle: 'Transforming the travel experience through intuitive digital journeys and social-first discovery',
    stats: [
      {
        percentage: 68,
        title: 'Boost in user',
        subtitle: 'booking completion rate',
      },
      {
        percentage: 82,
        title: 'Increase in social',
        subtitle: 'media engagement',
      },
    ],
    sections: [
      {
        title: 'Overview',
        image: SA1,
        description: `Samsara Adventures is a premium travel planning brand known for crafting personalized, offbeat journeys. They needed a scalable platform to simplify trip discovery and booking—especially via mobile and social media.`,
      },
      {
        title: 'Problem',
        image: SA2,
        description: `Their earlier site lacked personalization and mobile responsiveness. Leads from social campaigns dropped off due to clunky navigation, limited integration with messaging platforms, and poor booking visibility.`,
      },
      {
        title: 'Solution',
        image: SA3,
        description: `We created a mobile-optimized platform with personalized itineraries, seamless Instagram and WhatsApp lead capture, dynamic suggestions, and blog content optimized for travel SEO and user intent.`,
      },
      {
        title: 'Conclusion',
        image: SA4,
        description: `Booking completions improved by 68%, and lead engagement from Instagram Stories and WhatsApp surged by 82%. The brand saw a noticeable uplift in inquiries and brand mentions across channels.`,
      },
    ],
  }
];


const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function CaseStudy() {
  const { id } = useParams();
  const [study, setStudy] = useState(null);

  useEffect(() => {
    const matched = CASE_STUDY_DATA.find(item => item.id === id);
    setStudy(matched);
  }, [id]);

  if (!study) return <p className="text-center p-10 text-gray-400">Loading case study...</p>;

  return (
    <div className="min-h-screen relative z-10 lg:py-22 px-4 md:px-16  dark:text-white  text-black">
      {/* Hero */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center py-10 mb-12 bg-gradient-to-b from-black to-gray-900 text-white rounded-2xl dark:backdrop-blur-md"
      >
        <h1 className="text-3xl md:text-4xl font-bold">{study.title}</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">{study.subtitle}</p>
      </motion.section>

      {study.sections.map((section, index) => (
        <motion.section
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className={`
      mb-20 flex flex-col md:flex-row 
      ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} 
      items-center gap-6
    `}
        >
          <div className="w-full md:w-1/2">
            <Image
              src={section.image}
              alt={section.title}
              className="w-full h-auto lg:h-[300px] object-cover rounded-xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
            />
          </div>

          <div className="md:w-[55%] space-y-6">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            {section.description.split('\n').map((para, i) => (
              <p key={i} className="text-sm leading-relaxed mb-4">{para.trim()}</p>
            ))}
          </div>
        </motion.section>
      ))}
      <div className='flex justify-center'>
        <GradientButton>View Live</GradientButton>
      </div>
    </div>
  );
}
