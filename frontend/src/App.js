import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/Background';
import ScrollToTopButton from './components/ScrollToTopButton';

import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/footer';

import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';

function MainApp() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <AnimatedBackground />
      <ScrollToTopButton />
      <main>
        <Home />
        <About />
        <Skills />
        <Education />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
