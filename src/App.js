import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolio from './Portfolio/Portfolio';
AOS.init();

function App() {
  return <Portfolio />;
}

export default App;
