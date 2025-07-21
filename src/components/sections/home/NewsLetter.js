"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import BRG from '@/assets/patners/BRG.jpg';
import BSE from '@/assets/patners/BSE.png';
import DBS from '@/assets/patners/DBS.png';
import FIS from '@/assets/patners/FIS.png';
import BlurText from "@/components/ui/Animations/BannerAnimation";
const logos = [BRG, BSE, DBS, FIS];

const NewsLetter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className=" min-h-screen relative z-10 flex flex-col justify-center gap-14 sm:gap-14 lg:gap-8 items-center  transition-colors duration-300"
    >
      <div className="w-full overflow-hidden  px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center my-6"
        >
           <BlurText
            text="Trusted Software Development Partners "
            delay={350}
            animateBy="words"
            direction="top"
            className="p-2 text-xl  sm:text-xl  md:text-2xl lg:text-3xl text-wrap font-semibold text-center"
          />
          
        </motion.div>

        {/* Scrolling Logos */}
        <div className="relative z-10  overflow-hidden">
          <motion.div
            className="flex w-max gap-6 py-2"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 15,
            }}
          >
            {[...logos, ...logos, ...logos, ...logos].map((src, i) => (
              <LogoCard key={i} src={src} />
            ))}
          </motion.div>
        </div>
      </div>
      <div className=" px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-4 bg-white dark:bg-white/10 backdrop-blur-md shadow-2xl border border-gray-200 dark:border-white/20 rounded-3xl"
        >
      
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center my-2 md:my-3"
          >
           Newsletter {" "}
          </motion.div>

          <h3 className="text-medium sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-2 text-indigo-600 dark:text-indigo-400">
            Subscribe Our Newsletter
          </h3>

          {/* Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-center mb-8 text-gray-700 dark:text-gray-200">
            Subscribe to our newsletter today and be the first to know about upcoming events, product launches, and special promotions.
          </p>

          <div className="w-full px-4">
            <div className="max-w-md w-full mx-auto">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Email Input */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full flex-grow px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-800 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                {/* Subscribe Button */}
                <button
                  type="button"
                  className="px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 cursor-pointer rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-all duration-200 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LogoCard = ({ src }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="min-w-[80px] h-[60px] sm:min-w-[120px] sm:h-[80px] md:min-w-[160px] md:h-[100px] lg:min-w-[180px] lg:h-[110px] flex justify-center items-center p-2 dark:shadow-indigo-500/20 bg-white rounded-lg"
  >
    <Image
      src={src}
      alt="partner logo"
      width={160}
      height={80}
      className="object-contain w-full h-full   "
    />
  </motion.div>
);
export default NewsLetter;
