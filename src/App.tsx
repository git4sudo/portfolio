import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import EducationWork from './components/EducationWork';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <EducationWork />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;