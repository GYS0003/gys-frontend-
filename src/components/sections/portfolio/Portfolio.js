"use client";

import React, { useEffect, useRef } from 'react';
import Banner from './Banner';

import Footer from '@/components/layout/footer/Footer';
import PortfolioSection from './PortfolioSection';
import AppDevelopmentSection from './AppDevelopmentSection';
import WebDevelopmentSection from './WebDevelopmentSection';
import Aiblockchain from './Aiblockchain';
import OurProductsSection from './OurProductsSection';
import Gallery from '../aboutus/Gallary';
import LetsTalk from '../aboutus/LetsTalk';

const Portfolio = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling) return;
      isScrolling = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      const sectionHeight = window.innerHeight;
      const scrollTo = container.scrollTop + direction * sectionHeight;

      container.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });

      setTimeout(() => {
        isScrolling = false;
      }, 800); // Custom duration (ms)
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll scrollbar-hide snap-y snap-mandatory scroll-smooth"
      style={{ scrollBehavior: 'smooth' }}
    >
         {/* <div className="absolute inset-0 z-0">
    <div className="w-full h-full bg-white dark:bg-black bg-gradient-dark-figma " />
  </div> */}
      <section className="snap-start"><Banner /></section>
      <section className="snap-start"><PortfolioSection /></section>
      <section className="snap-start"><AppDevelopmentSection /></section>
      <section className="snap-start"><WebDevelopmentSection /></section>
      <section className="snap-start"><Aiblockchain /></section>
      <section className="snap-start"><OurProductsSection /></section>
      <section className="snap-start"><Gallery /></section>
      <section className="snap-start"><LetsTalk /></section>

      <section className="snap-start"><Footer /></section>

    </div>
  );
};

export default Portfolio;
