import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Aboutme from '../components/Aboutme';
import PortfolioItems from '../components/PortfolioItems';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import dottedgrid from '../data/dottedgrid.svg';

export default function Portfolio() {
  const prevScrollY = useRef(0);
  const [scrollY, setscrollY] = useState(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      setscrollY(currentScrollY);
      // console.log(goingUp, currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  return (
    <div>
      <Header />
      <div id="main">
        <Aboutme />
        <PortfolioItems />
        <Resume />
        <Contact />
        <img
          src={dottedgrid}
          alt="svg"
          style={{
            position: 'absolute',
            right: '772px',
            content: '',
            width: '174px',
            height: '170px',
            top: '430px',
            zIndex: '-99',
            opacity: '0.09',
            transform: `rotate(${prevScrollY.current / 8}deg)`,
          }}
        />
      </div>
    </div>
  );
}
