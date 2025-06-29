import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronDown, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IPhoneProductPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedModel, setSelectedModel] = useState('iPhone 15 Pro');
  const [selectedColor, setSelectedColor] = useState('Natural Titanium');
  const [selectedStorage, setSelectedStorage] = useState('128GB');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  
  const isHeroInView = useInView(heroRef, { once: false });
  const isFeaturesInView = useInView(featuresRef, { once: true });

  const colors = [
    { 
      name: 'Natural Titanium', 
      color: '#8E8E93',
      image: 'https://www.apple.com/in/iphone-16-pro/images/overview/product-viewer/iphone-pro/natural_titanium__22ovjg0i0huy_xsmall.jpg',
      description: 'Natural Titanium'
    },
    { 
      name: 'Desert Titanium', 
      color: '#5E7C9B',
      image: 'https://www.apple.com/in/iphone-16-pro/images/overview/product-viewer/iphone-pro/desert_titanium__gcg1i94xakuq_xsmall.jpg',
      description: 'Blue Titanium'
    },
    { 
      name: 'White Titanium', 
      color: '#F5F5DC',
      image: 'https://www.apple.com/in/iphone-16-pro/images/overview/product-viewer/iphone-pro/white_titanium__b0s9tw63hs4i_xsmall.jpg',
      description: 'White Titanium'
    },
    { 
      name: 'Black Titanium', 
      color: '#1D1D1F',
      image: 'https://www.apple.com/in/iphone-16-pro/images/overview/product-viewer/iphone-pro/black_titanium__ezezv5esulua_xsmall.jpg',
      description: 'Black Titanium'
    }
  ];

  const storageOptions = ['128GB', '256GB', '512GB', '1TB'];

  const features = [
    {
      title: 'A18 Pro chip',
      subtitle: 'Game‑changing chip. Groundbreaking performance.',
      description: 'A18 Pro delivers exceptional performance and efficiency for everything you do.',
      image: 'https://www.apple.com/v/iphone-16-pro/f/images/overview/media-card/highlights_chip_endframe__d1d71a0qjseq_large.jpg'
    },
    {
      title: 'Titanium Design',
      subtitle: 'Strong. Light. Pro.',
      description: 'iPhone 15 Pro has a strong and light titanium design with a textured matte-glass back.',
      image: 'https://www.apple.com/in/iphone-16-pro/images/overview/product-viewer/iphone-pro/all_colors__fdpduog7urm2_large.jpg'
    },
    {
      title: 'Pro camera system',
      subtitle: 'Close‑up. Far out. All‑around fantastic.',
      description: 'The 48MP Main camera captures stunning detail and color. Ultra Wide and Telephoto cameras expand your creative possibilities.',
      image: 'https://www.apple.com/v/iphone-16-pro/f/images/overview/product-stories/design/recycle__bjo9ezsrw6vm_large.jpg'
    },
    {
      title: 'Action Button',
      subtitle: 'One button. Countless possibilities.',
      description: 'The customizable Action Button can instantly launch your most-used feature.',
      image: 'https://www.apple.com/v/iphone-16-pro/f/images/overview/media-card/highlights_camera_control_endframe__dnpy5lekpmwm_large.jpg'
    }
  ];

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const getCurrentColorImage = () => {
    const color = colors.find(c => c.name === selectedColor);
    return color?.image || colors[0].image;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleBuyClick = () => {
    scrollToTop();
    setTimeout(() => {
      navigate('/home');
    }, 500); // Wait for scroll animation to complete
  };

  const handleLearnMoreClick = () => {
    scrollToTop();
    setTimeout(() => {
      navigate('/home');
    }, 500); // Wait for scroll animation to complete
  };

  const handleAddToCartClick = () => {
    scrollToTop();
    // Add to cart functionality can be added here
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = () => setIsVideoPlaying(true);
      const handlePause = () => setIsVideoPlaying(false);
      
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      
      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            poster=""
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>


        {/* Video Controls */}
        <div className="absolute bottom-8 right-8 flex space-x-4 z-20">
          <motion.button
            onClick={handleVideoToggle}
            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
          </motion.button>
          <motion.button
            onClick={handleMuteToggle}
            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-sf-pro font-bold mb-6"
            initial={{ opacity: 0, y: 100 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            iPhone
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-sf-pro font-medium mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Forged in titanium.
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl font-sf-pro font-light mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            iPhone 15 Pro. Forged in titanium and featuring the groundbreaking A18 Pro chip, a customizable Action Button, and the most powerful iPhone camera system ever.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              onClick={handleBuyClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-sf-pro font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy
            </motion.button>
            <motion.button
              onClick={handleLearnMoreClick}
              className="text-blue-400 hover:text-blue-300 text-lg font-sf-pro font-medium border-b border-blue-400 hover:border-blue-300 transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              Learn more
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </motion.div>
      </motion.section>

      {/* Color Selection - Apple Style */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-sf-pro font-bold mb-6 tracking-tight">
              Take a closer look.
            </h2>
          </motion.div>

          {/* Color Picker Row */}
          <motion.div
            className="flex justify-center items-center space-x-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {colors.map((color, index) => (
              <motion.button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`relative w-14 h-14 rounded-full border-2 transition-all duration-300 ${
                  selectedColor === color.name 
                    ? 'border-white scale-110 shadow-lg' 
                    : 'border-gray-500 hover:border-gray-300 hover:scale-105'
                }`}
                style={{ backgroundColor: color.color }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: selectedColor === color.name ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {selectedColor === color.name && (
                  <motion.div
                    className="absolute -inset-1 rounded-full border border-white/50"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Color Name */}
          <motion.div
            className="text-center mb-16"
            key={selectedColor}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-sf-pro font-medium text-gray-300">
              {selectedColor}
            </h3>
          </motion.div>

          {/* Large Product Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative max-w-4xl w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={getCurrentColorImage()}
                alt={selectedColor}
                className="w-full h-auto object-contain"
                key={selectedColor}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Storage Selection */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-sf-pro font-bold mb-4">
              How much storage do you need?
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {storageOptions.map((storage, index) => (
              <motion.button
                key={storage}
                onClick={() => setSelectedStorage(storage)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedStorage === storage
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-2xl font-sf-pro font-bold mb-2">{storage}</div>
                <div className="text-gray-400 text-sm">
                  {storage === '128GB' && 'Perfect for everyday use'}
                  {storage === '256GB' && 'Great for photos and videos'}
                  {storage === '512GB' && 'Ideal for content creators'}
                  {storage === '1TB' && 'Maximum storage capacity'}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <motion.h3
                  className="text-4xl md:text-6xl font-sf-pro font-bold mb-4"
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>
                <motion.h4
                  className="text-xl md:text-2xl font-sf-pro font-medium mb-6 text-gray-300"
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {feature.subtitle}
                </motion.h4>
                <motion.p
                  className="text-lg text-gray-400 leading-relaxed"
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
              </div>
              <motion.div
                className={`aspect-square rounded-3xl overflow-hidden ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Purchase Section */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-sf-pro font-bold mb-8">
              Get your iPhone 15 Pro
            </h2>
            <div className="bg-gray-900 rounded-3xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-sf-pro font-semibold mb-2">Model</h4>
                  <p className="text-gray-400">{selectedModel}</p>
                </div>
                <div>
                  <h4 className="font-sf-pro font-semibold mb-2">Color</h4>
                  <p className="text-gray-400">{selectedColor}</p>
                </div>
                <div>
                  <h4 className="font-sf-pro font-semibold mb-2">Storage</h4>
                  <p className="text-gray-400">{selectedStorage}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                onClick={handleAddToCartClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-sf-pro font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart - ₹1,34,900
              </motion.button>
              <motion.button
                onClick={handleLearnMoreClick}
                className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-12 py-4 rounded-full text-lg font-sf-pro font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IPhoneProductPage;