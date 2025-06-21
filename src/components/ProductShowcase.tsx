import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductShowcase: React.FC = () => {
  const categories = [
    { id: 'iphone', name: 'iPhone', products: products.filter(p => p.category === 'iphone') },
    { id: 'mac', name: 'Mac', products: products.filter(p => p.category === 'mac') },
    { id: 'ipad', name: 'iPad', products: products.filter(p => p.category === 'ipad') },
    { id: 'watch', name: 'Apple Watch', products: products.filter(p => p.category === 'watch') },
    { id: 'airpods', name: 'AirPods', products: products.filter(p => p.category === 'airpods') },
  ];

  return (
    <section className="py-16 lg:py-24 bg-apple-gray-lighter">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-sf-pro font-semibold text-apple-gray mb-4">
            Explore our products
          </h2>
          <p className="text-xl font-sf-pro text-apple-gray-light max-w-2xl mx-auto">
            Discover the latest innovations designed to help you create, connect, and achieve more than ever.
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          category.products.length > 0 && (
            <motion.div
              key={category.id}
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl lg:text-3xl font-sf-pro font-medium text-apple-gray mb-8"
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {category.name}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )
        ))}

        {/* View All Products CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/products"
            className="inline-flex items-center bg-apple-gray hover:bg-apple-gray-dark text-white px-8 py-4 rounded-full text-lg font-sf-pro font-medium transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View all products
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;