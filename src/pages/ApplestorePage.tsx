import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Calendar, Tent, Smartphone, RefreshCw, DollarSign, ArrowRightLeft, Package, HelpCircle } from 'lucide-react';

interface AppleStorePageProps {
  store: string;
}

const AppleStorePage: React.FC<AppleStorePageProps> = ({ store }) => {
  const storeData: { [key: string]: any } = {
    'find-store': {
      title: 'Find a Store',
      subtitle: 'Get help at an Apple Store near you.',
      description: 'Find an Apple Store or Apple Authorized Service Provider near you.',
      icon: MapPin,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
    },
    'genius-bar': {
      title: 'Genius Bar',
      subtitle: 'Get support from Apple experts.',
      description: 'Make a reservation for personalized support and hands-on help from Apple.',
      icon: Users,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    'today-at-apple': {
      title: 'Today at Apple',
      subtitle: 'Free sessions at Apple Store.',
      description: 'Join free sessions to learn new skills and discover what you can do with Apple products.',
      icon: Calendar,
      color: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    'apple-camp': {
      title: 'Apple Camp',
      subtitle: 'Free creative workshops for kids.',
      description: 'Apple Camp gives kids ages 8 to 12 the chance to unleash their creativity.',
      icon: Tent,
      color: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    'store-app': {
      title: 'Apple Store App',
      subtitle: 'Shop, learn, and get support.',
      description: 'The Apple Store app provides a more personal way to shop for the latest Apple products.',
      icon: Smartphone,
      color: 'bg-gradient-to-br from-gray-800 to-black'
    },
    'refurbished': {
      title: 'Refurbished and Clearance',
      subtitle: 'Save on certified refurbished products.',
      description: 'Shop certified refurbished Apple products that are tested and come with a warranty.',
      icon: RefreshCw,
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600'
    },
    'financing': {
      title: 'Financing',
      subtitle: 'Pay over time with Apple Card Monthly Installments.',
      description: 'Buy now and pay later with flexible financing options.',
      icon: DollarSign,
      color: 'bg-gradient-to-br from-yellow-500 to-orange-500'
    },
    'trade-in': {
      title: 'Apple Trade In',
      subtitle: 'Turn your device into credit.',
      description: 'Trade in your eligible device for credit toward your next purchase.',
      icon: ArrowRightLeft,
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600'
    },
    'order-status': {
      title: 'Order Status',
      subtitle: 'Track your order.',
      description: 'Check the status of your recent orders and track shipments.',
      icon: Package,
      color: 'bg-gradient-to-br from-blue-600 to-indigo-700'
    },
    'shopping-help': {
      title: 'Shopping Help',
      subtitle: 'Get help choosing the right product.',
      description: 'Chat with a Specialist, call, or visit an Apple Store for help with your purchase.',
      icon: HelpCircle,
      color: 'bg-gradient-to-br from-green-600 to-teal-600'
    }
  };

  const currentStore = storeData[store];
  const IconComponent = currentStore?.icon || MapPin;

  if (!currentStore) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sf-pro font-semibold text-apple-gray mb-4">
            Store Page Not Found
          </h1>
          <p className="text-xl text-apple-gray-light">
            The store page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-gray-lighter">
      {/* Hero Section */}
      <motion.section
        className={`relative min-h-screen flex items-center justify-center ${currentStore.color}`}
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
            {currentStore.title}
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-sf-pro font-normal mb-6 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {currentStore.subtitle}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-sf-pro font-light mb-8 text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {currentStore.description}
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

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-sf-pro font-semibold text-apple-gray mb-8">
              Coming Soon
            </h2>
            <p className="text-xl text-apple-gray-light max-w-2xl mx-auto">
              We're working on bringing you the best {currentStore.title.toLowerCase()} experience. Check back soon for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AppleStorePage;