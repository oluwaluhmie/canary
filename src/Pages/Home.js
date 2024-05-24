import React, { useState, useEffect } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Home/Hero';
import Products from './Home/Products';
import DiscoverCanary from './Home/DiscoverCanary';
import BusinessGrowth from './Home/BusinessGrowth';
import Investor from './Home/Investor';
import Guidance from './Home/Guidance';
import CTASection from './Home/CTASection';

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
