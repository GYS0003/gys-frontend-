

"use client";

import React from "react";
import { motion } from "framer-motion";
import GradientButton from "@/components/ui/GradientButton";
import Link from "next/link";
import { 
  FiBarChart2, 
  FiDollarSign, 
  FiSmartphone, 
  FiSettings, 
  FiGlobe, 
  FiCpu, 
  FiUsers, 
  FiPackage, 
  FiShoppingCart, 
  FiMonitor,
 
  FiAward 
} from "react-icons/fi";
import { 
  FaMagic,
} from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServicesProvided = () => {
 const marketingItems = [
   { text: "Brand Marketing and Management", icon: <FiAward className="w-6 h-6 " /> },
   { text: "Business Consultation", icon: <FiDollarSign className="w-6 h-6" /> },
   { text: "Content Creation", icon: <FaMagic className="w-6 h-6" /> },
   { text: "IT support", icon: <FiMonitor className="w-6 h-6" /> },
   { text: "Influencer Marketing", icon: <FiSmartphone className="w-6 h-6" /> },
    { text: "SEO & SMO", icon: <FiBarChart2 className="w-6 h-6" /> },
  ];

  const techItems = [
    { text: "App Development", icon: <FiCpu className="w-6 h-6" /> },
    { text: "Artificial Intelligence", icon: <FaRobot className="w-6 h-6" /> },
    { text: "Blockchain", icon: <FiSettings className="w-6 h-6" /> },
    { text: "CRM Systems", icon: <FiUsers className="w-6 h-6" /> },
    { text: "ERP Solutions", icon: <FiPackage className="w-6 h-6" /> },
    { text: "E-commerce Platforms", icon: <FiShoppingCart className="w-6 h-6" /> },
    { text: "Web Development", icon: <FiGlobe className="w-6 h-6" /> },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="relative  w-full py-16 flex flex-col justify-center items-center px-4 md:px-10 lg:px-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black pointer-events-none hidden dark:block" />
      <div className="z-10 relative text-xl p-2 sm:text-2xl md:text-3xl font-semibold text-center text-primary">
        Different Kinds of Services We Provide
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 w-full max-w-4xl">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            y: -15,
            rotateX: -3,
            rotateY: 3,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          className="relative rounded-2xl text-white p-8 
          shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 border border-dashed border-gray-300 dark:border-gray-700 transition-all duration-300 transform-style-3d"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
        >
          <div className="relative z-10">
            <Link href="/services" passHref >

              <h1 className="text-2xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
                Tech Services
              </h1>
              <ul className="space-y-2 text-sm md:text-base">
                {techItems.map((item, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center p-2 bg-white/10 backdrop-blur-sm rounded-xl"
                  >
                    <span className="flex-shrink-0 text-gray-800 dark:text-gray-100 mr-3">
                      {item.icon}
                    </span>
                    <span className="font-medium text-gray-800 dark:text-gray-100">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </Link>
          </div>
        </motion.div>
        {/* Marketing Card - Properly wrapped Link */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            y: -15,
            rotateX: 3,
            rotateY: -3,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          className="relative z-10 rounded-2xl text-white p-8 
            shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 border border-dashed border-gray-300 dark:border-gray-700 transition-all duration-300 transform-style-3d cursor-pointer"

        >
          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 text-center mb-6">
              Digital Marketing
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              {marketingItems.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center p-2 bg-white/10 backdrop-blur-sm rounded-xl"
                >
                  <span className="flex-shrink-0 text-gray-800 dark:text-gray-100 mr-3">
                    {item.icon}
                  </span>
                  <span className="font-medium text-gray-800 dark:text-gray-100">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <GradientButton
              as="link"
              href="https://www.samsarastudio.co"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-bold text-lg"
              glowColor="purple"
            >
              Visit Our Marketing Site
            </GradientButton>
          </motion.div>
        </motion.div>



      </div>
    </motion.section>
  );
};

export default ServicesProvided;