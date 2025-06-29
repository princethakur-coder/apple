import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, ChevronDown, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
  };

  const footerSections = [
    {
      title: 'Shop and Learn',
      links: [
        { name: 'Store', path: '/store' },
        { name: 'Mac', path: '/mac' },
        { name: 'iPad', path: '/ipad' },
        { name: 'iPhone', path: '/iphone' },
        { name: 'Watch', path: '/watch' },
        { name: 'AirPods', path: '/airpods' },
        { name: 'TV & Home', path: '/tv-home' },
        { name: 'iPod touch', path: '/ipod-touch' },
        { name: 'Accessories', path: '/accessories' },
        { name: 'Gift Cards', path: '/gift-cards' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Apple Music', path: '/apple-music' },
        { name: 'Apple TV+', path: '/apple-tv-plus' },
        { name: 'Apple Fitness+', path: '/apple-fitness-plus' },
        { name: 'Apple News+', path: '/apple-news-plus' },
        { name: 'Apple Arcade', path: '/apple-arcade' },
        { name: 'iCloud', path: '/icloud' },
        { name: 'Apple One', path: '/apple-one' },
        { name: 'Apple Card', path: '/apple-card' },
        { name: 'Apple Books', path: '/apple-books' },
        { name: 'Apple Podcasts', path: '/apple-podcasts' }
      ]
    },
    {
      title: 'Account',
      links: [
        { name: 'Manage Your Apple ID', path: '/manage-your-apple-id' },
        { name: 'Apple Store Account', path: '/apple-store-account' },
        { name: 'iCloud.com', path: '/icloud-com' }
      ]
    },
    {
      title: 'Apple Store',
      links: [
        { name: 'Find a Store', path: '/find-a-store' },
        { name: 'Genius Bar', path: '/genius-bar' },
        { name: 'Today at Apple', path: '/today-at-apple' },
        { name: 'Apple Camp', path: '/apple-camp' },
        { name: 'Apple Store App', path: '/apple-store-app' },
        { name: 'Refurbished and Clearance', path: '/refurbished-and-clearance' },
        { name: 'Financing', path: '/financing' },
        { name: 'Apple Trade In', path: '/apple-trade-in' },
        { name: 'Order Status', path: '/order-status' },
        { name: 'Shopping Help', path: '/shopping-help' }
      ]
    },
    {
      title: 'For Business',
      links: [
        { name: 'Apple and Business', path: '/apple-and-business' },
        { name: 'Shop for Business', path: '/shop-for-business' }
      ]
    },
    {
      title: 'For Education',
      links: [
        { name: 'Apple and Education', path: '/apple-and-education' },
        { name: 'Shop for K-12', path: '/shop-for-k-12' },
        { name: 'Shop for College', path: '/shop-for-college' }
      ]
    },
    {
      title: 'For Healthcare',
      links: [
        { name: 'Apple in Healthcare', path: '/apple-in-healthcare' },
        { name: 'Health on Apple Watch', path: '/health-on-apple-watch' },
        { name: 'Health Records on iPhone', path: '/health-records-on-iphone' }
      ]
    },
    {
      title: 'Apple Values',
      links: [
        { name: 'Accessibility', path: '/accessibility' },
        { name: 'Education', path: '/education' },
        { name: 'Environment', path: '/environment' },
        { name: 'Inclusion and Diversity', path: '/inclusion-and-diversity' },
        { name: 'Privacy', path: '/privacy' },
        { name: 'Racial Equity and Justice', path: '/racial-equity-and-justice' },
        { name: 'Supplier Responsibility', path: '/supplier-responsibility' }
      ]
    },
    {
      title: 'About Apple',
      links: [
        { name: 'Newsroom', path: '/newsroom' },
        { name: 'Apple Leadership', path: '/apple-leadership' },
        { name: 'Career Opportunities', path: '/career-opportunities' },
        { name: 'Investors', path: '/investors' },
        { name: 'Ethics & Compliance', path: '/ethics-and-compliance' },
        { name: 'Events', path: '/events' },
        { name: 'Contact Apple', path: '/contact-apple' }
      ]
    }
  ];

  return (
    <footer className="bg-apple-gray-lighter border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-12">
        {/* Desktop Footer Links Grid - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
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
                  <li key={link.name}>
                    <motion.a
                      href={link.path}
                      className="text-xs font-sf-pro text-apple-gray-light hover:text-apple-blue transition-colors duration-200"
                      whileHover={{ x: 2 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mobile Footer Links - Collapsible Sections */}
        <div className="md:hidden mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              className="border-b border-gray-200 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <motion.button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between py-4 text-left"
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-sm font-sf-pro font-semibold text-apple-gray">
                  {section.title}
                </h3>
                <motion.div
                  animate={{ rotate: expandedSections[section.title] ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {expandedSections[section.title] ? (
                    <ChevronUp className="w-4 h-4 text-apple-gray-light" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-apple-gray-light" />
                  )}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {expandedSections[section.title] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <ul className="pb-4 space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <motion.li
                          key={link.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: linkIndex * 0.03 }}
                        >
                          <motion.a
                            href={link.path}
                            className="text-sm font-sf-pro text-apple-gray-light hover:text-apple-blue transition-colors duration-200 block py-1"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {link.name}
                          </motion.a>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
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
              Copyright © 2024 Apple Inc. All rights reserved.
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
            {/* <span className="text-apple-gray-light">|</span> */}
            {/* <a href="/sitemap" className="text-xs font-sf-pro text-apple-gray-light hover:text-apple-blue transition-colors duration-200">
              Site Map
            </a> */}
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