import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../types/product';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const searchProducts = () => {
      setIsLoading(true);
      
      if (!query.trim()) {
        setSearchResults([]);
        setIsLoading(false);
        return;
      }

      const results = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.tagline.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );

      // Simulate search delay
      setTimeout(() => {
        setSearchResults(results);
        setIsLoading(false);
      }, 500);
    };

    searchProducts();
  }, [query]);

  return (
    <div className="min-h-screen bg-apple-gray-lighter">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-16">
        {/* Search Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Search className="w-8 h-8 text-apple-blue" />
            <h1 className="text-4xl lg:text-5xl font-sf-pro font-semibold text-apple-gray">
              Search Results
            </h1>
          </div>
          {query && (
            <p className="text-xl text-apple-gray-light">
              {isLoading ? 'Searching...' : `${searchResults.length} results for "${query}"`}
            </p>
          )}
        </motion.div>

        {/* Search Results */}
        {isLoading ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="h-64 bg-gray-200 animate-pulse" />
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                </div>
              </div>
            ))}
          </motion.div>
        ) : searchResults.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {searchResults.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </motion.div>
        ) : query ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-sf-pro font-medium text-apple-gray mb-4">
              No results found
            </h2>
            <p className="text-lg text-apple-gray-light mb-8">
              Try searching with different keywords or browse our categories.
            </p>
            <motion.a
              href="/store"
              className="bg-apple-blue hover:bg-apple-blue-dark text-white px-8 py-3 rounded-full font-sf-pro font-medium transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse All Products
            </motion.a>
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-sf-pro font-medium text-apple-gray mb-4">
              Start your search
            </h2>
            <p className="text-lg text-apple-gray-light">
              Enter a search term to find products.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;