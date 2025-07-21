'use client';

import React, { useEffect, useRef } from 'react';
import Banner from './Banner'
import BreadCrumbs from '@/components/ui/BreadCrumbs';
import AboutGYS from '../aboutus/AboutGYS';
import WhoAreWe from '../aboutus/WhoAreWe'
import StatsSection from '../aboutus/StatsSection';
import OurVision from '../aboutus/OurVision';
import LetsTalk from '../home/LetsTalk';
import Footer from '@/components/layout/footer/Footer';
import OurTeam from '../aboutus/OurTeam';
import ServicesWeOffer from './ServicesWeOffer';
import LetsCreateTogether from './LetsCreateTogether';
import SoftwareDevelopmentProcess from './SoftwareDevelopmentProcess';
import ThinkBuildGrow from './ThinkBuildGrow';
import WhyChooseUs from './WhyChooseUs';
const OurServices = () => {
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
    <section
    ref={containerRef}
    id='services'
    className="h-screen overflow-y-scroll scroll-mt-24 scrollbar-hide snap-y snap-mandatory scroll-smooth"
    style={{ scrollBehavior: 'smooth' }}
  >
       <div className="absolute inset-0 z-0">
    <div className="w-full h-full bg-white dark:bg-black bg-gradient-dark-figma " />
  </div>
        {/* <BreadCrumbs/> */}
        <section className="snap-start"><Banner /></section>
        <section className="snap-start"><ServicesWeOffer/></section>
        <section className="snap-start"><SoftwareDevelopmentProcess/></section>
         <section className="snap-start">  <ThinkBuildGrow/></section>
        <section className="snap-start">  <WhyChooseUs/></section>
        <section className="snap-start"><LetsCreateTogether/></section>
        <section className="snap-start"><Footer/></section>
    </section>
  )
}

export default OurServices