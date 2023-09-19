import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Archiving from './components/Archiving';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Archiving />
    </>
  );
};

export default App;
