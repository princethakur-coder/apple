import React from 'react';
import { motion } from 'framer-motion';
import { Apple } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'iPod touch', 'Accessories', 'Gift Cards']
    },
    {
      title: 'Services',
      links: ['Apple Music', 'Apple TV+', 'Apple Fitness+', 'Apple News+', 'Apple Arcade', 'iCloud', 'Apple One', 'Apple Card', 'Apple Books', 'Apple Podcasts']
    },
    {
      title: 'Account',
      links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Refurbished and Clearance', 'Financing', 'Apple Trade In', 'Order Status', 'Shopping Help']
    },
    {
      title: 'For Business',
      links: ['Apple and Business', 'Shop for Business']
    },
    {
      title: 'For Education',
      links: ['Apple and Education', 'Shop for K-12', 'Shop for College']
    },
    {
      title: 'For Healthcare',
      links: ['Apple in Healthcare', 'Health on Apple Watch', 'Health Records on iPhone']
    },
    {
      title: 'Apple Values',
      links: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supplier Responsibility']
    },
    {
      title: 'About Apple',
      links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple']
    }
  ];

  return (
    <footer className="bg-apple-gray-lighter border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-12">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs font-sf-pro font-semibold text-apple-gray mb-3 uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href={`/${link.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                      className="text-xs font-sf-pro text-apple-gray-light hover:text-apple-blue transition-colors duration-200"
                      whileHover={{ x: 2 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="border-t border-gray-200 pt-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <p className="text-xs font-sf-pro text-apple-gray-light mb-4">
            More ways to shop: <a href="/store" className="text-apple-blue hover:underline">Find an Apple Store</a> or <a href="/retailers" className=\"text-apple-blue hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </p> */}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-200 pt-6 flex flex-col lg:flex-row justify-between items-start lg:items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-4 lg:mb-0">
            <Apple className="w-4 h-4 text-apple-gray mr-2" />
            <p className="text-xs font-sf-pro text-apple-gray-light">
              Copyright © 2025 Prince Thakur. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center space-x-4 lg:space-x-6">
            <a href="/privacy-policy" className="text-xs font-sf-pro text-apple-gray-light hover:text-apple-blue transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-apple-gray-light">|</span>
            <a href="/terms-of-use" className="text-xs font-sf-pro text-apple-gray-light hover:text-apple-blue transition-colors duration-200">
              Terms of Use
            </a>
            <span className="text-apple-gray-light">|</span>
            <a href="/sales-and-refunds" className="text-xs font-sf-pro text-apple-gray-light hover:text-apple-blue transition-colors duration-200">
              Sales and Refunds
            </a>
            <span className="text-apple-gray-light">|</span>
            <a href="/legal" className="text-xs font-sf-pro text-apple-gray-light hover:text-apple-blue transition-colors duration-200">
              Legal
            </a>
            <span className="text-apple-gray-light">|</span>
            <a href="/sitemap" className="text-xs font-sf-pro text-apple-gray-light hover:text-apple-blue transition-colors duration-200">
              Site Map
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 pt-6 border-t border-gray-200 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;