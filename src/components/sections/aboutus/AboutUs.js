'use client';

import React, { useEffect, useRef } from 'react';
import Banner from '../aboutus/Banner'
import BreadCrumbs from '@/components/ui/BreadCrumbs';
import AboutGYS from '../aboutus/AboutGYS';
import WhoAreWe from '../aboutus/WhoAreWe'
import StatsSection from '../aboutus/StatsSection';
import OurVision from '../aboutus/OurVision';
import Footer from '@/components/layout/footer/Footer';
import OurTeam from '../aboutus/OurTeam';
import Gallery from './Gallary';
import LetsTalk from './LetsTalk';
const AboutUs = () => {
 
  return (
    <div
      className="h-screen overflow-y-scroll scrollbar-hide"
    >
   
      <Banner />
      <AboutGYS />
      <WhoAreWe />
      <StatsSection />
      <OurVision />
      <Gallery />
      {/* <section className="snap-start">  <OurTeam /></section> */}
      <LetsTalk />
      <Footer />
    </div>
  )
}

export default AboutUs