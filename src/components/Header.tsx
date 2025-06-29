import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Menu, X, Apple, Package, ChevronDown, ChevronRight } from 'lucide-react';
import { useStore } from '../store/useStore';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const cartItemsCount = useStore((state) => state.getCartItemsCount());
  const ordersCount = useStore((state) => state.orders.length);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Store', path: '/store' },
    { name: 'Mac', path: '/mac' },
    { name: 'iPad', path: '/ipad' },
    { name: 'iPhone', path: '/iphone' },
    { name: 'Watch', path: '/watch' },
    { name: 'AirPods', path: '/airpods' },
    { name: 'TV & Home', path: '/tv-home' },
    { name: 'Entertainment', path: '/entertainment' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'Support', path: '/support' }
  ];

  const mobileMenuSections = [
    {
      title: 'Shop and Learn',
      items: [
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
      items: [
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
      items: [
        { name: 'Manage Your Apple ID', path: '/manage-your-apple-id' },
        { name: 'Apple Store Account', path: '/apple-store-account' },
        { name: 'iCloud.com', path: '/icloud-com' }
      ]
    },
    {
      title: 'Apple Store',
      items: [
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
      items: [
        { name: 'Apple and Business', path: '/apple-and-business' },
        { name: 'Shop for Business', path: '/shop-for-business' }
      ]
    },
    {
      title: 'For Education',
      items: [
        { name: 'Apple and Education', path: '/apple-and-education' },
        { name: 'Shop for K-12', path: '/shop-for-k-12' },
        { name: 'Shop for College', path: '/shop-for-college' }
      ]
    },
    {
      title: 'For Healthcare',
      items: [
        { name: 'Apple in Healthcare', path: '/apple-in-healthcare' },
        { name: 'Health on Apple Watch', path: '/health-on-apple-watch' },
        { name: 'Health Records on iPhone', path: '/health-records-on-iphone' }
      ]
    },
    {
      title: 'Apple Values',
      items: [
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
      items: [
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const toggleDropdown = (sectionTitle: string) => {
    setOpenDropdown(openDropdown === sectionTitle ? null : sectionTitle);
  };

  const handleMobileNavClick = (path: string) => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    navigate(path);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Apple Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/">
              <Apple className="w-4 h-4 text-apple-gray cursor-pointer" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="text-xs text-apple-gray hover:text-apple-blue transition-colors duration-200 font-sf-pro font-normal"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-apple-gray hover:text-apple-blue transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search className="w-4 h-4" />
            </motion.button>
            
            {/* Orders Icon */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to="/orders"
                className="text-apple-gray hover:text-apple-blue transition-colors duration-200"
                title="View Orders"
              >
                <Package className="w-4 h-4" />
                {ordersCount > 0 && (
                  <motion.span
                    className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {ordersCount}
                  </motion.span>
                )}
              </Link>
            </motion.div>
            
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to="/cart"
                className="text-apple-gray hover:text-apple-blue transition-colors duration-200"
              >
                <ShoppingBag className="w-4 h-4" />
                {cartItemsCount > 0 && (
                  <motion.span
                    className="absolute -top-2 -right-2 bg-apple-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </Link>
            </motion.div>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-apple-gray hover:text-apple-blue transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4">
              {mobileMenuSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  className="mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: sectionIndex * 0.05 }}
                >
                  <motion.button
                    onClick={() => toggleDropdown(section.title)}
                    className="w-full flex items-center justify-between py-3 text-left border-b border-gray-100"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-lg font-sf-pro font-medium text-apple-gray">
                      {section.title}
                    </span>
                    <motion.div
                      animate={{ rotate: openDropdown === section.title ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-5 h-5 text-apple-gray-light" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {openDropdown === section.title && (
                      <motion.div
                        className="mt-2 ml-4 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {section.items.map((item, itemIndex) => (
                          <motion.button
                            key={item.name}
                            onClick={() => handleMobileNavClick(item.path)}
                            className="block w-full text-left py-2 text-apple-gray-light hover:text-apple-blue transition-colors duration-200 font-sf-pro"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: itemIndex * 0.03 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {item.name}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              
              {/* My Orders in Mobile Menu */}
              <motion.button
                onClick={() => handleMobileNavClick('/orders')}
                className="w-full flex items-center justify-between py-3 text-left border-b border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: mobileMenuSections.length * 0.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg font-sf-pro font-medium text-apple-gray">
                  My Orders
                </span>
                {ordersCount > 0 && (
                  <span className="bg-green-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    {ordersCount}
                  </span>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-apple-gray-light" />
                <input
                  type="text"
                  placeholder="Search apple.com"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm bg-apple-gray-lighter rounded-lg border-none outline-none focus:ring-2 focus:ring-apple-blue"
                  autoFocus
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;