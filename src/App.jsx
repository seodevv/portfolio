import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Archiving from './components/Archiving';
import Projects from './components/Projects';
import Career from './components/Career';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Archiving />
      <Projects />
      <Career />
    </>
  );
};

export default App;
