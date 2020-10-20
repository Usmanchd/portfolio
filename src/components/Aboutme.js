import React from 'react';
import Headings from './Headings';

export default function Aboutme() {
  return (
    <section id="one">
      <Headings animation="fade-down" text="Usman" className="usman" />

      <Headings
        animation="fade-down-right"
        text="WebDev"
        className="webdev"
        duration="2000"
        delay="700"
      />

      <div className="aboutme">
        <span
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <header className="major">
            <h2>About Me!</h2>
          </header>
          <p>
            My name is Usman and I am Self taught Mern stack
            <br /> I am a Professional Full stack developer working in this
            field for more than 2 years. I have worked on many full stack
            application
          </p>
        </span>
        {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul> */}
        <img
          src="images/about_me.svg"
          alt="about me"
          width="100%"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        />
      </div>
    </section>
  );
}
