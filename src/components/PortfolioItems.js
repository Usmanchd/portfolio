import React from 'react';
import PortfolioItem from './PortfolioItem';
import Headings from './Headings';
import { portfolioItems } from '../data/data';

export default function PortfolioItems() {
  return (
    <section id="two" style={{ paddingTop: '8px' }}>
      <span className="portfolio" style={{ paddingBottom: '34px' }}>
        <Headings
          animation="fade-up-left"
          text="Reactjs"
          className="react"
          delay="0"
        />
        <Headings
          animation="fade-left"
          text="Node"
          className="node"
          delay="50"
        />
        <Headings
          animation="zoom-in"
          text="Express"
          className="express"
          delay="90"
        />
        <Headings
          animation="fade-right"
          text="mongodb"
          className="mongodb"
          delay="30"
        />

        <div
          data-aos="fade-down-right"
          data-aos-duration="1000"
          data-aos-offset="250"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          style={{
            zIndex: '1',
          }}
        >
          <h2>
            My Por<span style={{ color: 'white' }}>tfolio</span>
          </h2>
        </div>
        <img
          src="images/portfolio.svg"
          alt="portfolio"
          width="65%"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="230"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        />
      </span>
      <PortfolioItem portfolioItems={portfolioItems} />
    </section>
  );
}
