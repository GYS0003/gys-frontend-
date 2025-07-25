"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BookCall from "./BookCall";
import BlurText from "@/components/ui/Animations/BannerAnimation";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const GetInTouch = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.3 });
 
  return (
    <section
      ref={containerRef}
      className="  relative z-10 flex flex-col justify-center items-center py-22 px-4 transition-colors duration-300"
    >
     

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center  mb-8 "
      >
         <BlurText
            text="Let's Talk "
            delay={350}
            animateBy="words"
            direction="top"
            className="text-xl p-2 sm:text-2xl text-wrap md:text-2xl lg:text-3xl font-semibold text-center"
          />

        <div className="w-16 h-1 bg-indigo-500 mx-auto my-2 rounded-full" />
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
          We’re just a message away. Let’s build something amazing together!
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto   grid md:grid-cols-2 gap-8 items-start ">
       
          <BookCall/>

        {/* Contact Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className=" relative overflow-hidden"
        >
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

          <div className="flex items-start mb-6 gap-4">
            <div className="bg-indigo-100 dark:bg-white/20 p-2 rounded-full">
              <span className="text-xl">📞</span>
            </div>
            <div>
              <p className="font-semibold">Call Us</p>
              <p className="text-sm">+91 8273370028</p>
            </div>
          </div>

          <div className="flex items-start mb-6 gap-4">
            <div className="bg-indigo-100 dark:bg-white/20 p-2 rounded-full">
              <span className="text-xl">📧</span>
            </div>
            <div>
              <p className="font-semibold">Email Us</p>
              <p className="text-sm">support@gystechnologies.com</p>
            </div>
          </div>

          <div className="flex items-start mb-6 gap-4">
            <div className="bg-indigo-100 dark:bg-white/20 p-2 rounded-full">
              <span className="text-xl">📍</span>
            </div>
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-sm max-w-[300px]"><span className="text-sm font-medium text-gray-700 dark:text-gray-100 hover:underline cursor-pointer">
               {` Branch Office: Whitefield, Bangalore, India`} <br />
                {`Branch Office: Dehradun, Uttarakhand, India`}
              </span></p>
            </div>
          </div>


        </motion.div>

      </div>
    </section>
  );
};

export default GetInTouch;
