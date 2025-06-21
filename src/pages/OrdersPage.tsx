import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, Calendar, Truck } from 'lucide-react';
import { useStore } from '../store/useStore';

const OrdersPage: React.FC = () => {
  const orders = useStore((state) => state.orders);

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-apple-gray-lighter flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Package className="w-24 h-24 text-apple-gray-light mx-auto mb-6" />
          <h1 className="text-4xl font-sf-pro font-semibold text-apple-gray mb-4">
            No orders yet
          </h1>
          <p className="text-xl text-apple-gray-light mb-8">
            You haven't placed any orders yet.
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
            Your Orders
          </h1>
        </motion.div>

        <div className="space-y-6">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              className="bg-white rounded-2xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h2 className="text-xl font-sf-pro font-semibold text-apple-gray mb-2">
                    Order {order.id}
                  </h2>
                  <div className="flex items-center space-x-6 text-sm text-apple-gray-light">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(order.orderDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Truck className="w-4 h-4" />
                      <span>Delivery by {order.estimatedDelivery}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0 flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-sf-pro font-medium ${
                    order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                    order.status === 'shipped' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                  <span className="text-xl font-sf-pro font-semibold text-apple-gray">
                    ${(order.total * 1.08).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {order.items.slice(0, 3).map((item) => (
                  <div key={`${item.product.id}-${item.selectedColor}`} className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-apple-gray-lighter rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-sf-pro font-medium text-apple-gray truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-apple-gray-light">
                        {item.selectedColor} × {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
                {order.items.length > 3 && (
                  <div className="flex items-center justify-center text-apple-gray-light">
                    <span className="text-sm">+{order.items.length - 3} more items</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={`/order-confirmation/${order.id}`}
                    className="w-full bg-apple-blue hover:bg-apple-blue-dark text-white py-3 px-6 rounded-full font-sf-pro font-medium transition-all duration-300 text-center block"
                  >
                    View Details
                  </Link>
                </motion.div>
                <motion.button
                  className="flex-1 border border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white py-3 px-6 rounded-full font-sf-pro font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Track Order
                </motion.button>
                <motion.button
                  className="flex-1 border border-gray-300 text-apple-gray hover:border-apple-blue hover:text-apple-blue py-3 px-6 rounded-full font-sf-pro font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Reorder
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;