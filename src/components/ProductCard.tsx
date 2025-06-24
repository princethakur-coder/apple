import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
          {/* Product Image */}
          <div className="relative h-64 bg-apple-gray-lighter overflow-hidden">
            {product.isNew && (
              <motion.div
                className="absolute top-4 left-4 bg-apple-blue text-white text-xs font-sf-pro font-medium px-3 py-1 rounded-full z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                New
              </motion.div>
            )}
            {product.originalPrice && (
              <motion.div
                className="absolute top-4 right-4 bg-red-500 text-white text-xs font-sf-pro font-medium px-3 py-1 rounded-full z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                Sale
              </motion.div>
            )}
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Product Info */}
          <div className="p-6">
            <motion.h3
              className="text-xl font-sf-pro font-semibold text-apple-gray mb-2 group-hover:text-apple-blue transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              {product.name}
            </motion.h3>
            
            <p className="text-sm font-sf-pro text-apple-gray-light mb-3 line-clamp-2">
              {product.tagline}
            </p>

            {/* Rating */}
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-apple-gray-light ml-2">
                {product.rating} ({product.reviews})
              </span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-sf-pro font-medium text-apple-gray">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm font-sf-pro text-apple-gray-light line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              <div className="flex space-x-1">
                {product.colors.slice(0, 4).map((color, idx) => (
                  <motion.div
                    key={idx}
                    className="w-4 h-4 rounded-full border-2 border-gray-200"
                    style={{
                      backgroundColor: color.toLowerCase().includes('black') ? '#000' :
                                     color.toLowerCase().includes('white') ? '#fff' :
                                     color.toLowerCase().includes('blue') ? '#0071e3' :
                                     color.toLowerCase().includes('red') ? '#ff3b30' :
                                     color.toLowerCase().includes('green') ? '#30d158' :
                                     color.toLowerCase().includes('pink') ? '#ff2d92' :
                                     color.toLowerCase().includes('yellow') ? '#ffd60a' :
                                     color.toLowerCase().includes('purple') ? '#af52de' :
                                     color.toLowerCase().includes('orange') ? '#ff9500' :
                                     color.toLowerCase().includes('gray') || color.toLowerCase().includes('grey') ? '#8e8e93' :
                                     color.toLowerCase().includes('silver') ? '#c7c7cc' :
                                     color.toLowerCase().includes('gold') ? '#ffcc02' :
                                     color.toLowerCase().includes('midnight') ? '#1d1d1f' :
                                     color.toLowerCase().includes('starlight') ? '#faf0e6' :
                                     '#86868b'
                    }}
                    whileHover={{ scale: 1.2 }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-4">
              <span className={`text-xs font-sf-pro ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="flex space-x-3">
              <motion.button
                className="flex-1 bg-apple-blue hover:bg-apple-blue-dark text-white text-sm font-sf-pro font-medium py-2 px-4 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!product.inStock}
              >
                Learn more
              </motion.button>
              <motion.button
                className="flex-1 border border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white text-sm font-sf-pro font-medium py-2 px-4 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!product.inStock}
              >
                Buy
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;