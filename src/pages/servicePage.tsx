import React from 'react';
import { motion } from 'framer-motion';
import { Music, Tv, Dumbbell, Newspaper, Gamepad2, Cloud, Package, CreditCard, BookOpen, Headphones } from 'lucide-react';

interface ServicePageProps {
  service: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  const serviceData: { [key: string]: any } = {
    'apple-music': {
      title: 'Apple Music',
      subtitle: 'Over 100 million songs. Zero ads.',
      description: 'Stream over 100 million songs, discover new music, and enjoy exclusive content from your favorite artists.',
      icon: Music,
      color: 'bg-gradient-to-br from-pink-500 to-red-500',
      features: [
        'Over 100 million songs',
        'Lossless and Spatial Audio',
        'Exclusive releases and content',
        'Personalized recommendations',
        'Offline listening',
        'Family sharing'
      ],
      price: '$10.99/month'
    },
    'apple-tv-plus': {
      title: 'Apple TV+',
      subtitle: 'Original stories from the most creative minds.',
      description: 'Watch award-winning Apple Originals from Apple TV+. New shows and movies added every month.',
      icon: Tv,
      color: 'bg-gradient-to-br from-gray-800 to-black',
      features: [
        'Award-winning originals',
        'New content monthly',
        '4K HDR streaming',
        'Dolby Atmos audio',
        'Watch offline',
        'Family sharing'
      ],
      price: '$6.99/month'
    },
    'apple-fitness-plus': {
      title: 'Apple Fitness+',
      subtitle: 'Fitness for everyone. Powered by Apple Watch.',
      description: 'Get motivated with thousands of workouts designed to work with Apple Watch.',
      icon: Dumbbell,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      features: [
        'Thousands of workouts',
        'New workouts weekly',
        'Apple Watch integration',
        'Personalized recommendations',
        'World-class trainers',
        'Multiple workout types'
      ],
      price: '$9.99/month'
    },
    'apple-news-plus': {
      title: 'Apple News+',
      subtitle: 'Hundreds of magazines. Premium newspapers.',
      description: 'Read your favorite magazines and newspapers with Apple News+.',
      icon: Newspaper,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      features: [
        'Hundreds of magazines',
        'Premium newspapers',
        'Ad-free reading',
        'Offline access',
        'Family sharing',
        'Personalized recommendations'
      ],
      price: '$9.99/month'
    },
    'apple-arcade': {
      title: 'Apple Arcade',
      subtitle: 'Over 200 games. Zero ads. Zero in-app purchases.',
      description: 'Play premium games across all your Apple devices with Apple Arcade.',
      icon: Gamepad2,
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      features: [
        'Over 200 premium games',
        'No ads or in-app purchases',
        'Play across all devices',
        'Offline gaming',
        'Family sharing',
        'New games monthly'
      ],
      price: '$4.99/month'
    },
    'icloud': {
      title: 'iCloud',
      subtitle: 'Keep everything safe and in sync.',
      description: 'Store your photos, files, and more securely in iCloud and access them anywhere.',
      icon: Cloud,
      color: 'bg-gradient-to-br from-blue-400 to-cyan-500',
      features: [
        'Secure cloud storage',
        'Automatic backup',
        'Sync across devices',
        'Share with family',
        'Advanced security',
        'Multiple storage plans'
      ],
      price: 'From $0.99/month'
    },
    'apple-one': {
      title: 'Apple One',
      subtitle: 'Bundle up to six Apple services.',
      description: 'Get Apple Music, Apple TV+, Apple Arcade, and more in one simple subscription.',
      icon: Package,
      color: 'bg-gradient-to-br from-orange-500 to-red-500',
      features: [
        'Bundle multiple services',
        'Save money monthly',
        'Individual and Family plans',
        'Easy management',
        'One subscription',
        'Cancel anytime'
      ],
      price: 'From $16.95/month'
    },
    'apple-card': {
      title: 'Apple Card',
      subtitle: 'A new kind of credit card. Created by Apple.',
      description: 'Apple Card gives you unlimited Daily Cash back and a new level of privacy and security.',
      icon: CreditCard,
      color: 'bg-gradient-to-br from-gray-100 to-white text-black',
      features: [
        'Unlimited Daily Cash',
        'No fees',
        'Privacy and security',
        'Easy to apply',
        'Titanium card',
        'Apple Pay integration'
      ],
      price: 'No annual fee'
    },
    'apple-books': {
      title: 'Apple Books',
      subtitle: 'Read. Listen. Discover.',
      description: 'Discover millions of books and audiobooks in the Apple Books app.',
      icon: BookOpen,
      color: 'bg-gradient-to-br from-orange-400 to-yellow-500',
      features: [
        'Millions of books',
        'Audiobooks included',
        'Personalized recommendations',
        'Reading goals',
        'Night mode',
        'Sync across devices'
      ],
      price: 'Free app'
    },
    'apple-podcasts': {
      title: 'Apple Podcasts',
      subtitle: 'Listen to millions of shows.',
      description: 'Discover and listen to millions of podcasts on Apple Podcasts.',
      icon: Headphones,
      color: 'bg-gradient-to-br from-purple-600 to-indigo-600',
      features: [
        'Millions of podcasts',
        'Premium subscriptions',
        'Offline listening',
        'Smart recommendations',
        'Cross-device sync',
        'Easy discovery'
      ],
      price: 'Free with premium options'
    }
  };

  const currentService = serviceData[service];
  const IconComponent = currentService?.icon || Music;

  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sf-pro font-semibold text-apple-gray mb-4">
            Service Not Found
          </h1>
          <p className="text-xl text-apple-gray-light">
            The service you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-gray-lighter">
      {/* Hero Section */}
      <motion.section
        className={`relative min-h-screen flex items-center justify-center ${currentService.color}`}
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
            {currentService.title}
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-sf-pro font-normal mb-6 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {currentService.subtitle}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-sf-pro font-light mb-8 text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {currentService.description}
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
              Try it free
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
              What's included
            </h2>
            <p className="text-xl text-apple-gray-light">
              Everything you need, all in one place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentService.features.map((feature: string, index: number) => (
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

          {/* Pricing */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm max-w-md mx-auto">
              <h3 className="text-2xl font-sf-pro font-semibold text-apple-gray mb-4">
                Pricing
              </h3>
              <p className="text-3xl font-sf-pro font-bold text-apple-blue mb-6">
                {currentService.price}
              </p>
              <motion.button
                className="w-full bg-apple-blue hover:bg-apple-blue-dark text-white py-3 px-6 rounded-full font-sf-pro font-medium transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get started
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;