import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Truck, Calendar, CreditCard, Banknote, ArrowLeft } from 'lucide-react';
import { useStore } from '../store/useStore';

const OrderConfirmationPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const orders = useStore((state) => state.orders);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the order
  const order = orders.find(o => o.id === orderId);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-apple-gray-lighter flex items-center justify-center">
        <motion.div
          className="text-center max-w-md mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Package className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-4xl font-sf-pro font-semibold text-apple-gray mb-4">
            Order Not Found
          </h1>
          <p className="text-xl text-apple-gray-light mb-8">
            We couldn't find the order you're looking for. It may have been removed or the link is incorrect.
          </p>
          <div className="space-y-4">
            <motion.button
              onClick={() => navigate('/orders')}
              className="w-full bg-apple-blue hover:bg-apple-blue-dark text-white px-8 py-3 rounded-full font-sf-pro font-medium transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Orders
            </motion.button>
            <motion.button
              onClick={() => navigate('/')}
              className="w-full border border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white px-8 py-3 rounded-full font-sf-pro font-medium transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Go Home
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-gray-lighter">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-16">
        {/* Success Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>
          <h1 className="text-4xl lg:text-5xl font-sf-pro font-semibold text-apple-gray mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-apple-gray-light mb-6">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
          
          {/* Order ID Display */}
          <motion.div
            className="bg-white rounded-2xl px-8 py-6 inline-block shadow-sm border-2 border-green-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <p className="text-sm text-apple-gray-light mb-2">Order ID</p>
              <p className="text-2xl font-sf-pro font-bold text-apple-blue font-mono tracking-wider">
                {order.id}
              </p>
              <p className="text-sm text-apple-gray-light mt-2">
                Order placed on {formatDate(order.orderDate)}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Order Items */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <Package className="w-6 h-6 text-apple-blue" />
                <h2 className="text-2xl font-sf-pro font-semibold text-apple-gray">
                  Order Items ({order.items.length} {order.items.length === 1 ? 'item' : 'items'})
                </h2>
              </div>
              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <motion.div
                    key={`${item.product.id}-${item.selectedColor}`}
                    className="flex items-center space-x-4 p-4 bg-apple-gray-lighter rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
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
                        Color: {item.selectedColor}
                      </p>
                      <p className="text-sm text-apple-gray-light">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-sf-pro font-medium text-apple-gray">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                      <p className="text-sm text-apple-gray-light">
                        {formatPrice(item.product.price)} each
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Shipping Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <Truck className="w-6 h-6 text-apple-blue" />
                <h2 className="text-2xl font-sf-pro font-semibold text-apple-gray">
                  Shipping Information
                </h2>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-apple-gray-lighter rounded-lg">
                  <p className="font-medium text-apple-gray text-lg">
                    {order.shippingAddress.firstName} {order.shippingAddress.lastName}
                  </p>
                  <p className="text-apple-gray-light">{order.shippingAddress.address}</p>
                  <p className="text-apple-gray-light">
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                  </p>
                  <p className="text-apple-gray-light">{order.shippingAddress.country}</p>
                  <div className="pt-3 border-t border-gray-200 mt-3">
                    <p className="text-sm text-apple-gray-light">
                      <span className="font-medium">Email:</span> {order.shippingAddress.email}
                    </p>
                    <p className="text-sm text-apple-gray-light">
                      <span className="font-medium">Phone:</span> {order.shippingAddress.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                {order.paymentMethod === 'card' ? (
                  <CreditCard className="w-6 h-6 text-apple-blue" />
                ) : (
                  <Banknote className="w-6 h-6 text-apple-blue" />
                )}
                <h2 className="text-2xl font-sf-pro font-semibold text-apple-gray">
                  Payment Method
                </h2>
              </div>
              <div className="p-4 bg-apple-gray-lighter rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  {order.paymentMethod === 'card' ? (
                    <>
                      <CreditCard className="w-5 h-5 text-apple-gray-light" />
                      <span className="text-apple-gray font-medium">Credit/Debit Card</span>
                    </>
                  ) : (
                    <>
                      <Banknote className="w-5 h-5 text-apple-gray-light" />
                      <span className="text-apple-gray font-medium">Cash on Delivery</span>
                    </>
                  )}
                </div>
                {order.paymentMethod === 'cash_on_delivery' && (
                  <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800 font-medium">
                      💰 Amount to pay on delivery: {formatPrice(order.total * 1.18)}
                    </p>
                    <p className="text-sm text-yellow-700 mt-1">
                      Please keep the exact amount ready for a smooth delivery experience.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Order Summary & Status */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Order Status */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-6 h-6 text-apple-blue" />
                <h2 className="text-2xl font-sf-pro font-semibold text-apple-gray">
                  Order Status
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-apple-gray-lighter rounded-lg">
                  <span className="text-apple-gray-light">Order Date</span>
                  <span className="font-sf-pro font-medium text-apple-gray">
                    {formatDate(order.orderDate)}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-apple-gray-lighter rounded-lg">
                  <span className="text-apple-gray-light">Status</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-sf-pro font-medium">
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-apple-gray-lighter rounded-lg">
                  <span className="text-apple-gray-light">Estimated Delivery</span>
                  <span className="font-sf-pro font-medium text-apple-gray">
                    {order.estimatedDelivery}
                  </span>
                </div>
              </div>
            </div>

            {/* Order Total */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-sf-pro font-semibold text-apple-gray mb-6">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between text-apple-gray-light p-3 bg-apple-gray-lighter rounded-lg">
                  <span>Subtotal</span>
                  <span>{formatPrice(order.total)}</span>
                </div>
                <div className="flex justify-between text-apple-gray-light p-3 bg-apple-gray-lighter rounded-lg">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-apple-gray-light p-3 bg-apple-gray-lighter rounded-lg">
                  <span>Tax (18% GST)</span>
                  <span>{formatPrice(order.total * 0.18)}</span>
                </div>
                <div className="flex justify-between text-2xl font-sf-pro font-bold text-apple-gray border-t-2 border-apple-blue pt-4">
                  <span>Total Paid</span>
                  <span className="text-apple-blue">{formatPrice(order.total * 1.18)}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/orders"
                  className="w-full bg-apple-blue hover:bg-apple-blue-dark text-white py-4 px-6 rounded-full text-lg font-sf-pro font-medium transition-all duration-300 text-center block flex items-center justify-center space-x-2"
                >
                  <Package className="w-5 h-5" />
                  <span>View All Orders</span>
                </Link>
              </motion.div>
              <motion.div
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  onClick={() => navigate('/')}
                  className="w-full border border-gray-300 text-apple-gray hover:border-apple-blue hover:text-apple-blue py-3 px-6 rounded-full font-sf-pro font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          className="mt-12 bg-white rounded-2xl p-8 shadow-sm text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-xl font-sf-pro font-semibold text-apple-gray mb-4">
            What happens next?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-sf-pro font-medium text-apple-gray mb-2">Order Processing</h4>
              <p className="text-sm text-apple-gray-light">We'll prepare your order for shipment within 1-2 business days.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="w-6 h-6 text-yellow-600" />
              </div>
              <h4 className="font-sf-pro font-medium text-apple-gray mb-2">Shipping</h4>
              <p className="text-sm text-apple-gray-light">Your order will be shipped and you'll receive tracking information.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-sf-pro font-medium text-apple-gray mb-2">Delivery</h4>
              <p className="text-sm text-apple-gray-light">Your order will arrive by {order.estimatedDelivery}.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;