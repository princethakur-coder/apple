import React from 'react';
import { motion } from 'framer-motion';
import { Building, ShoppingCart } from 'lucide-react';

interface BusinessPageProps {
  business: string;
}

const BusinessPage: React.FC<BusinessPageProps> = ({ business }) => {
  const businessData: { [key: string]: any } = {
    'apple-business': {
      title: 'Apple and Business',
      subtitle: 'Powerful tools for your business.',
      description: 'Discover how Apple products and services can help your business be more productive and secure.',
      icon: Building,
      color: 'bg-gradient-to-br from-blue-600 to-indigo-700'
    },
    'shop-business': {
      title: 'Shop for Business',
      subtitle: 'Special pricing for businesses.',
      description: 'Get special pricing on Apple products for your business and access to business support.',
      icon: ShoppingCart,
      color: 'bg-gradient-to-br from-green-600 to-emerald-700'
    }
  };

  const currentBusiness = businessData[business];
  const IconComponent = currentBusiness?.icon || Building;

  if (!currentBusiness) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sf-pro font-semibold text-apple-gray mb-4">
            Business Page Not Found
          </h1>
          <p className="text-xl text-apple-gray-light">
            The business page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-gray-lighter">
      {/* Hero Section */}
      <motion.section
        className={`relative min-h-screen flex items-center justify-center ${currentBusiness.color}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center px-4 max-w-4xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <IconComponent className="w-24 h-24 mx-auto mb-6 text-white" />
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-sf-pro font-semibold mb-4 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {currentBusiness.title}
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-sf-pro font-normal mb-6 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {currentBusiness.subtitle}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-sf-pro font-light mb-8 text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {currentBusiness.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button
              className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full text-sm font-sf-pro font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="text-white hover:text-gray-200 text-sm font-sf-pro font-medium border-b border-white hover:border-gray-200 transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              Learn more →
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default BusinessPage;