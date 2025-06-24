import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Lock, Truck, Banknote } from 'lucide-react';
import { useStore } from '../store/useStore';
import { ShippingAddress } from '../types/product';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, placeOrder } = useStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash_on_delivery'>('card');
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));

    const orderId = placeOrder(shippingAddress, paymentMethod);
    setIsProcessing(false);
    navigate(`/order-confirmation/${orderId}`);
  };

  const isFormValid = () => {
    return Object.values(shippingAddress).every(value => value.trim() !== '');
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
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
            Checkout
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Information */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <Truck className="w-6 h-6 text-apple-blue" />
                  <h2 className="text-2xl font-sf-pro font-semibold text-apple-gray">
                    Shipping Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-sf-pro font-medium text-apple-gray mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={shippingAddress.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sf-pro font-medium text-apple-gray mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={shippingAddress.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sf-pro font-medium text-apple-gray mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={shippingAddress.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sf-pro font-medium text-apple-gray mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={shippingAddress.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-sf-pro font-medium text-apple-gray mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={shippingAddress.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sf-pro font-medium text-apple-gray mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={shippingAddress.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sf-pro font-medium text-apple-gray mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={shippingAddress.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sf-pro font-medium text-apple-gray mb-2">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={shippingAddress.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sf-pro font-medium text-apple-gray mb-2">
                      Country
                    </label>
                    <select
                      name="country"
                      value={shippingAddress.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all"
                    >
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-2xl font-sf-pro font-semibold text-apple-gray mb-6">
                  Payment Method
                </h2>
                
                <div className="space-y-4 mb-6">
                  <motion.div
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      paymentMethod === 'card' ? 'border-apple-blue bg-blue-50' : 'border-gray-200'
                    }`}
                    onClick={() => setPaymentMethod('card')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value as 'card' | 'cash_on_delivery')}
                        className="text-apple-blue"
                      />
                      <CreditCard className="w-5 h-5 text-apple-blue" />
                      <span className="font-sf-pro font-medium text-apple-gray">Credit/Debit Card</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      paymentMethod === 'cash_on_delivery' ? 'border-apple-blue bg-blue-50' : 'border-gray-200'
                    }`}
                    onClick={() => setPaymentMethod('cash_on_delivery')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash_on_delivery"
                        checked={paymentMethod === 'cash_on_delivery'}
                        onChange={(e) => setPaymentMethod(e.target.value as 'card' | 'cash_on_delivery')}
                        className="text-apple-blue"
                      />
                      <Banknote className="w-5 h-5 text-apple-blue" />
                      <span className="font-sf-pro font-medium text-apple-gray">Cash on Delivery</span>
                    </div>
                  </motion.div>
                </div>

                {/* Card Payment Form */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-sf-pro font-medium text-apple-gray mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-sf-pro font-medium text-apple-gray mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-sf-pro font-medium text-apple-gray mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-sf-pro font-medium text-apple-gray mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mt-4 text-sm text-apple-gray-light">
                      <Lock className="w-4 h-4" />
                      <span>Your payment information is secure and encrypted</span>
                    </div>
                  </div>
                )}

                {/* Cash on Delivery Info */}
                {paymentMethod === 'cash_on_delivery' && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 text-yellow-800">
                      <Banknote className="w-5 h-5" />
                      <span className="font-sf-pro font-medium">Cash on Delivery</span>
                    </div>
                    <p className="text-sm text-yellow-700 mt-2">
                      You will pay in cash when your order is delivered to your address. Please keep the exact amount ready.
                    </p>
                  </div>
                )}
              </div>

              {/* Place Order Button */}
              <motion.button
                type="submit"
                disabled={!isFormValid() || isProcessing}
                className="w-full bg-apple-blue hover:bg-apple-blue-dark text-white py-4 px-6 rounded-full text-lg font-sf-pro font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isFormValid() && !isProcessing ? 1.02 : 1 }}
                whileTap={{ scale: isFormValid() && !isProcessing ? 0.98 : 1 }}
              >
                {isProcessing ? 'Processing...' : `Place Order - ${formatPrice(getCartTotal() * 1.18)}`}
              </motion.button>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="text-2xl font-sf-pro font-semibold text-apple-gray mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={`${item.product.id}-${item.selectedColor}`} className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-apple-gray-lighter rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sf-pro font-medium text-apple-gray">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-apple-gray-light">
                        {item.selectedColor} × {item.quantity}
                      </p>
                    </div>
                    <span className="font-sf-pro font-medium text-apple-gray">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-apple-gray-light">
                  <span>Subtotal</span>
                  <span>{formatPrice(getCartTotal())}</span>
                </div>
                <div className="flex justify-between text-apple-gray-light">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-apple-gray-light">
                  <span>Tax (18%)</span>
                  <span>{formatPrice(getCartTotal() * 0.18)}</span>
                </div>
                <div className="flex justify-between text-xl font-sf-pro font-semibold text-apple-gray border-t border-gray-200 pt-3">
                  <span>Total</span>
                  <span>{formatPrice(getCartTotal() * 1.18)}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;