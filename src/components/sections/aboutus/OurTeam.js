"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { getTeam } from "@/services/apis";
import Image from "next/image";

const OurTeam = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await getTeam(); // should return array of { name, role, imageUrl }
        setTeam(data || []);
      } catch (err) {
        console.error("Failed to fetch team:", err);
      }
    };

    fetchTeam();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen py-16 px-4 flex flex-col justify-center items-center"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white z-10">
        Our Team
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl w-full relative z-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="rounded-2xl p-4 border bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-2xl border-gray-200 dark:border-white/20 hover:shadow-md transition-shadow duration-300"
          >
            <div className="md:w-78 md:h-85 mb-4 rounded-lg overflow-hidden mx-auto">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={200}
                height={260}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="font-bold text-xl text-center text-gray-900 dark:text-white">
              {member.name}
            </h3>
            <p className="text-sm text-center text-gray-600 dark:text-gray-300 mb-4">
              {member.role}
            </p>

            <div className="flex justify-center gap-4 text-indigo-600 dark:text-indigo-400 text-xl">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="ri-linkedin-fill"></i>
                </a>
              )}
              {member.instagram && (
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="ri-instagram-fill"></i>
                </a>
              )}
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
