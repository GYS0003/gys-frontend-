'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import GradientButton from '@/components/ui/GradientButton';
import { motion } from 'framer-motion';
import { getServices } from '@/services/apis';
import  Link from 'next/link';
import BlurText from '@/components/ui/Animations/BannerAnimation';

const KeyServices = () => {
  const [services, setServices] = useState([]);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef();

  // 🔽 Fetch services from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServices(); // Must return [{ title, description, imageUrl }]
        const duplicated = [...data, ...data]; // Duplicate for infinite scroll
        setServices(duplicated);
      } catch (err) {
        console.error('Failed to fetch services:', err);
      }
    };

    fetchData();
  }, []);

  // 🔁 Infinite auto scroll
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
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused, isDragging]);

  // 🖱️ Drag handlers
  const handleMouseDown = (e) => {
    const container = containerRef.current;
    if (!container) return;

    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    containerRef.current.style.scrollBehavior = 'smooth';
  };

  return (
    <section className="relative  z-10  px-4 text-gray-900 dark:text-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8"
      >
          <BlurText
            text=" Key Services We Provide"
            delay={350}
            animateBy="words"
            direction="top"
            className="text-xl p-2 sm:text-2xl text-wrap md:text-2xl lg:text-3xl font-semibold text-center"
          />
        
      </motion.h2>

      <div
        ref={containerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide cursor-grab w-full touch-pan-x"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
          userSelect: 'none',
        }}
      >
        {services.map((item, idx) => (
          <div key={idx} className="w-[250px] sm:w-[300px] md:w-[350px] flex-shrink-0 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl  border border-gray-200 dark:border-white/10 transition-shadow duration-300">
            <Link
              href={'/services#services'}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-44 sm:h-52 object-cover p-4 rounded-4xl"
              />
              <div className="px-4 pb-4 flex flex-col justify-between h-[220px]">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl text-center font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-sm text-center">{item.description}</p>
                </div>
                <div className="mt-3 flex justify-center">
                  <GradientButton as='button' >
                    Read more
                  </GradientButton>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyServices;
