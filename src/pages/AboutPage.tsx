import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Users, Briefcase, TrendingUp, Shield, Calendar, Phone } from 'lucide-react';

interface AboutPageProps {
  about: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ about }) => {
  const aboutData: { [key: string]: any } = {
    'newsroom': {
      title: 'Newsroom',
      subtitle: 'The latest Apple news and updates.',
      description: 'Stay up to date with the latest news, press releases, and updates from Apple.',
      icon: Newspaper,
      color: 'bg-gradient-to-br from-blue-600 to-indigo-700'
    },
    'leadership': {
      title: 'Apple Leadership',
      subtitle: 'Meet the team behind Apple.',
      description: 'Learn about the executive team that leads Apple\'s innovation and growth.',
      icon: Users,
      color: 'bg-gradient-to-br from-purple-600 to-indigo-700'
    },
    'careers': {
      title: 'Career Opportunities',
      subtitle: 'Join the team that\'s changing the world.',
      description: 'Explore career opportunities and join Apple\'s mission to create products that enrich lives.',
      icon: Briefcase,
      color: 'bg-gradient-to-br from-green-600 to-emerald-700'
    },
    'investors': {
      title: 'Investors',
      subtitle: 'Financial information and investor relations.',
      description: 'Access financial reports, investor information, and corporate governance details.',
      icon: TrendingUp,
      color: 'bg-gradient-to-br from-orange-600 to-red-600'
    },
    'ethics': {
      title: 'Ethics & Compliance',
      subtitle: 'Our commitment to doing business the right way.',
      description: 'Learn about Apple\'s commitment to ethical business practices and compliance.',
      icon: Shield,
      color: 'bg-gradient-to-br from-gray-700 to-gray-900'
    },
    'events': {
      title: 'Events',
      subtitle: 'Apple events and announcements.',
      description: 'Watch Apple events and stay updated on the latest product announcements.',
      icon: Calendar,
      color: 'bg-gradient-to-br from-pink-600 to-purple-700'
    },
    'contact': {
      title: 'Contact Apple',
      subtitle: 'Get in touch with Apple.',
      description: 'Find contact information and ways to reach Apple for support, media, and business inquiries.',
      icon: Phone,
      color: 'bg-gradient-to-br from-teal-600 to-cyan-700'
    }
  };

  const currentAbout = aboutData[about];
  const IconComponent = currentAbout?.icon || Newspaper;

  if (!currentAbout) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sf-pro font-semibold text-apple-gray mb-4">
            About Page Not Found
          </h1>
          <p className="text-xl text-apple-gray-light">
            The about page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-gray-lighter">
      {/* Hero Section */}
      <motion.section
        className={`relative min-h-screen flex items-center justify-center ${currentAbout.color}`}
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
            {currentAbout.title}
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-sf-pro font-normal mb-6 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {currentAbout.subtitle}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-sf-pro font-light mb-8 text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {currentAbout.description}
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
              Explore
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

export default AboutPage;