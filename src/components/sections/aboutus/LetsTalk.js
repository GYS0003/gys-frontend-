"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

export default function LetsTalk() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
    const MotionLink = motion(Link);

  return (
    <section
      ref={ref}
      className="py-30 w-full relative bg-gradient-to-b to-[rgba(53,47,147,1)] from-[rgba(181,0,185,1)] dark:bg-none z-10 flex items-center justify-center  text-white px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center flex flex-col items-center gap-6 max-w-2xl"
      >
        <button className="border border-purple-300 text-sm px-6 py-2 rounded-full hover:bg-purple-700 hover:border-transparent transition">
          Contact us
        </button>

        <h2 className="text-3xl md:text-4xl font-bold">
          Take the First step in your journey with <span className="text-purple-300">GYS</span>
        </h2>

        <p className="text-gray-200 text-base md:text-lg">
          Got a big project in mind? We’d love to hear from you.
        </p>
          
       <MotionLink
      href="/aboutus/lets-talk"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-md shadow-lg"
    >
      Let’s Talk
    </MotionLink>
      </motion.div>
    </section>
  );
}
