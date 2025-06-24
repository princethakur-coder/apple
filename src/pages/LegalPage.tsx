import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, CreditCard, Scale, Map } from 'lucide-react';

interface LegalPageProps {
  legal: string;
}

const LegalPage: React.FC<LegalPageProps> = ({ legal }) => {
  const legalData: { [key: string]: any } = {
    'privacy-policy': {
      title: 'Privacy Policy',
      subtitle: 'Your privacy is important to us.',
      description: 'Learn about how Apple collects, uses, and protects your personal information.',
      icon: Shield,
      color: 'bg-gradient-to-br from-blue-600 to-indigo-700',
      content: [
        'Information We Collect',
        'How We Use Your Information',
        'Information Sharing and Disclosure',
        'Data Security',
        'Your Rights and Choices',
        'Contact Information'
      ]
    },
    'terms-of-use': {
      title: 'Terms of Use',
      subtitle: 'Terms and conditions for using Apple services.',
      description: 'Please read these terms carefully before using any Apple services or products.',
      icon: FileText,
      color: 'bg-gradient-to-br from-gray-700 to-gray-900',
      content: [
        'Acceptance of Terms',
        'Use of Services',
        'User Accounts',
        'Prohibited Uses',
        'Intellectual Property',
        'Limitation of Liability'
      ]
    },
    'sales-and-refunds': {
      title: 'Sales and Refunds',
      subtitle: 'Our sales and return policy.',
      description: 'Information about purchases, returns, and refunds for Apple products and services.',
      icon: CreditCard,
      color: 'bg-gradient-to-br from-green-600 to-emerald-700',
      content: [
        'Purchase Terms',
        'Return Policy',
        'Refund Process',
        'Warranty Information',
        'Exchange Policy',
        'Customer Support'
      ]
    },
    'legal': {
      title: 'Legal',
      subtitle: 'Legal information and compliance.',
      description: 'Important legal information about Apple products, services, and business practices.',
      icon: Scale,
      color: 'bg-gradient-to-br from-purple-600 to-indigo-700',
      content: [
        'Legal Notices',
        'Trademark Information',
        'Copyright Policy',
        'Compliance Information',
        'Regulatory Information',
        'Legal Contacts'
      ]
    },
    'sitemap': {
      title: 'Site Map',
      subtitle: 'Navigate our website easily.',
      description: 'Find all the pages and sections available on the Apple website.',
      icon: Map,
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      content: [
        'Products',
        'Services',
        'Support',
        'Company Information',
        'Legal Pages',
        'Contact Information'
      ]
    }
  };

  const currentLegal = legalData[legal];
  const IconComponent = currentLegal?.icon || Shield;

  if (!currentLegal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sf-pro font-semibold text-apple-gray mb-4">
            Legal Page Not Found
          </h1>
          <p className="text-xl text-apple-gray-light">
            The legal page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-gray-lighter">
      {/* Hero Section */}
      <motion.section
        className={`relative min-h-screen flex items-center justify-center ${currentLegal.color}`}
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
            {currentLegal.title}
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-sf-pro font-normal mb-6 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {currentLegal.subtitle}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-sf-pro font-light mb-8 text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {currentLegal.description}
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
              Read Full Document
            </motion.button>
            <motion.button
              className="text-white hover:text-gray-200 text-sm font-sf-pro font-medium border-b border-white hover:border-gray-200 transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              Download PDF →
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section */}
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
              What's Covered
            </h2>
            <p className="text-xl text-apple-gray-light">
              Key sections and topics covered in this document.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentLegal.content.map((item: string, index: number) => (
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
                  <p className="text-lg font-sf-pro text-apple-gray">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl mx-auto">
              <h3 className="text-2xl font-sf-pro font-semibold text-apple-gray mb-4">
                Questions?
              </h3>
              <p className="text-lg text-apple-gray-light mb-6">
                If you have any questions about this document, please contact us.
              </p>
              <motion.button
                className="bg-apple-blue hover:bg-apple-blue-dark text-white py-3 px-6 rounded-full font-sf-pro font-medium transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Support
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;