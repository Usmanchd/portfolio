import React from 'react';
import Header from '../components/Header';
import Aboutme from '../components/Aboutme';
import PortfolioItems from '../components/PortfolioItems';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

export default function Portfolio() {
  return (
    <div>
      <Header />
      <div id="main">
        <Aboutme />
        <PortfolioItems />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}
