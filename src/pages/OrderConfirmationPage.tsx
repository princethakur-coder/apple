import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Truck, Calendar, CreditCard, Banknote } from 'lucide-react';
import { useStore } from '../store/useStore';

const OrderConfirmationPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const orders = useStore((state) => state.orders);
  const order = orders.find(o => o.id === orderId);

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

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sf-pro font-semibold text-apple-gray mb-4">
            Order Not Found
          </h1>
          <p className="text-xl text-apple-gray-light mb-8">
            The order you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="bg-apple-blue hover:bg-apple-blue-dark text-white px-8 py-3 rounded-full font-sf-pro font-medium transition-all duration-300 inline-block"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-gray-lighter">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-16">
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
          <p className="text-xl text-apple-gray-light mb-2">
            Thank you for your purchase
          </p>
          <div className="bg-white rounded-lg px-6 py-3 inline-block shadow-sm">
            <p className="text-lg text-apple-gray">
              Order ID: <span className="font-medium text-apple-blue font-mono">{order.id}</span>
            </p>
          </div>
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
                  Order Items
                </h2>
              </div>
              <div className="space-y-4">
                {order.items.map((item) => (
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
                        Color: {item.selectedColor}
                      </p>
                      <p className="text-sm text-apple-gray-light">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <span className="font-sf-pro font-medium text-apple-gray">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
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
              <div className="space-y-2 text-apple-gray-light">
                <p className="font-medium text-apple-gray">{order.shippingAddress.firstName} {order.shippingAddress.lastName}</p>
                <p>{order.shippingAddress.address}</p>
                <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
                <p>{order.shippingAddress.country}</p>
                <div className="pt-3 border-t border-gray-200 mt-4">
                  <p className="text-sm">
                    <span className="font-medium">Email:</span> {order.shippingAddress.email}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Phone:</span> {order.shippingAddress.phone}
                  </p>
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
              <div className="flex items-center space-x-3">
                {order.paymentMethod === 'card' ? (
                  <>
                    <CreditCard className="w-5 h-5 text-apple-gray-light" />
                    <span className="text-apple-gray">Credit/Debit Card</span>
                  </>
                ) : (
                  <>
                    <Banknote className="w-5 h-5 text-apple-gray-light" />
                    <span className="text-apple-gray">Cash on Delivery</span>
                  </>
                )}
              </div>
              {order.paymentMethod === 'cash_on_delivery' && (
                <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    Please keep {formatPrice(order.total * 1.18)} ready for payment upon delivery.
                  </p>
                </div>
              )}
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
                <div className="flex items-center justify-between">
                  <span className="text-apple-gray-light">Order Date</span>
                  <span className="font-sf-pro font-medium text-apple-gray">
                    {new Date(order.orderDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-apple-gray-light">Status</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-sf-pro font-medium">
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
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
                Order Total
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between text-apple-gray-light">
                  <span>Subtotal</span>
                  <span>{formatPrice(order.total)}</span>
                </div>
                <div className="flex justify-between text-apple-gray-light">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-apple-gray-light">
                  <span>Tax (18%)</span>
                  <span>{formatPrice(order.total * 0.18)}</span>
                </div>
                <div className="flex justify-between text-xl font-sf-pro font-semibold text-apple-gray border-t border-gray-200 pt-3">
                  <span>Total</span>
                  <span>{formatPrice(order.total * 1.18)}</span>
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
                  to="/store"
                  className="w-full bg-apple-blue hover:bg-apple-blue-dark text-white py-4 px-6 rounded-full text-lg font-sf-pro font-medium transition-all duration-300 text-center block"
                >
                  Continue Shopping
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/orders"
                  className="w-full border border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white py-3 px-6 rounded-full font-sf-pro font-medium transition-all duration-300 text-center block"
                >
                  View All Orders
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;