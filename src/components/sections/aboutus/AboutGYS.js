"use client";

import GradientButton from "@/components/ui/GradientButton";
import { motion } from "framer-motion";
import React from "react";

const AboutGYS = () => {
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
      className="relative z-10 min-h-screen w-full flex flex-col justify-center items-center select-none px-4 py-8 md:px-10 lg:px-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-gray-100 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12"
          >
            About <span className="text-indigo-600 dark:text-indigo-400">GYS</span> Technologies
          </motion.h1>

          <motion.div variants={containerVariants} className="space-y-6 text-lg">
            <motion.p variants={itemVariants}>
              {`GYS Technologies is a software company dedicated to transforming ideas into powerful digital solutions. With a passion for innovation and a commitment to excellence, we specialize in Web Development, App Development, UI/UX Design, and custom software solutions tailored to your business needs.`}
            </motion.p>

            <motion.p variants={itemVariants}>
             {` At GYS Technologies, we don't just build software — we craft experiences that drive growth, enhance user engagement, and empower businesses to scale.`}
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex justify-center">
            <GradientButton as={"link"} href={'/aboutus/lets-talk'}>{`Let's Talk`}</GradientButton>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutGYS;
