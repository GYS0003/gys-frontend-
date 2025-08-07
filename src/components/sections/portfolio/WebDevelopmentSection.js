"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Clothify from "@/assets/AppDevelopment/Clothify.jpg";
import HomeStay from "@/assets/AppDevelopment/HomeStay.webp";
import AD2 from "@/assets/AppDevelopment/AD2.png";
import RT from '@/assets/WebDevelopment/riverTiger.png'
import Mitroz from '@/assets/WebDevelopment/Mitroz.png';
import Stay from '@/assets/WebDevelopment/stay.png';
import JW from '@/assets/WebDevelopment/jewllery.png'
import clothing from '@/assets/WebDevelopment/Clothing.png';
import taxi from '@/assets/WebDevelopment/taxi.png'
import gummak from "@/assets/WebDevelopment/gummak.png";
import fashion from '@/assets/WebDevelopment/fashion.png';
const projects = [
  {
    title: "Mitroz Restaurant",
    description:
      "A digital restaurant platform showcasing menus, managing online orders, and enabling table reservations with real-time updates.",
    image: Mitroz,
    gradient: "from-orange-400 to-orange-500",
  },
  {
    title: "Hotel Booking",
    description:
      "A user-friendly hotel booking platform for seamless reservations, browsing room details, and managing check-ins with secure payments.",
    image: Stay,
    gradient: "from-purple-500 to-violet-600",
  },
  {
    title: "Jewelry Website",
    description:
      "An elegant online jewelry store offering curated collections with high-resolution images, secure checkout, and virtual try-on features.",
    image: JW,
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    title: "River Tiger",
    description:
      "An elegant online jewelry store offering curated collections with high-resolution images, secure checkout, and virtual try-on features.",
    image: RT,
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    title: "Clothes Website",
    description:
      "A fashion e-commerce site for men and women, featuring seasonal collections, smart filtering, and a responsive design with easy checkout.",
    image: clothing,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Taxi Application",
    description:
      "A ride-booking app with real-time tracking, driver ratings, fare estimates, and secure in-app payments for both daily and long-distance travel.",
    image: taxi,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Ghumakad Travel Booking",
    description:
      "A travel booking platform for curated tour packages and adventures across India. Supports itinerary planning, instant booking, and support chat.",
    image: gummak,
    gradient: "from-yellow-400 to-amber-500",
  },
  {
    title: "Fashion Clothing",
    description:
      "A trendy clothing platform focused on streetwear and lifestyle fashion. Includes lookbooks, influencer collaborations, and easy size guides.",
    image: fashion,
    gradient: "from-yellow-400 to-amber-500",
  },
];


const WebDevelopmentSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef();


   // 🔽 Auto-scroll
   useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      if (!isPaused && !isDragging) {
        container.scrollLeft += 0.5;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused, isDragging]);

  // 🔽 Drag-to-scroll handlers
  const handleMouseDown = (e) => {
    const container = containerRef.current;
    if (!container) return;

    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.scrollBehavior = "auto";
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "smooth";
    }
  };

  return (
    <section
      ref={sectionRef}
      id="web-development"
      className="relative z-10 w-full overflow-hidden py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
          >
            Web Development Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300 md:text-lg"
          >
            We build innovative web applications tailored to your needs—blending
            functionality, speed, and beautiful design.
          </motion.p>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-8 relative z-10 overflow-x-auto scrollbar-hide"
            // onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              // userSelect: 'none',
              // WebkitOverflowScrolling: 'touch',
              // scrollBehavior: 'smooth',
            }}
            aria-label="Web Development Projects"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`group snap-start flex-shrink-0 rounded-2xl p-4 bg-gradient-to-r ${project.gradient} text-white w-[85%] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]`}
                
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="relative select-none aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-fit transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="mt-4 select-none text-lg font-bold md:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm select-none text-white/90 md:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentSection;