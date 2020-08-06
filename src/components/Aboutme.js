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
            My name is Usman and I am Self taught Mern stack, react Native
            Developer
            <br /> Highly motivated, self-starting web developer seeking to
            launch a career building web application and services
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
