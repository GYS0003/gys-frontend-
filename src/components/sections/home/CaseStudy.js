"use client";

import React, { useEffect, useState } from "react";
import counterUp from "@/components/utils/helpers/counter";
import BgBanner from "@/assets/BgBanner.jpg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import GradientButton from "@/components/ui/GradientButton";
import BlurText from "@/components/ui/Animations/BannerAnimation";

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




const CaseStudy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    counterUp();
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? CASE_STUDY_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === CASE_STUDY_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      data-aos="fade-up"
      className=" min-h-screen  relative z-10 bg-gradient-to-b from-purple-800 to-purple-900
 dark:bg-none   dark:shadow-2xl flex flex-col justify-center items-center  overflow-hidden px-4 md:px-10 lg:px-20"
    >
      <div className=" w-full  md:mt-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center my-6"
        >
          <BlurText
            text="Case Studies"
            delay={350}
            animateBy="words"
            direction="top"
            className="text-xl p-2 text-white dark:text-white sm:text-2xl text-wrap md:text-2xl lg:text-3xl font-semibold text-center"
          />
        </motion.div>
        <p className="text-base sm:text-lg text-center text-indigo-100 dark:text-indigo-300 font-semibold mb-4">
          Discover How Our Solutions Have Made a Difference in Real-world Scenarios
        </p>

        {/* Navigation */}
        <div className="flex justify-between items-center my-10 px-4 md:px-20">
          <button
            onClick={handlePrev}
            className="text-3xl text-white font-bold hover:scale-110 transition-transform"
          >
            ◀
          </button>
          <div className="text-2xl sm:text-3xl text-gray-200 dark:text-white font-semibold">
            {CASE_STUDY_DATA[currentIndex].companyName}
          </div>
          <button
            onClick={handleNext}
            className="text-3xl text-white font-bold hover:scale-110 transition-transform"
          >
            ▶
          </button>
        </div>

        {/* Stats Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row justify-center items-center gap-10"
          >
            {CASE_STUDY_DATA[currentIndex].stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/90 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/20 shadow-md rounded-2xl p-2 md:p-6 text-center w-full max-w-[300px] hover:shadow-xl transition"
              >
                <h2 className="text-xl md:text-4xl  font-bold text-indigo-800 dark:text-indigo-300 counter">
                  <span data-countup-number={stat.percentage}>{stat.percentage}</span>%
                </h2>
                <p className="text-xs md:text-base text-gray-800 dark:text-gray-100 md:font-semibold mt-2 md:mt-4">
                  {stat.title}
                </p>
                <p className="text-xs md:text-base text-gray-700 dark:text-gray-200 md:font-semibold">
                  {stat.subtitle}
                </p>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {/* CTA Button for the block */}
        {/* <motion.div
          className="flex justify-center items-center pt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <GradientButton as="link" href={`/${CASE_STUDY_DATA[currentIndex].id}`}>
            Explore Case Study
          </GradientButton>
        </motion.div> */}

      </div>

    </section>
  );
};

export default CaseStudy;
