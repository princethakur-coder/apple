import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroSection } from '../types/product';

interface HeroProps {
  hero: HeroSection;
  index: number;
}

const Hero: React.FC<HeroProps> = ({ hero, index }) => {
  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: hero.backgroundColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: index * 0.2 }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={hero.image}
          alt={hero.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-sf-pro font-semibold mb-4"
          style={{ color: hero.textColor }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {hero.title}
        </motion.h1>
        
        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl font-sf-pro font-normal mb-6 max-w-3xl mx-auto"
          style={{ color: hero.textColor }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {hero.subtitle}
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl font-sf-pro font-light mb-8 max-w-2xl mx-auto opacity-90"
          style={{ color: hero.textColor }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {hero.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/iphone-product"
              className="bg-apple-blue hover:bg-apple-blue-dark text-white px-8 py-3 rounded-full text-sm font-sf-pro font-medium transition-all duration-300 inline-block"
            >
              {hero.ctaText}
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ y: -2 }}
          >
            <Link
              to="/iphone-product"
              className="text-apple-blue hover:text-apple-blue-dark text-sm font-sf-pro font-medium border-b border-apple-blue hover:border-apple-blue-dark transition-all duration-300 inline-block"
            >
              Buy →
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;