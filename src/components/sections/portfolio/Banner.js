"use client";

import React from "react";
import { motion } from "framer-motion";
import BlurText from "@/components/ui/Animations/BannerAnimation";

const Banner = () => {
  const text = "Scaling Businesses Through Technology".split("");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      data-aos="fade-up"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative min-h-screen w-full flex flex-col justify-center text-gray-800 dark:text-white select-none px-4 py-8 md:px-10 lg:px-20"
    >
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center text-center text-gray-800 dark:text-gray-200">
        {/* Blur Text Title */}
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <BlurText
            text="Portfolio"
            delay={350}
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-3xl text-wrap md:text-4xl lg:text-5xl font-semibold text-center"
          />

          {/* Running Gradient Text Reveal */}
          <motion.span
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug bg-gradient-to-r from-pink-500 via-orange-400 to-indigo-500 bg-clip-text text-transparent inline-block"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              backgroundSize: "300% 300%",
              animation: "gradientShift 6s linear infinite",
              display: "inline-block",
            }}
          >
            {text.map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </motion.div>

        {/* Subheading */}
        <motion.span
          className="mt-6 text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
        We enable businesses to thrive in a rapidly evolving digital landscape.
        </motion.span>
      </div>

      {/* Gradient animation keyframes */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Banner;
