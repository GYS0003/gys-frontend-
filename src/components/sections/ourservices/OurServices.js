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

  return (
    <section
    id='services'
    className="h-screen overflow-y-scroll scroll-mt-24 scrollbar-hide "
  >
        <Banner />
        <ServicesWeOffer/>
        <SoftwareDevelopmentProcess/>
          <ThinkBuildGrow/>
          <WhyChooseUs/>
        <LetsCreateTogether/>
        <Footer/>
    </section>
  )
}

export default OurServices