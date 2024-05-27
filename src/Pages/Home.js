import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Home/Hero';
import Products from './Home/Products';
import DiscoverCanary from './Home/DiscoverCanary';
import BusinessGrowth from './Home/BusinessGrowth';
import Investor from './Home/Investor';
import Guidance from './Home/Guidance';
import CTASection from './CTASection';

const Home = () => {
  return (
    <div>
      <Header />
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
