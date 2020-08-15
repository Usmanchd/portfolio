import React from 'react';

export default function Resume() {
  return (
    <section id="one">
      <header className="major vine">
        <h2>Resume</h2>
      </header>
      <p></p>
      <ul className="actions">
        <li>
          <img src="CV/cv.jpg" width="464px" className="hovereffect" alt="CV"/>
          <a href="CV/Resume.pdf" className="button btn-outline-primary">
            Download
          </a>
        </li>
      </ul>
    </section>
  );
}
