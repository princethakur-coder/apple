import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useStore } from '../store/useStore';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useStore();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-apple-gray-lighter flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ShoppingBag className="w-24 h-24 text-apple-gray-light mx-auto mb-6" />
          <h1 className="text-4xl font-sf-pro font-semibold text-apple-gray mb-4">
            Your cart is empty
          </h1>
          <p className="text-xl text-apple-gray-light mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/store"
              className="bg-apple-blue hover:bg-apple-blue-dark text-white px-8 py-3 rounded-full font-sf-pro font-medium transition-all duration-300 inline-block"
            >
              Start Shopping
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-gray-lighter">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-sf-pro font-semibold text-apple-gray mb-8">
            Shopping Cart
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={`${item.product.id}-${item.selectedColor}`}
                className="bg-white rounded-2xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-6">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-apple-gray-lighter rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-sf-pro font-semibold text-apple-gray mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-apple-gray-light mb-2">
                      Color: {item.selectedColor}
                    </p>
                    <p className="text-lg font-sf-pro font-medium text-apple-gray">
                      ${item.product.price}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <motion.button
                      onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-apple-gray hover:border-apple-blue transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Minus className="w-4 h-4" />
                    </motion.button>
                    <span className="text-lg font-sf-pro font-medium text-apple-gray w-8 text-center">
                      {item.quantity}
                    </span>
                    <motion.button
                      onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-apple-gray hover:border-apple-blue transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Remove Button */}
                  <motion.button
                    onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Trash2 className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-sm h-fit"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-sf-pro font-semibold text-apple-gray mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-apple-gray-light">
                <span>Subtotal</span>
                <span>${getCartTotal()}</span>
              </div>
              <div className="flex justify-between text-apple-gray-light">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-apple-gray-light">
                <span>Tax</span>
                <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-xl font-sf-pro font-semibold text-apple-gray">
                  <span>Total</span>
                  <span>${(getCartTotal() * 1.08).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <motion.button
              onClick={handleCheckout}
              className="w-full bg-apple-blue hover:bg-apple-blue-dark text-white py-4 px-6 rounded-full text-lg font-sf-pro font-medium transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Proceed to Checkout
            </motion.button>

            <motion.div
              className="mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/store"
                className="w-full border border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white py-3 px-6 rounded-full font-sf-pro font-medium transition-all duration-300 text-center block"
              >
                Continue Shopping
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;