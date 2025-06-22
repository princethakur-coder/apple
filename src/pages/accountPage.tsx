import React from 'react';
import { motion } from 'framer-motion';
import { User, ShoppingBag, Cloud, Settings, Shield, CreditCard } from 'lucide-react';

interface AccountPageProps {
  account: string;
}

const AccountPage: React.FC<AccountPageProps> = ({ account }) => {
  const accountData: { [key: string]: any } = {
    'apple-id': {
      title: 'Manage Your Apple ID',
      subtitle: 'Your account for everything Apple.',
      description: 'Sign in to manage your Apple ID account information, security settings, and more.',
      icon: User,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      features: [
        'Update personal information',
        'Manage security settings',
        'Two-factor authentication',
        'Payment and shipping',
        'Privacy settings',
        'Family sharing'
      ]
    },
    'store-account': {
      title: 'Apple Store Account',
      subtitle: 'Track orders and manage purchases.',
      description: 'View your order history, track shipments, and manage your Apple Store account.',
      icon: ShoppingBag,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      features: [
        'Order history',
        'Track shipments',
        'Return and exchange',
        'Saved items',
        'Payment methods',
        'Shipping addresses'
      ]
    },
    'icloud': {
      title: 'iCloud.com',
      subtitle: 'Access your content from any web browser.',
      description: 'Sign in to iCloud to access your photos, files, notes, and more from any device.',
      icon: Cloud,
      color: 'bg-gradient-to-br from-blue-400 to-cyan-500',
      features: [
        'Access photos and files',
        'Mail and calendar',
        'Notes and reminders',
        'Find My devices',
        'Contacts sync',
        'iWork apps'
      ]
    }
  };

  const currentAccount = accountData[account];
  const IconComponent = currentAccount?.icon || User;

  if (!currentAccount) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sf-pro font-semibold text-apple-gray mb-4">
            Account Page Not Found
          </h1>
          <p className="text-xl text-apple-gray-light">
            The account page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-gray-lighter">
      {/* Hero Section */}
      <motion.section
        className={`relative min-h-screen flex items-center justify-center ${currentAccount.color}`}
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
            {currentAccount.title}
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-sf-pro font-normal mb-6 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {currentAccount.subtitle}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-sf-pro font-light mb-8 text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {currentAccount.description}
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
              Sign In
            </motion.button>
            <motion.button
              className="text-white hover:text-gray-200 text-sm font-sf-pro font-medium border-b border-white hover:border-gray-200 transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              Create Account →
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-sf-pro font-semibold text-apple-gray mb-4">
              Account Features
            </h2>
            <p className="text-xl text-apple-gray-light">
              Everything you can do with your account.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentAccount.features.map((feature: string, index: number) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-apple-blue rounded-full" />
                  <p className="text-lg font-sf-pro text-apple-gray">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountPage;