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
    id: 'mitroz-restaurant',
    companyName: 'Mitroz Restaurant',
    title: 'Digitally Transforming the Restaurant Experience',
    subtitle: 'Empowering Mitroz with a modern food ordering and reservation platform',
    stats: [
      {
        percentage: 65,
        title: 'Reduction in order',
        subtitle: 'processing time',
      },
      {
        percentage: 78,
        title: 'Increase in table',
        subtitle: 'reservation efficiency',
      },
    ],
    sections: [
      {
        title: 'Overview',
        image: TA1,
        description: `Mitroz Restaurant sought to streamline its dine-in and online ordering services. We helped them build a full-stack platform that enables users to reserve tables, order meals, and receive real-time updates.`,
      },
      {
        title: 'Problem',
        image: TA2,
        description: `Manual order taking and overbooking were frequent problems. The restaurant lacked visibility into reservations, causing poor customer experiences during peak hours.`,
      },
      {
        title: 'Solution',
        image: TA3,
        description: `We built an intuitive platform that supports online reservations, real-time table tracking, and digital menu browsing. Staff receive alerts for new bookings and customers get instant confirmations.`,
      },
      {
        title: 'Conclusion',
        image: TA4,
        description: `Mitroz Restaurant saw a 65% decrease in order delays and a 78% improvement in reservation flow, leading to better guest satisfaction and return visits.`,
      },
    ],
  },
  {
    id: 'hotel-booking',
    companyName: 'Hotel Booking Platform',
    title: 'Optimizing Hotel Bookings with a Unified Platform',
    subtitle: 'A seamless experience for travelers to find and book stays effortlessly',
    stats: [
      {
        percentage: 72,
        title: 'Faster room',
        subtitle: 'confirmation process',
      },
      {
        percentage: 85,
        title: 'Increase in return',
        subtitle: 'customer bookings',
      },
    ],
    sections: [
      {
        title: 'Overview',
        image: DINEEASY1,
        description: `We developed a hotel booking engine offering real-time availability, user reviews, and instant confirmation for a growing travel-tech business.`,
      },
      {
        title: 'Problem',
        image: DINEEASY2,
        description: `The earlier booking system lacked synchronization across devices, with no customer review system or instant availability. Bookings were lost due to delays.`,
      },
      {
        title: 'Solution',
        image: DINEEASY3,
        description: `We built a mobile-first platform with user accounts, filters, maps integration, secure payments, and admin controls to approve and manage properties.`,
      },
      {
        title: 'Conclusion',
        image: DINEEASY4,
        description: `Booking speed increased by 72%, and returning users grew by 85%. The platform saw high ratings from customers for ease of use and transparency.`,
      },
    ],
  },
  {
    id: 'ghumakad-travel-booking',
    companyName: 'Ghumakad Travel',
    title: 'Ghumakad – Dynamic Travel Packages for Everyone',
    subtitle: 'Bringing tailored and group travel experiences to life with tech',
    stats: [
      {
        percentage: 80,
        title: 'Uplift in user',
        subtitle: 'engagement time',
      },
      {
        percentage: 70,
        title: 'Improvement in',
        subtitle: 'booking conversion rate',
      },
    ],
    sections: [
      {
        title: 'Overview',
        image: SA1,
        description: `Ghumakad is a personalized travel booking platform offering customized trips and group packages. We created a fast, mobile-responsive portal supporting flexible itineraries.`,
      },
      {
        title: 'Problem',
        image: SA2,
        description: `The old system only allowed static listings. There was no personalization, package comparison, or real-time updates. The UX was slow, especially on mobile.`,
      },
      {
        title: 'Solution',
        image: SA3,
        description: `We introduced tailored booking flows, editable packages, payment gateway integration, and social media discovery features.`,
      },
      {
        title: 'Conclusion',
        image: SA4,
        description: `Engagement increased by 80%, while booking rates went up by 70% within the first 2 months of launch. Ghumakad now stands out for user-first trip planning.`,
      },
    ],
  },
  {
    id: 'jewelry-website',
    companyName: 'Jewelry Website',
    title: 'A Shimmering Jewelry Experience Online',
    subtitle: 'Bringing elegance to e-commerce with virtual try-ons and stunning visuals',
    stats: [
      {
        percentage: 60,
        title: 'Improvement in customer retention',
        subtitle: 'Due to personalized try-on experience',
      },
      {
        percentage: 50,
        title: 'Increase in online sales',
        subtitle: 'Driven by high-resolution product previews',
      },
    ],
    sections: [
      {
        title: 'Overview',
        image: '',
        description: `We built a sleek and modern jewelry e-commerce platform offering high-resolution product views, virtual try-on features, and secure payments.`,
      },
    ],
  },
  {
    id: 'river-tiger',
    companyName: 'River Tiger Resort',
    title: 'A Nature-Immersive Resort Experience in Dehradun',
    subtitle: 'Stay, explore, and celebrate with seamless online booking',
    stats: [
      {
        percentage: 60,
        title: 'Increase in direct bookings',
        subtitle: 'Driven by intuitive UI and real-time availability',
      },
      {
        percentage: 70,
        title: 'Boost in adventure participation',
        subtitle: 'Due to integrated add-on booking options',
      }
    ],
    sections: [
      {
        title: 'Overview',
        image: '',
        description: `River Tiger Resort offers a full-fledged booking platform for luxurious stays, guided adventure activities, and event reservations. Guests can explore cottages, villas, and tents, check real-time availability, and book customized adventure experiences, all through a streamlined digital interface.`,
      },
    ],
  },
  
  {
    id: 'clothes-website',
    companyName: 'Clothes Website',
    title: 'Modern Clothing Storefront with Seasonal Collections',
    subtitle: 'A responsive and stylish shopping experience for all',
    stats: [
      {
        percentage: 55,
        title: 'Boost in average session duration',
        subtitle: 'Thanks to immersive UI and AR experience',
      },
      {
        percentage: 48,
        title: 'Growth in returning customer base',
        subtitle: 'Driven by premium user experience',
      },
    ],
    sections: [
      {
        title: 'Overview',
        image: '',
        description: `Fashion-forward site for men and women featuring seasonal launches, smart filters, cart, and streamlined checkout.`,
      },
    ],
  },
  {
    id: 'taxi-application',
    companyName: 'Taxi Application',
    title: 'Real-Time Taxi Booking Platform',
    subtitle: 'Instant rides with fare estimates and driver tracking',
    stats: [
      {
        percentage: 75,
        title: 'Decrease in ride wait time',
        subtitle: 'Due to optimized driver matching',
      },
      {
        percentage: 62,
        title: 'Increase in successful trip completions',
        subtitle: 'With real-time tracking and in-app communication',
      },
    ],
    sections: [
      {
        title: 'Overview',
        image: '',
        description: `We designed a mobile-first ride-booking app offering real-time cab tracking, fare calculators, in-app chat, and secure payments.`,
      },
    ],
  },
  {
    id: 'fashion-clothing',
    companyName: 'Fashion Clothing',
    title: 'Streetwear & Lifestyle Brand Website',
    subtitle: 'Influencer drops, size guides, and interactive lookbooks',
    stats: [
      {
        percentage: 69,
        title: 'Boost in user engagement',
        subtitle: 'Influenced by lookbook interactivity',
      },
      {
        percentage: 52,
        title: 'Improved product discoverability',
        subtitle: 'Thanks to smart tagging and filters',
      },
    ],
    sections: [
      {
        title: 'Overview',
        image: '',
        description: `A trendy fashion portal with influencer collabs, street style lookbooks, smart filtering, and personalized shopping experience.`,
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
      className="  relative z-10 bg-gradient-to-b from-purple-800 to-purple-900
 dark:bg-none    flex flex-col md:border-none border border-white/20 dark:border-white/20 mx-2 my-2 p-5 rounded-3xl items-center  overflow-hidden px-4 md:px-10 lg:px-20"
    >
      <div className=" w-full   max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center my-3"
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
