'use client'

import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import Image from 'next/image';
import BgBanner from "@/assets/BgBanner.jpg";
import counterUp from "@/components/utils/helpers/counter";
import GradientButton from '@/components/ui/GradientButton';

const StatsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const stats = [
    {
      value: 98,
      title: "Client Satisfaction & Project Success",
      description: "We deliver tailored software solutions that exceed expectations, empowering businesses to grow smarter and faster. Our commitment to quality and innovation."
    },
    {
      value: 92,
      title: "Digital Growth & Innovation Success",
      description: "We empower businesses to evolve through intelligent software strategies – from reimagining outdated systems to launching agile."
    },
    {
      value: 87,
      title: "Enhanced Workflow & Productivity",
      description: "Our smart software solutions eliminate bottlenecks, automate routine processes, and empower teams to work faster and more efficiently."
    }
  ];
  useEffect(() => {
    counterUp();
  }, []);
  return (
    <section data-aos="fade-up"
      className="relative z-10 min-h-screen w-full bg-gradient-to-b from-pink-500 to-purple-500 dark:bg-none flex flex-col justify-center items-center md:py-4 py-16 select-none px-4 md:px-10 lg:px-20 ">


      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className=" rounded-2xl p-4 md:p-6 border  bg-white/10 backdrop-blur-md shadow-2xl lg:px-20   border-white/20  hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl sm:text-3xl  md:text-4xl lg:text-5xl font-bold text-indigo-700 counter">
                  <span data-countup-number={stat.value}>{stat.value}</span>%
                </h2>


                <h3 className="text-lg md:text-2xl font-semibold text-indigo-700 dark:text-gray-200 mb-3">
                  {stat.title}
                </h3>

                <p className="text-gray-100 dark:text-gray-100 text-base md:text-lg">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
          <GradientButton as={'link'} href={'/portfolio'}>See Our Success Stories</GradientButton>
    </section>
  );
};

export default StatsSection;