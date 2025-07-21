// "use client";

// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";
// import BgBanner from "@/assets/BgBanner.jpg";
// import GradientButton from "@/components/ui/GradientButton";
// import Link from "next/link";
// import { getServices } from "@/services/apis";
// import BlurText from "@/components/ui/Animations/BannerAnimation";

// const ServicesProvided = () => {
//   return (
//     <motion.section
//       data-aos="fade-up"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ duration: 0.3 }}
//       className="min-h-screen relative w-full flex flex-col justify-center items-center select-none px-4 md:px-10 lg:px-20"
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-black pointer-events-none hidden dark:block" />
//       <div className="relative z-10 w-full">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center my-6"
//         >
//           <BlurText
//             text=" Different Kinds of Services We Provide"
//             delay={350}
//             animateBy="words"
//             direction="top"
//             className="text-xl p-2 sm:text-2xl text-wrap md:text-2xl lg:text-3xl font-semibold text-center"
//           />
//         </motion.div>

//         {/* Grid Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 m-8 sm:m-8 md:m-2 lg:grid-cols-8 gap-6 md:gap-8">
//           {/* Tech Services Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 30, rotate: -2 }}
//             whileInView={{ opacity: 1, y: 0, rotate: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             whileHover={{ 
//               y: -10,
//               boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//             }}
//             whileTap={{ scale: 0.98 }}
//             className="relative z-10 lg:col-start-3 lg:col-span-2 bg-gradient-to-br from-white/90 to-gray-100 dark:from-gray-800/70 dark:to-gray-900/90 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <Link href="/services#services" className="p-6 md:p-8 block">
//               <motion.div 
//                 whileHover={{ scale: 1.05 }}
//                 className="font-bold text-center pb-4 md:pb-6 text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//               >
//                 Tech Services
//               </motion.div>
//               <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
//                 {["Custom Support", "Web Development", "App Development", "AI & Blockchain"].map((item, index) => (
//                   <motion.li 
//                     key={index}
//                     whileHover={{ x: 5 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                     className="flex items-center py-1 border-b border-gray-100 dark:border-gray-800 last:border-0"
//                   >
//                     <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
//                     <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//                       {item}
//                     </span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </Link>
//           </motion.div>

//           {/* Digital Marketing Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 30, rotate: 2 }}
//             whileInView={{ opacity: 1, y: 0, rotate: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.7, duration: 0.8 }}
//             whileHover={{ 
//               y: -10,
//               boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//             }}
//             whileTap={{ scale: 0.98 }}
//             className="relative z-10 lg:col-start-5 lg:col-span-2 bg-gradient-to-br from-white/90 to-gray-100 dark:from-gray-800/70 dark:to-gray-900/90 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <div className="p-6 md:p-8">
//               <motion.div 
//                 whileHover={{ scale: 1.05 }}
//                 className="font-bold text-center pb-4 md:pb-6 text-xl md:text-2xl bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent"
//               >
//                 Digital Marketing
//               </motion.div>
//               <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
//                 {["SEO & Content Strategy", "Paid Advertising", "Social Media Management", "Branding"].map((item, index) => (
//                   <motion.li 
//                     key={index}
//                     whileHover={{ x: 5 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                     className="flex items-center py-1 border-b border-gray-100 dark:border-gray-800 last:border-0"
//                   >
//                     <div className="w-2 h-2 rounded-full bg-pink-500 mr-3" />
//                     <span className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
//                       {item}
//                     </span>
//                   </motion.li>
//                 ))}
//               </ul>
//               <motion.div 
//                 whileHover={{ scale: 1.03 }}
//                 className="flex justify-center pt-6 md:pt-8"
//               >
//                 <GradientButton className="text-sm shadow-lg hover:shadow-xl">
//                   Digital Marketing 
//                 </GradientButton>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default ServicesProvided;

"use client";

import React from "react";
import { motion } from "framer-motion";
import GradientButton from "@/components/ui/GradientButton";
import {
  FiBarChart2,
  FiDollarSign,
  FiSmartphone,
  FiSettings,
  FiGlobe,
  FiCpu,
} from "react-icons/fi";
import { FaMagic } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import Link from "next/link";
import { FiAward } from 'react-icons/fi';

// Reusable animation variants
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
   { text: "Brand Marketing and management", icon: <FiAward className="w-6 h-6 " /> },
    { text: "SEO & SMO & IT support", icon: <FiBarChart2 className="w-6 h-6" /> },
    { text: "Business Consultation", icon: <FiDollarSign className="w-6 h-6" /> },
    { text: "Influencer Marketing", icon: <FiSmartphone className="w-6 h-6" /> },
    { text: "Content Creation", icon: <FaMagic className="w-6 h-6" /> },
  ];

  const techItems = [
    { text: "Blockchain", icon: <FiSettings className="w-6 h-6" /> },
    { text: "Web Development", icon: <FiGlobe className="w-6 h-6" /> },
    { text: "App Development", icon: <FiCpu className="w-6 h-6" /> },
    { text: "Artificial Intelligence", icon: <FaRobot className="w-6 h-6" /> },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="relative min-h-screen w-full pt-16 flex flex-col justify-center items-center px-4 md:px-10 lg:px-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black pointer-events-none hidden dark:block" />
      <div className="z-10 relative text-xl p-2 sm:text-2xl md:text-3xl font-semibold text-center text-primary">
        Different Kinds of Services We Provide
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 w-full max-w-4xl">
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

              <h3 className="text-2xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
                Tech Services
              </h3>
              <ul className="space-y-4 text-sm md:text-base">
                {techItems.map((item, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-xl"
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
            <ul className="space-y-4 text-sm md:text-base">
              {marketingItems.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-xl"
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
              href="/tech"
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