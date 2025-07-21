"use client";

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import BgBanner from "@/assets/BgBanner.jpg";
import GradientButton from '@/components/ui/GradientButton';

const AboutGYS = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      data-aos="fade-up"
      className="relative z-10 min-h-screen w-full flex flex-col justify-center items-center select-none px-4 py-4 md:px-10 lg:px-20 "
    >
   

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12"
          >
            Who we are?
          </motion.h1>

          <motion.div
            variants={containerVariants}
            className="space-y-6 text-lg text-gray-700 dark:text-gray-300"
          >
            <motion.p variants={itemVariants}>
              We are a team of passionate innovators, designers, and developers united by a shared mission — to create smart, scalable, and user-centric digital solutions.
            </motion.p>

            <motion.p variants={itemVariants}>
              Founded with a vision to bridge technology and business, we specialize in delivering top-tier services in web development, mobile app development, UI/UX design, and custom software tailored to your unique goals.
              We believe in collaboration, creativity, and continuous growth. 
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center"
          >
              <GradientButton as={'link'} href={'/services#services'}>Explore Our Work</GradientButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutGYS;
