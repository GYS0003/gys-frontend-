'use client'

import React from 'react'
import Image from 'next/image';
import BgBanner from "@/assets/BgBanner.jpg";
import { motion } from 'framer-motion';
import GradientButton from '@/components/ui/GradientButton';

const OurVision = () => {
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
      className="relative z-10  w-full flex flex-col justify-center items-center select-none px-4 py-30 md:px-10 lg:px-20 "
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
            Our Vision
          </motion.h1>

          <motion.div
            variants={containerVariants}
            className="space-y-6 text-lg text-gray-700 dark:text-gray-300"
          >
            <motion.p variants={itemVariants}>
              At GYS Technologies, we’re a team of engineers, designers, and visionaries committed to building intelligent, scalable, and future-ready digital solutions. Our passion lies in transforming complex challenges into powerful, user-friendly technology.
            </motion.p>

            <motion.p variants={itemVariants}>
              With expertise in web and mobile development, UI/UX design, AI integration, and enterprise software, we partner with businesses to drive innovation and operational excellence. Through a collaborative approach and cutting-edge tech, we help organizations achieve sustainable growth in a digital-first world.
            </motion.p>
          </motion.div>


          <motion.div
            variants={itemVariants}
            className="mt-5 flex justify-center"
          >
            <GradientButton as={'link'} href={'/services#services'}>Explore Our services</GradientButton>

          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurVision;
