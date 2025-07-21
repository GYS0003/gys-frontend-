"use client";

import React from "react";
import { motion } from "framer-motion";
import BgBanner from "@/assets/BgBanner.jpg";
import Image from "next/image";
import GradientButton from "@/components/ui/GradientButton";
import BlurText from "@/components/ui/Animations/BannerAnimation";
import GradientText from '@/components/ui/Animations/GradientText';
import DotGrid from "@/components/ui/Animations/DotGrid";

const Banner = () => {
  return (
    <motion.section
      data-aos="fade-up"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className=" min-h-screen w-full flex flex-col z-10 relative  justify-center text-white select-none px-4 md:px-10 lg:px-20 "
    >
      <div className="absolute inset-0 z-0 w-full h-full">
        <DotGrid
          dotSize={2}
          gap={20}
          baseColor="#393E46"
          activeColor="#5227FF"
          proximity={50}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className=" flex-grow flex flex-col justify-center items-center text-center text-gray-800 dark:text-gray-200">
        {/* Title */}
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10  p-2 text-center mb-2"
          >
            <BlurText
              text="From Vision to Execution"
              delay={350}
              animateBy="words"
              direction="top"
              className="   text-wrap text-4xl sm:text-5xl  text-center "
            />

            <motion.span
              className="text-wrap  font-bold leading-snug bg-gradient-to-r from-pink-500 via-orange-400 to-indigo-500 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >

              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#40ffaa"]}
                animationSpeed={5}
                showBorder={false}
                className="text-4xl sm:text-5xl font-semibold leading-snug bg-gradient-to-r from-pink-500 via-orange-400 to-indigo-500 bg-clip-text text-transparent inline-block"
              >
                We Build What Truly Matters for Future
              </GradientText>
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.span
          className="mt-4 relative z-10 text-lg sm:text-lg md:text-xl lg:text-2xl font-thin leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Helping you grow with tailored digital solutions and modern strategies.
        </motion.span>

        {/* Button */}
        <motion.div
          className="text-center relative z-10 mt-6 md:mt-10 font-semibold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >

          <GradientButton as={'link'} href={'/portfolio'}>Explore Our Work</GradientButton>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Banner;
