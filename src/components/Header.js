import React from 'react';

export default function Header() {
  return (
    <header id="header">
      <div className="inner">
        <span className="image avatar">
          <img src="images/avatar.jpg" alt="" />
        </span>
        <h1>
          <strong>Hey, My name is <span className='my-name'>Usman</span></strong>
        </h1>
        <h1>I am a Full Stack Web Developer</h1>
        <h1>
          <strong> Mern Stack, React Native</strong>
        </h1>
      </div>
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            {/* <li>
                <a href="#" className="icon brands fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li> */}
            <li>
              <a
                href="https://github.com/usmanchd"
                className="icon brands fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/usman.aslam.3950"
                className="icon brands fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            {/* <li>
                <a href="#" className="icon solid fa-envelope">
                  <span className="label">Email</span>
                </a>
              </li> */}
          </ul>
        </div>
      </footer>
    </header>
  );
}
