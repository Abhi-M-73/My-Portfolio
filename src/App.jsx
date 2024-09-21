import React from 'react';
import Header from './Components/Header';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import About from './Components/About';
import Home from './Components/Home';
import LocomotiveScroll from 'locomotive-scroll';

export default function App() {

  const scroll = new LocomotiveScroll();

  return (
    <div className="App">
      <Header />
      <main className="mt-16"> {/* To offset the fixed header */}
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}