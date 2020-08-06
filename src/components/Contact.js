import React from 'react';

export default function Contact() {
  return (
    <section id="three">
      <h2>Get In Touch</h2>
      <ul className="labeled-icons">
        {/* <li>
            <h3 className="icon solid fa-home">
              <span className="label">Address</span>
            </h3>
            1234 Somewhere Rd.
            <br />
            Nashville, TN 00000
            <br />
            United States
          </li> */}
        <li>
          <h3 className="icon solid fa-mobile-alt">
            <span className="label">Phone</span>
          </h3>
          0333-4381689
        </li>
        <li>
          <h3 className="icon solid fa-envelope">
            <span className="label">Email</span>
          </h3>
          <a>usman.aslam0701@gmail.com</a>
        </li>
      </ul>
    </section>
  );
}
