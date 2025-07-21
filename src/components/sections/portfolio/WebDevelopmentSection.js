"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Clothify from "@/assets/AppDevelopment/Clothify.jpg";
import HomeStay from "@/assets/AppDevelopment/HomeStay.webp";

import AD2 from "@/assets/AppDevelopment/AD2.png";

const WebDevelopmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="web-development"
      className="min-h-screen w-full flex flex-col justify-center relative z-10 py-22 px-4 sm:px-8 lg:px-20"
    >
      <div className="text-center mb-5 md:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Web Development
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          We build innovative mobile applications tailored to industry needs — blending functionality, speed, and aesthetics.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:px-20">
        {/* Clothify Card */}
        
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cursor-pointer bg-gradient-to-r from-orange-300 to-orange-400 p-3 rounded-xl shadow-lg text-white flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-full h-50 relative">
              <Image
                src={Clothify}
                alt="Clothify App"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold">Clothify – Fashion Shopping App</h3>
            <p className="text-sm text-white/90">
              Clothify is an online shopping app for men’s and women’s fashion. Discover the latest trends, browse curated collections, and shop effortlessly with secure checkout and real-time delivery tracking.
            </p>
          </motion.div>
      

        {/* Homestay Booking Website */}
       
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="cursor-pointer bg-gradient-to-r from-purple-500 to-violet-600 p-3 rounded-xl shadow-lg text-white flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-full h-50 relative">
              <Image
                src={HomeStay}
                alt="Homestay Booking Website"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold">StayNest – Homestay Booking Website</h3>
            <p className="text-sm text-white/90">
              StayNest is a user-friendly homestay booking platform that connects travelers with unique stays. Browse verified properties, check real-time availability, and book instantly with secure payment integration.
            </p>
          </motion.div>
     
      </div>
    </section>
  );
};

export default WebDevelopmentSection;
