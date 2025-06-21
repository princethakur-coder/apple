import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { getProductById } from '../data/products';
import { useStore } from '../store/useStore';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(id || '');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useStore((state) => state.addToCart);

  React.useEffect(() => {
    if (product && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sf-pro font-semibold text-apple-gray mb-4">
            Product Not Found
          </h1>
          <p className="text-xl text-apple-gray-light mb-8">
            The product you're looking for doesn't exist.
          </p>
          <motion.button
            onClick={() => navigate('/')}
            className="bg-apple-blue hover:bg-apple-blue-dark text-white px-8 py-3 rounded-full font-sf-pro font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go Home
          </motion.button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedColor && product.inStock) {
      addToCart(product, selectedColor, quantity);
      // Show success message or redirect to cart
      navigate('/cart');
    }
  };

  const getColorStyle = (color: string) => {
    return {
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
    };
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square bg-apple-gray-lighter rounded-2xl overflow-hidden">
              <img
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-apple-blue' : 'border-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Product Title and Price */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-sf-pro font-semibold text-apple-gray mb-2">
                {product.name}
              </h1>
              <p className="text-xl font-sf-pro text-apple-gray-light mb-4">
                {product.tagline}
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-sf-pro font-medium text-apple-gray">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl font-sf-pro text-apple-gray-light line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-apple-gray-light">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-lg font-sf-pro text-apple-gray-light leading-relaxed">
              {product.description}
            </p>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-sf-pro font-semibold text-apple-gray mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="flex items-center text-apple-gray-light">
                    <div className="w-2 h-2 bg-apple-blue rounded-full mr-3" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-sf-pro font-semibold text-apple-gray mb-3">
                Color - {selectedColor}
              </h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <motion.button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-4 ${
                      selectedColor === color ? 'border-apple-blue' : 'border-gray-200'
                    }`}
                    style={getColorStyle(color)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-sf-pro font-semibold text-apple-gray mb-3">
                Quantity
              </h3>
              <div className="flex items-center space-x-4">
                <motion.button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-apple-gray hover:border-apple-blue transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  -
                </motion.button>
                <span className="text-lg font-sf-pro font-medium text-apple-gray w-8 text-center">
                  {quantity}
                </span>
                <motion.button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-apple-gray hover:border-apple-blue transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  +
                </motion.button>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className={`font-sf-pro ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <motion.button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-apple-blue hover:bg-apple-blue-dark text-white py-4 px-8 rounded-full text-lg font-sf-pro font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                whileHover={{ scale: product.inStock ? 1.02 : 1 }}
                whileTap={{ scale: product.inStock ? 0.98 : 1 }}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </motion.button>
              
              <div className="flex space-x-4">
                <motion.button
                  className="flex-1 border border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white py-3 px-6 rounded-full font-sf-pro font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Heart className="w-4 h-4" />
                  <span>Wishlist</span>
                </motion.button>
                <motion.button
                  className="flex-1 border border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white py-3 px-6 rounded-full font-sf-pro font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </motion.button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center space-x-3 text-apple-gray-light">
                <Truck className="w-5 h-5" />
                <span>Free delivery on orders over $35</span>
              </div>
              <div className="flex items-center space-x-3 text-apple-gray-light">
                <Shield className="w-5 h-5" />
                <span>1-year limited warranty</span>
              </div>
              <div className="flex items-center space-x-3 text-apple-gray-light">
                <RotateCcw className="w-5 h-5" />
                <span>14-day return policy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;