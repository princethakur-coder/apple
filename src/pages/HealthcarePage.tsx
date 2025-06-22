import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Watch, FileText } from 'lucide-react';

interface HealthcarePageProps {
  healthcare: string;
}

const HealthcarePage: React.FC<HealthcarePageProps> = ({ healthcare }) => {
  const healthcareData: { [key: string]: any } = {
    'apple-healthcare': {
      title: 'Apple in Healthcare',
      subtitle: 'Empowering people to live healthier lives.',
      description: 'Discover how Apple is transforming healthcare with innovative technology.',
      icon: Heart,
      color: 'bg-gradient-to-br from-red-500 to-pink-600'
    },
    'health-watch': {
      title: 'Health on Apple Watch',
      subtitle: 'Your health, on your wrist.',
      description: 'Apple Watch helps you monitor your health and stay connected to what matters most.',
      icon: Watch,
      color: 'bg-gradient-to-br from-blue-600 to-indigo-700'
    },
    'health-records': {
      title: 'Health Records on iPhone',
      subtitle: 'Your health records, organized and secure.',
      description: 'Keep your health records private and secure, all in one place on your iPhone.',
      icon: FileText,
      color: 'bg-gradient-to-br from-green-600 to-emerald-700'
    }
  };

  const currentHealthcare = healthcareData[healthcare];
  const IconComponent = currentHealthcare?.icon || Heart;

  if (!currentHealthcare) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sf-pro font-semibold text-apple-gray mb-4">
            Healthcare Page Not Found
          </h1>
          <p className="text-xl text-apple-gray-light">
            The healthcare page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-gray-lighter">
      {/* Hero Section */}
      <motion.section
        className={`relative min-h-screen flex items-center justify-center ${currentHealthcare.color}`}
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
            {currentHealthcare.title}
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-sf-pro font-normal mb-6 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {currentHealthcare.subtitle}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-sf-pro font-light mb-8 text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {currentHealthcare.description}
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
              Learn More
            </motion.button>
            <motion.button
              className="text-white hover:text-gray-200 text-sm font-sf-pro font-medium border-b border-white hover:border-gray-200 transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              Explore Features →
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HealthcarePage;