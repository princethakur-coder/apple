import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../data/products';

const CategoryPage: React.FC = () => {
  const location = useLocation();
  const category = location.pathname.slice(1); // Remove leading slash
  const products = getProductsByCategory(category || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const categoryTitles: { [key: string]: string } = {
    'store': 'Apple Store',
    'mac': 'Mac',
    'ipad': 'iPad',
    'iphone': 'iPhone',
    'watch': 'Apple Watch',
    'airpods': 'AirPods',
    'tv-home': 'TV & Home',
    'entertainment': 'Entertainment',
    'accessories': 'Accessories',
    'support': 'Support'
  };

  const categoryDescriptions: { [key: string]: string } = {
    'store': 'Discover the full range of Apple products and accessories.',
    'mac': 'Supercharged by Apple silicon. Built for any task.',
    'ipad': 'Touch, draw, and type on one magical device.',
    'iphone': 'The ultimate iPhone experience.',
    'watch': 'The future of health is on your wrist.',
    'airpods': 'Wireless headphones. Effortless setup.',
    'tv-home': 'Entertainment and smart home in perfect harmony.',
    'entertainment': 'Movies, music, games, and more.',
    'accessories': 'Make the most of your Apple devices.',
    'support': 'Get help with your Apple products.'
  };

  if (!category || !categoryTitles[category]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sf-pro font-semibold text-apple-gray mb-4">
            Category Not Found
          </h1>
          <p className="text-xl text-apple-gray-light">
            The category you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-gray-lighter">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-16">
        {/* Category Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-sf-pro font-semibold text-apple-gray mb-4">
            {categoryTitles[category]}
          </h1>
          <p className="text-xl font-sf-pro text-apple-gray-light max-w-2xl mx-auto">
            {categoryDescriptions[category]}
          </p>
        </motion.div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-sf-pro font-medium text-apple-gray mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-apple-gray-light">
              Products in this category will be available soon.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;