import React from 'react';
import { motion } from 'framer-motion';
import { Eye, GraduationCap, Leaf, Users, Shield, Scale, Truck } from 'lucide-react';

interface ValuesPageProps {
  value: string;
}

const ValuesPage: React.FC<ValuesPageProps> = ({ value }) => {
  const valuesData: { [key: string]: any } = {
    'accessibility': {
      title: 'Accessibility',
      subtitle: 'Technology that works for everyone.',
      description: 'We believe technology should be accessible to everyone, regardless of ability.',
      icon: Eye,
      color: 'bg-gradient-to-br from-blue-600 to-indigo-700'
    },
    'education': {
      title: 'Education',
      subtitle: 'Empowering the next generation.',
      description: 'We\'re committed to helping educators and students achieve more.',
      icon: GraduationCap,
      color: 'bg-gradient-to-br from-purple-600 to-pink-600'
    },
    'environment': {
      title: 'Environment',
      subtitle: 'Our commitment to the planet.',
      description: 'We\'re working to make our products and operations carbon neutral by 2030.',
      icon: Leaf,
      color: 'bg-gradient-to-br from-green-600 to-emerald-700'
    },
    'inclusion': {
      title: 'Inclusion and Diversity',
      subtitle: 'Different together.',
      description: 'We believe diverse teams make better products and create a better world.',
      icon: Users,
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
    },
    'privacy': {
      title: 'Privacy',
      subtitle: 'Privacy is a fundamental human right.',
      description: 'We design our products and services to protect your privacy.',
      icon: Shield,
      color: 'bg-gradient-to-br from-gray-700 to-gray-900'
    },
    'racial-equity': {
      title: 'Racial Equity and Justice',
      subtitle: 'Our commitment to justice.',
      description: 'We\'re committed to being a force for change in the fight for racial equity and justice.',
      icon: Scale,
      color: 'bg-gradient-to-br from-purple-700 to-indigo-800'
    },
    'supplier': {
      title: 'Supplier Responsibility',
      subtitle: 'Holding ourselves and our partners accountable.',
      description: 'We hold ourselves and our suppliers to the highest standards.',
      icon: Truck,
      color: 'bg-gradient-to-br from-teal-600 to-cyan-700'
    }
  };

  const currentValue = valuesData[value];
  const IconComponent = currentValue?.icon || Eye;

  if (!currentValue) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sf-pro font-semibold text-apple-gray mb-4">
            Values Page Not Found
          </h1>
          <p className="text-xl text-apple-gray-light">
            The values page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-gray-lighter">
      {/* Hero Section */}
      <motion.section
        className={`relative min-h-screen flex items-center justify-center ${currentValue.color}`}
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
            {currentValue.title}
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-sf-pro font-normal mb-6 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {currentValue.subtitle}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-sf-pro font-light mb-8 text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {currentValue.description}
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
              Our Progress →
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ValuesPage;