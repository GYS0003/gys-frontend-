"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BgBanner from "@/assets/BgBanner.jpg";
import Image from "next/image";
import BlurText from "@/components/ui/Animations/BannerAnimation";
const Banner = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const text = "awesome ideas to life!".split('');

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
    <section
      ref={ref}
      data-aos="fade-up"
      className="relative min-h-screen w-full flex flex-col justify-center items-center select-none px-4 py-8 md:px-10 lg:px-20 "
    >


      <div className="relative z-10 flex-grow flex flex-col justify-center items-center text-left">
            <BlurText
              text="About Us"
              delay={350}
              animateBy="words"
              direction="top"
              className="text-3xl sm:text-3xl text-wrap md:text-4xl lg:text-5xl font-semibold text-center "
            />
      
        <div className="text-center px-4">
          <span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-gray-900 dark:text-gray-100">
            We help you bring your{" "}
          </span>
          <motion.span
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-indigo-500 bg-clip-text text-transparent inline-block"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}  // ✅ This triggers animation
          >
            {text.map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.span>


        </div>
      </div>
    </section>
  );
};

export default Banner;
