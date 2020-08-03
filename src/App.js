import React from 'react';
import { portfolioItems } from './data/data';

function App() {
  return (
    <div>
      <header id="header">
        <div className="inner">
          <span className="image avatar">
            <img src="images/avatar.jpg" alt="" />
          </span>
          <h1>
            <strong>Hey, My name is Usman</strong>
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

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>About Me!</h2>
          </header>
          <p>
            My name is Usman and I am Self taught Mern stack, react Native
            Developer
            <br /> Highly motivated, self-starting web developer seeking to
            launch a career building web application and services
          </p>
          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul> */}
        </section>

        <section id="two">
          <h2>My Portfolio</h2>
          <div className="row">
            {portfolioItems.map((portfolioItem) => {
              return (
                <article
                  className="col-6 col-12-xsmall col-md-offset-2 work-item card"
                  style={{
                    textAlign: 'center',
                    justifyContent: 'space-between',
                    border: '0px',
                  }}
                >
                  <img
                    src={portfolioItem.image}
                    alt={portfolioItem.projectName}
                    width="100%"
                    className="hovereffect"
                    // style={{ backgroundSize: 'cover' }}
                  />
                  <h2 style={{ textAlign: 'center', margin: '2px' }}>
                    <u> {portfolioItem.projectName} </u>
                  </h2>
                  <p>{portfolioItem.projectdescription}</p>
                  <span>
                    <a
                      href={portfolioItem.projectCode}
                      target="_blank"
                      className="brnone"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary mb-1 w-100"
                      >
                        Show Code
                      </button>
                    </a>
                    <a
                      href={portfolioItem.projectPage}
                      target="_blank"
                      className="brnone"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary mt-1 w-100"
                      >
                        Show Project
                      </button>
                    </a>
                  </span>
                </article>
              );
            })}
          </div>
        </section>

        <section id="one">
          <header className="major">
            <h2>Resume</h2>
          </header>
          <p></p>
          <ul className="actions">
            <li>
              <img src="CV/cv.jpg" width="464px" className="hovereffect" />
              <a href="CV/Resume.pdf" className="button">
                Download
              </a>
            </li>
          </ul>
        </section>

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
      </div>
    </div>
  );
}

export default App;
