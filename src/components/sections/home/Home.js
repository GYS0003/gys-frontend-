"use client";

import React, { useEffect, useRef, useState } from 'react';
import Banner from './Banner';
import ServicesProvided from './ServicesProvided';
import KeyServices from './KeyServices';
import OurJourney from './OurJourney';
import CaseStudy from './CaseStudy';
import Testimonials from './Testimonials';
import NewsLetter from './NewsLetter';
import LetsTalk from './LetsTalk';
import Footer from '@/components/layout/footer/Footer';

const Home = () => {
  const containerRef = useRef(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (!container) return;

  //   const handleWheel = (e) => {
  //     e.preventDefault();
      
  //     if (isScrollingRef.current) return;
  //     isScrollingRef.current = true;

  //     const direction = Math.sign(e.deltaY);
  //     const currentScroll = container.scrollTop;
  //     const windowHeight = window.innerHeight;
  //     const currentSection = Math.round(currentScroll / windowHeight);
      
  //     // Calculate target section with boundary checks
  //     let targetSection = currentSection + direction;
  //     targetSection = Math.max(0, Math.min(targetSection, container.children.length - 1));
      
  //     // Only scroll if we're moving to a new section
  //     if (targetSection !== currentSection) {
  //       container.scrollTo({
  //         top: targetSection * windowHeight,
  //         behavior: 'smooth'
  //       });
  //     }

  //     // Clear any existing timeout
  //     if (scrollTimeoutRef.current) {
  //       clearTimeout(scrollTimeoutRef.current);
  //     }

  //     // Set timeout to reset scrolling state
  //     scrollTimeoutRef.current = setTimeout(() => {
  //       isScrollingRef.current = false;
  //     }, 400); // Reduced timeout for quicker response
  //   };

  //   container.addEventListener('wheel', handleWheel, { passive: false });
    
  //   return () => {
  //     container.removeEventListener('wheel', handleWheel);
  //     if (scrollTimeoutRef.current) {
  //       clearTimeout(scrollTimeoutRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div
      // ref={containerRef}
      className="h-screen overflow-y-scroll "
      // style={{ scrollBehavior: 'smooth' }}
    >
      <section className="snap-start"><Banner /></section>
      <section className="snap-start"><ServicesProvided /></section>
      <section className="snap-start "><KeyServices /></section>
      <section className="snap-start "><OurJourney /></section>
      <section className="snap-start "><CaseStudy /></section>
      <section className="snap-start "><Testimonials /></section>
      <section className="snap-start "><NewsLetter /></section>
      <section className="snap-start "><LetsTalk /></section>
      <section className="snap-start "><Footer /></section>
    </div>
  );
};

export default Home;