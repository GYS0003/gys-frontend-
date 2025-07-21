"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AD1 from "@/assets/AppDevelopment/AD1.png";
import AD2 from "@/assets/AppDevelopment/AD2.png";
import Mitroz from "@/assets/AppDevelopment/Mitroz.jpg";
import DineEase from "@/assets/AppDevelopment/DineEase.jpg";

const AppDevelopmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="app-development"
      className="min-h-screen w-full flex flex-col justify-center relative z-10 py-12 md:py-5 px-4 sm:px-8 lg:px-20"
    >
      <div className="text-center mb-5 md:mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          App Development
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          We build innovative mobile applications tailored to industry needs —
          blending functionality, speed, and aesthetics.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:px-20">
        {/* Mitroz App Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="cursor-pointer bg-gradient-to-r from-purple-600 to-violet-500 p-3 rounded-xl shadow-lg text-white flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="w-full h-50 relative">
            <Image
              src={Mitroz}
              alt="Mitroz App"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="text-xl font-bold">Mitroz – Table & Event Booking App</h3>
          <p className="text-sm text-white/90">
            Mitroz is a comprehensive platform that allows users to reserve
            restaurant tables and book events effortlessly. With real-time
            availability, digital confirmations, and smart scheduling, Mitroz
            streamlines both dining and event experiences.
          </p>
        </motion.div>

        {/* DineEase App Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl shadow-lg text-white flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="w-full h-50 relative">
            <Image
              src={DineEase}
              alt="DineEase App"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="text-xl font-bold">DineEase – Restaurant Booking App</h3>
          <p className="text-sm text-white/90">
            DineEase is a modern dining platform designed to simplify and
            elevate the restaurant experience. Built for food lovers and
            restaurant owners, the app offers real-time table reservations,
            secure payments, and customer reviews.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDevelopmentSection;
