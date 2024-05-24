import React, { useState, useEffect } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import Products from './Products';
import DiscoverCanary from './DiscoverCanary';
import BusinessGrowth from './BusinessGrowth';
import Investor from './Investor';
import Guidance from './Guidance';
import CTASection from './CTASection';

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Adjust the scroll threshold as needed
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showNavbar ? <Navbar /> : <Header />}
      <Hero />
      <Products />
      <DiscoverCanary />
      <BusinessGrowth />
      <Investor />
      <Guidance />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
