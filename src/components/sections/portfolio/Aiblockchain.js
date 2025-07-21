"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AD1 from "@/assets/AppDevelopment/AD1.png";
import AD2 from "@/assets/AppDevelopment/AD2.png";
import Tracker from "@/assets/AppDevelopment/Tracker.png";
import MediChain from '@/assets/AppDevelopment/MediChain.png'
const Aiblockchain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="ai-blockchain"
      className="min-h-screen w-full flex flex-col justify-center relative z-10 py-22 px-4 sm:px-8 lg:px-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          AI Blockchain
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Merging the power of Artificial Intelligence with the trust of Blockchain to deliver smarter, decentralized solutions across industries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:px-20">
        {/* ChainVision Card */}
        <Link href="/chainvision">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cursor-pointer bg-gradient-to-r from-indigo-500 to-indigo-700 p-3 rounded-xl shadow-lg text-white flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-full h-50 relative">
              <Image
                src={Tracker}
                alt="ChainVision App"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold">ChainVision – AI Supply Chain Tracker</h3>
            <p className="text-sm text-white/90">
              ChainVision uses AI and blockchain to enhance transparency and traceability across supply chains. Get real-time insights, detect anomalies, and verify product authenticity with decentralized tracking.
            </p>
          </motion.div>
        </Link>

        {/* MediChain Card */}
        <Link href="/medichain">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl shadow-lg text-white flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-full h-50 relative">
              <Image
                src={MediChain}
                alt="MediChain App"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold">MediChain – Decentralized Health Records</h3>
            <p className="text-sm text-white/90">
              MediChain securely stores patient health data using blockchain and leverages AI to provide personalized insights. Patients control access while hospitals ensure data integrity and compliance.
            </p>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Aiblockchain;
