import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import { heroSections } from '../data/products';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Sections */}
      {heroSections.map((hero, index) => (
        <Hero key={hero.id} hero={hero} index={index} />
      ))}
      
      {/* Product Showcase */}
      <ProductShowcase />
    </>
  );
};

export default HomePage;