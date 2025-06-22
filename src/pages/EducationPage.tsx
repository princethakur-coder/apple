import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';

interface EducationPageProps {
  education: string;
}

const EducationPage: React.FC<EducationPageProps> = ({ education }) => {
  const educationData: { [key: string]: any } = {
    'apple-education': {
      title: 'Apple and Education',
      subtitle: 'Empowering educators and students.',
      description: 'Discover how Apple technology transforms learning and teaching experiences.',
      icon: GraduationCap,
      color: 'bg-gradient-to-br from-purple-600 to-indigo-700'
    },
    'k12': {
      title: 'Shop for K-12',
      subtitle: 'Special pricing for schools.',
      description: 'Get special education pricing on Apple products for K-12 schools and students.',
      icon: School,
      color: 'bg-gradient-to-br from-blue-600 to-cyan-600'
    },
    'college': {
      title: 'Shop for College',
      subtitle: 'Student discounts on Apple products.',
      description: 'Save on Mac, iPad, and more with education pricing for college students and faculty.',
      icon: BookOpen,
      color: 'bg-gradient-to-br from-green-600 to-teal-600'
    }
  };

  const currentEducation = educationData[education];
  const IconComponent = currentEducation?.icon || GraduationCap;

  if (!currentEducation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sf-pro font-semibold text-apple-gray mb-4">
            Education Page Not Found
          </h1>
          <p className="text-xl text-apple-gray-light">
            The education page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-gray-lighter">
      {/* Hero Section */}
      <motion.section
        className={`relative min-h-screen flex items-center justify-center ${currentEducation.color}`}
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
            {currentEducation.title}
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-sf-pro font-normal mb-6 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {currentEducation.subtitle}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-sf-pro font-light mb-8 text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {currentEducation.description}
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
              Shop Now
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

export default EducationPage;