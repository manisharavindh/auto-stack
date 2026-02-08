import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import Inventory from './components/Inventory';
import Experience from './components/Experience';
import Footer from './components/Footer';
import InventoryPage from './InventoryPage';
import Contact from './components/Contact';
import ModelShowcase from './components/ModelShowcase';
import FloatingContact from './components/FloatingContact';
import Services from './components/Services';
import CarDetailsPage from './pages/CarDetailsPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash, scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there IS a hash, try to scroll to it
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <Inventory />
    <BrandMarquee />
    <ModelShowcase />
    <Services />
    <Experience />
    <Contact />
    <Footer />
    {/* <FloatingContact /> */}
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventory/:id" element={<CarDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
