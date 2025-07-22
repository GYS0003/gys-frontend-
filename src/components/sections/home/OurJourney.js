'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import counterUp from '@/components/utils/helpers/counter';
import Image from 'next/image';

import BgBanner from "@/assets/BgBanner.jpg";
import Nextjs from '@/assets/Strategies/Nextjs.jpg';
import Reactjs from '@/assets/Strategies/Reactjs.png';
import Solana from '@/assets/Strategies/Solana.png';
import Etherum from '@/assets/Strategies/Etherum.png';
import Android from '@/assets/Strategies/Android.png';
import Javascript from '@/assets/Strategies/Javascript.jpg';
import Docker from '@/assets/Strategies/Docker.jpg';
import NodeJS from '@/assets/Strategies/NodeJS.jpg';
import Python from '@/assets/Strategies/Python.jpg';
import Flutter from '@/assets/Strategies/Flutter.jpg';

import BlurText from '@/components/ui/Animations/BannerAnimation';


const stats = [
  { value: 15, label: 'Valued Customers' },
  { value: 6, label: 'Projects' },
  { value: 8, label: 'Team Members' },
  { value: 1, label: 'Years Experience' },
];

const logos = [
  { src: Nextjs },
  { src: Reactjs },
  { src: Solana },
  { src: Etherum },
  { src: Android },
  { src: Javascript },
  { src: Docker },
  { src: NodeJS },
  { src: Python },
  { src: Flutter },
];

const OurJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    counterUp();
  }, []);

  const text = "Innovation and Growth".split('');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative z-10   gap-y-10   px-4 md:px-10 lg:px-20 pt-16  text-gray-900 dark:text-white">
      <div ref={ref} className="relative z-10 text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10  font-bold text-center "
        >
          <BlurText
            text=" A glimpse into our journey of"
            delay={350}
            animateBy="words"
            direction="top"
            className="text-xl p-2 sm:text-2xl text-wrap md:text-2xl lg:text-3xl font-semibold text-center"
          />

          <motion.span
            className="bg-gradient-to-r from-pink-500 via-orange-400 to-indigo-500 bg-clip-text text-transparent inline-block"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {text.map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.div>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: idx * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-white/10 border border-gray-300 dark:border-white/20 backdrop-blur-md shadow-md rounded-2xl p-2 md:p-6 text-center hover:shadow-2xl transition-all"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-indigo-700 dark:text-indigo-300 counter">
                <span data-countup-number={item.value}>{item.value}</span>+
              </h2>
              <p className="text-sm md:text-base mt-2 font-semibold">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}

      <div className="w-full px-4 mt-6 overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center my-6"
        >
          <BlurText
            text=" Technologies We Use"
            delay={350}
            animateBy="words"
            direction="top"
            className="text-xl p-2 sm:text-2xl text-wrap md:text-2xl lg:text-3xl font-semibold text-center"
          />
        </motion.div>
        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex w-max gap-4 sm:gap-6 py-2"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 25,
            }}
          >
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 14,
                  delay: i * 0.05,
                }}
                className="min-w-[80px] h-[60px] sm:min-w-[120px] sm:h-[80px] md:min-w-[160px] md:h-[100px] lg:min-w-[180px] lg:h-[110px] flex justify-center items-center p-2 dark:shadow-indigo-500/20 bg-white rounded-lg"
              >
                <Image
                  src={logo.src}
                  alt="Strategy Logo"
                  className="object-contain w-full h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default OurJourney;
