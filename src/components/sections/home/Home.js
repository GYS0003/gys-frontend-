"use client";

import React from 'react';
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

  return (
    <div
      className="h-screen overflow-y-scroll "
    >
    <Banner />
    <ServicesProvided />
      <KeyServices />
      <OurJourney />
    <CaseStudy />
      <Testimonials />
      <NewsLetter />
      <LetsTalk />
      <Footer />
    </div>
  );
};

export default Home;