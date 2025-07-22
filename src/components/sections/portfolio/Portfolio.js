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
 

  return (
    <div
      className="h-screen overflow-y-scroll scrollbar-hide "
    >
       
      <Banner />
      <PortfolioSection />
      <AppDevelopmentSection />
      <WebDevelopmentSection />
      <Aiblockchain />
      <OurProductsSection />
      <Gallery />
      <LetsTalk />

     <Footer />

    </div>
  );
};

export default Portfolio;
