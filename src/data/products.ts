import { Product, HeroSection } from '../types/product';

export const heroSections: HeroSection[] = [
  {
    id: 'iphone-collection',
    title: 'iPhone',
    subtitle: 'The ultimate iPhone experience.',
    description: 'Discover the complete iPhone lineup. From the powerful iPhone 15 Pro to the essential iPhone SE.',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backgroundColor: '#000000',
    textColor: '#ffffff',
    ctaText: 'Learn more',
    ctaLink: '/iphone'
  }
];

export const products: Product[] = [
  // iPhone Products
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    tagline: 'Titanium. So strong. So light. So Pro.',
    price: 134900,
    originalPrice: 149900,
    image: 'https://iplanet.one/cdn/shop/files/iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1695435375&width=823',
    images: [
      'https://iplanet.one/cdn/shop/files/iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1695435375&width=823',
      'https://iplanet.one/cdn/shop/files/iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1_alt__en-IN.jpg?v=1695435379&width=600',
      'https://iplanet.one/cdn/shop/files/iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-2__en-IN.jpg?v=1695435381&width=600'
    ],
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    category: 'iphone',
    isNew: true,
    description: 'iPhone 15 Pro. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action Button, and the most powerful iPhone camera system ever.',
    specifications: [
      '6.1-inch Super Retina XDR display',
      'A17 Pro chip with 6-core GPU',
      'Pro camera system (48MP Main, 12MP Ultra Wide, 12MP Telephoto)',
      'Up to 29 hours video playback',
      'Face ID for secure authentication'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 2847
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    tagline: 'New camera. New design. Newphoria.',
    price: 79900,
    image: 'https://iplanet.one/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1695427876&width=600',
    images: [
      'https://iplanet.one/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1695427876&width=600',
      'https://iplanet.one/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1_alt__en-IN.jpg?v=1695427879&width=600'
    ],
    colors: ['Pink', 'Yellow', 'Green', 'Blue', 'Black'],
    category: 'iphone',
    isNew: true,
    description: 'iPhone 15. Dynamic Island comes to iPhone 15. The 48MP Main camera captures stunning detail and color.',
    specifications: [
      '6.1-inch Super Retina XDR display',
      'A16 Bionic chip',
      'Advanced dual-camera system (48MP Main, 12MP Ultra Wide)',
      'Up to 26 hours video playback',
      'Face ID for secure authentication'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 1923
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    tagline: 'Big and bigger.',
    price: 69900,
    originalPrice: 79900,
    image: 'https://iplanet.one/cdn/shop/files/iPhone_14_Blue_PDP_Image_Position-1A__WWEN.jpg?v=1691142210&width=600',
    images: [
      'https://iplanet.one/cdn/shop/files/iPhone_14_Blue_PDP_Image_Position-1A__WWEN.jpg?v=1691142210&width=600'
    ],
    colors: ['Blue', 'Purple', 'Midnight', 'Starlight', 'Red'],
    category: 'iphone',
    description: 'iPhone 14. With the most impressive dual-camera system on iPhone. Capture stunning photos in all kinds of light.',
    specifications: [
      '6.1-inch Super Retina XDR display',
      'A15 Bionic chip',
      'Advanced dual-camera system',
      'Up to 26 hours video playback',
      'Face ID for secure authentication'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 3421
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    tagline: 'Your new superpower.',
    price: 59900,
    originalPrice: 69900,
    image: 'https://iplanet.one/cdn/shop/files/IMG-112075_550x_aa708f20-f7e8-4b9c-ab09-9fd55b1ba20f.webp?v=1716794122&width=600',
    images: [
      'https://iplanet.one/cdn/shop/files/IMG-112075_550x_aa708f20-f7e8-4b9c-ab09-9fd55b1ba20f.webp?v=1716794122&width=600'
    ],
    colors: ['Pink', 'Blue', 'Midnight', 'Starlight', 'Red'],
    category: 'iphone',
    description: 'iPhone 13. The most advanced dual-camera system ever on iPhone. Lightning-fast A15 Bionic chip.',
    specifications: [
      '6.1-inch Super Retina XDR display',
      'A15 Bionic chip',
      'Advanced dual-camera system',
      'Up to 19 hours video playback',
      'Face ID for secure authentication'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 5672
  },
  {
    id: 'iphone-se',
    name: 'iPhone SE',
    tagline: 'Lots to love. Less to spend.',
    price: 43900,
    image: 'https://iplanet.one/cdn/shop/files/iPhone_SE3_Starlight_PDP_Image_Position-1A__en-US_5eeddc15-3457-4154-ad71-fea2ea8bbd74.jpg?v=1691140077&width=600',
    images: [
      'https://iplanet.one/cdn/shop/files/iPhone_SE3_Starlight_PDP_Image_Position-1A__en-US_5eeddc15-3457-4154-ad71-fea2ea8bbd74.jpg?v=1691140077&width=600'
    ],
    colors: ['Midnight', 'Starlight', 'Red'],
    category: 'iphone',
    description: 'iPhone SE. All the essentials in the most affordable iPhone. Featuring A15 Bionic, the same chip as iPhone 13.',
    specifications: [
      '4.7-inch Retina HD display',
      'A15 Bionic chip',
      'Single 12MP camera',
      'Up to 15 hours video playback',
      'Touch ID for secure authentication'
    ],
    inStock: true,
    rating: 4.3,
    reviews: 2134
  },

  // Mac Products
  {
    id: 'macbook-pro-14',
    name: 'MacBook Pro 14"',
    tagline: 'Mind-blowing. Head-turning.',
    price: 199900,
    image: 'https://iplanet.one/cdn/shop/files/MacBook_Pro_16-inch_M4_Pro_or_Max_chip_Silver_PDP_Image_Position_1__en-IN_1605f002-f82c-4fcb-a21e-b6657e2afe5a.jpg?v=1730312503&width=600',
    images: [
      'https://iplanet.one/cdn/shop/files/MacBook_Pro_16-inch_M4_Pro_or_Max_chip_Silver_PDP_Image_Position_1__en-IN_1605f002-f82c-4fcb-a21e-b6657e2afe5a.jpg?v=1730312503&width=600',
      'https://iplanet.one/cdn/shop/files/MacBook_Pro_16-inch_M4_Pro_or_Max_chip_Silver_PDP_Image_Position_2__en-IN_a8c9b4a7-c5b8-4b8f-b01e-0633c7f4b086.jpg?v=1730312505&width=600'
    ],
    colors: ['Space Gray', 'Silver'],
    category: 'mac',
    isNew: true,
    description: 'MacBook Pro 14". The most powerful MacBook Pro ever is here. With M3, M3 Pro, or M3 Max chips for demanding workflows.',
    specifications: [
      '14.2-inch Liquid Retina XDR display',
      'M3 Pro or M3 Max chip',
      'Up to 128GB unified memory',
      'Up to 8TB SSD storage',
      'Three Thunderbolt 4 ports'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1456
  },
  {
    id: 'macbook-air-15',
    name: 'MacBook Air 15"',
    tagline: 'Impressively big. Impossibly thin.',
    price: 134900,
    image: 'https://iplanet.one/cdn/shop/files/IMG-16739618_3a74f24c-0012-4e0e-bc5f-28e40a74369d.jpg?v=1741187921&width=600',
    images: [
      'https://iplanet.one/cdn/shop/files/IMG-16739618_3a74f24c-0012-4e0e-bc5f-28e40a74369d.jpg?v=1741187921&width=600'
    ],
    colors: ['Midnight', 'Starlight', 'Space Gray', 'Silver'],
    category: 'mac',
    isNew: true,
    description: 'MacBook Air 15". The world\'s thinnest 15-inch laptop. Supercharged by M2.',
    specifications: [
      '15.3-inch Liquid Retina display',
      'M2 chip with 8-core CPU',
      'Up to 24GB unified memory',
      'Up to 2TB SSD storage',
      'Two Thunderbolt ports'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 987
  },
  {
    id: 'macbook-air-13',
    name: 'MacBook Air 13"',
    tagline: 'Supercharged by M2.',
    price: 114900,
    originalPrice: 124900,
    image: 'https://iplanet.one/cdn/shop/files/r1620_Space_Gray_PDP_Image_Position-1_Avail__en-IN.jpg?v=1691143498&width=600',
    images: [
      'https://iplanet.one/cdn/shop/files/r1620_Space_Gray_PDP_Image_Position-1_Avail__en-IN.jpg?v=1691143498&width=600'
    ],
    colors: ['Midnight', 'Starlight', 'Space Gray', 'Silver'],
    category: 'mac',
    description: 'MacBook Air 13". Redesigned around M2. More portable than ever.',
    specifications: [
      '13.6-inch Liquid Retina display',
      'M2 chip with 8-core CPU',
      'Up to 24GB unified memory',
      'Up to 2TB SSD storage',
      'Two Thunderbolt ports'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 2341
  },
  {
    id: 'imac-24',
    name: 'iMac 24"',
    tagline: 'Say hello.',
    price: 134900,
    image: 'https://iplanet.one/cdn/shop/files/r1620_Space_Gray_PDP_Image_Position-1_Avail__en-IN.jpg?v=1691143498&width=600',
    images: [
      'https://iplanet.one/cdn/shop/files/r1620_Space_Gray_PDP_Image_Position-1_Avail__en-IN.jpg?v=1691143498&width=600'
    ],
    colors: ['Blue', 'Green', 'Pink', 'Silver', 'Yellow', 'Orange', 'Purple'],
    category: 'mac',
    description: 'iMac 24". Inspired by the best of Mac. Powered by M1.',
    specifications: [
      '24-inch 4.5K Retina display',
      'M1 chip with 8-core CPU',
      'Up to 16GB unified memory',
      'Up to 2TB SSD storage',
      'Two Thunderbolt / USB 4 ports'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 1789
  },

  // iPad Products
  {
    id: 'ipad-pro-12',
    name: 'iPad Pro 12.9"',
    tagline: 'Supercharged by M2.',
    price: 112900,
    image: 'https://iplanet.one/cdn/shop/files/iPad_Pro_13_M4_Cellular_Space_Black_PDP_Image_Position_1b__en-IN.jpg?v=1716472181&width=600',
    images: [
      'https://iplanet.one/cdn/shop/files/iPad_Pro_13_M4_Cellular_Space_Black_PDP_Image_Position_1b__en-IN.jpg?v=1716472181&width=600'
    ],
    colors: ['Space Gray', 'Silver'],
    category: 'ipad',
    isNew: true,
    description: 'iPad Pro 12.9". The ultimate iPad experience with M2 chip and Liquid Retina XDR display.',
    specifications: [
      '12.9-inch Liquid Retina XDR display',
      'M2 chip with 8-core CPU',
      'Up to 16GB RAM',
      'Up to 2TB storage',
      'Thunderbolt / USB 4 connector'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 1234
  },
  {
    id: 'ipad-air',
    name: 'iPad Air',
    tagline: 'Light. Bright. Full of might.',
    price: 59900,
    image: 'https://iplanet.one/cdn/shop/files/iPad_mini_WiFi_Purple_PDP_Image_Position_2__en-IN.jpg?v=1729009226&width=600',
    images: [
      'https://iplanet.one/cdn/shop/files/iPad_mini_WiFi_Purple_PDP_Image_Position_2__en-IN.jpg?v=1729009226&width=600'
    ],
    colors: ['Space Gray', 'Pink', 'Purple', 'Blue', 'Starlight'],
    category: 'ipad',
    description: 'iPad Air. Serious performance in a thin and light design.',
    specifications: [
      '10.9-inch Liquid Retina display',
      'M1 chip with 8-core CPU',
      'Up to 256GB storage',
      'USB-C connector',
      'Compatible with Apple Pencil (2nd generation)'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 2156
  },

  // Apple Watch Products
  {
    id: 'apple-watch-series-9',
    name: 'Apple Watch Ultra 2',
    tagline: 'Smarter. Brighter. Mightier.',
    price: 85402,
    image: 'https://iplanet.one/cdn/shop/files/Apple_Watch_Series_10_42mm_LTE_Jet_Black_Aluminium_Sport_Loop_Ink_PDP_Image_Position_1__en-IN_62f53a32-7f73-42ec-94bc-20ff6d2d4f92.jpg?v=1727254768&width=600',
    images: [
      'https://iplanet.one/cdn/shop/files/Apple_Watch_Series_10_42mm_LTE_Jet_Black_Aluminium_Sport_Loop_Ink_PDP_Image_Position_1__en-IN_62f53a32-7f73-42ec-94bc-20ff6d2d4f92.jpg?v=1727254768&width=600'
    ],
    colors: ['Pink', 'Midnight', 'Starlight', 'Silver', 'Red'],
    category: 'watch',
    isNew: true,
    description: 'Apple Watch Series 9. The most advanced Apple Watch yet, featuring the new S9 chip.',
    specifications: [
      'Always-On Retina display',
      'S9 SiP with 64-bit dual-core processor',
      'Double Tap gesture',
      'Blood Oxygen app',
      'ECG app'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 2341
  },
  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    tagline: 'Next-level adventure.',
    price: 89900,
    image: 'https://iplanet.one/cdn/shop/files/Apple_Watch_Series_10_42mm_LTE_Rose_Gold_Aluminium_Sport_Band_Light_Blush_PDP_Image_Position_1__en-IN_b4b3f38e-c161-495b-a63e-da083c840896.jpg?v=1727255044&width=600',
    images: [
      'https://iplanet.one/cdn/shop/files/Apple_Watch_Series_10_42mm_LTE_Rose_Gold_Aluminium_Sport_Band_Light_Blush_PDP_Image_Position_1__en-IN_b4b3f38e-c161-495b-a63e-da083c840896.jpg?v=1727255044&width=600'
    ],
    colors: ['Natural'],
    category: 'watch',
    isNew: true,
    description: 'Apple Watch Ultra 2. The most rugged and capable Apple Watch pushes boundaries again.',
    specifications: [
      '49mm titanium case',
      'Always-On Retina display up to 3000 nits',
      'S9 SiP with 64-bit dual-core processor',
      'Up to 36 hours battery life',
      'Water resistant to 100 meters'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 876
  },

  // AirPods Products
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro (2nd generation)',
    tagline: 'Adaptive Audio. Now playing.',
    price: 24900,
    image: 'https://www.apple.com/v/airpods-4/f/images/overview/bento-gallery/bento_case_open__63kccmu775u6_xsmall.jpg',
    images: [
      'https://www.apple.com/v/airpods-4/f/images/overview/bento-gallery/bento_case_open__63kccmu775u6_xsmall.jpg'
    ],
    colors: ['White'],
    category: 'airpods',
    isNew: true,
    description: 'AirPods Pro (2nd generation). Featuring Adaptive Audio, Personalized Spatial Audio, and a new level of Active Noise Cancellation.',
    specifications: [
      'Active Noise Cancellation',
      'Adaptive Audio',
      'Personalized Spatial Audio',
      'Up to 6 hours listening time',
      'MagSafe Charging Case'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 3456
  },
  {
    id: 'airpods-3',
    name: 'AirPods (3rd generation)',
    tagline: 'All-new design. Spatial Audio.',
    price: 20900,
    originalPrice: 22900,
    image: 'https://iplanet.one/cdn/shop/files/1_428ddb92-3f6c-4ec7-a4e5-afc16b176183.jpg?v=1722406941',
    images: [
      'https://iplanet.one/cdn/shop/files/1_428ddb92-3f6c-4ec7-a4e5-afc16b176183.jpg?v=1722406941'
    ],
    colors: ['White'],
    category: 'airpods',
    description: 'AirPods (3rd generation). Featuring Spatial Audio and longer battery life.',
    specifications: [
      'Personalized Spatial Audio',
      'Adaptive EQ',
      'Up to 6 hours listening time',
      'Lightning Charging Case',
      'Sweat and water resistant'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 2134
  },

  // TV & Home Products
  {
    id: 'apple-tv-4k',
    name: 'Apple TV 4K',
    tagline: 'The Apple experience you love. Now on the big screen.',
    price: 14900,
    image: 'https://iplanet.one/cdn/shop/files/r1588_PDP_Image_Avail_Position-1__en-IN_73f8cd0d-e732-4fe3-b948-39bdf5c5cf3f_550x.jpg?v=1691163639',
    images: [
      'https://iplanet.one/cdn/shop/files/r1588_PDP_Image_Avail_Position-1__en-IN_73f8cd0d-e732-4fe3-b948-39bdf5c5cf3f_550x.jpg?v=1691163639'
    ],
    colors: ['Black'],
    category: 'tv-home',
    description: 'Apple TV 4K. Brings the best shows, movies, sports, and live TV together with your favorite Apple devices and services.',
    specifications: [
      'A15 Bionic chip',
      '4K High Frame Rate HDR',
      'Dolby Vision and Dolby Atmos',
      'Siri Remote included',
      'Wi-Fi 6 and Bluetooth 5.0'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 1543
  },
  {
    id: 'homepod',
    name: 'HomePod',
    tagline: 'Profound sound.',
    price: 32900,
    image: 'https://iplanet.one/cdn/shop/files/HomePod_mini_Blue_PDP_Image_Position-1__GBEN_550x.jpg?v=1691163778',
    images: [
      'https://iplanet.one/cdn/shop/files/HomePod_mini_Blue_PDP_Image_Position-1__GBEN_550x.jpg?v=1691163778'
    ],
    colors: ['White', 'Midnight'],
    category: 'tv-home',
    description: 'HomePod. Delivers stunning audio quality and the intelligence of Siri to create a whole new way to interact with music.',
    specifications: [
      'High-excursion woofer',
      'Five tweeters',
      'S7 chip',
      'Spatial Audio',
      'Siri built-in'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 987
  },

  // Accessories
  {
    id: 'magic-keyboard',
    name: 'AirTag',
    tagline: 'Magic at your AirTag.',
    price: 4900,
    image: 'https://iplanet.one/cdn/shop/files/MX532.png?v=1691163551&width=600',
    images: [
      'https://iplanet.one/cdn/shop/files/MX532.png?v=1691163551&width=600'
    ],
    colors: ['White', 'Black'],
    category: 'accessories',
    description: 'Magic Keyboard. An incredibly comfortable and precise typing experience.',
    specifications: [
      'Scissor mechanism',
      'Lightning connector',
      'Rechargeable battery',
      'Bluetooth connectivity',
      'Compatible with Mac and iPad'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 2341
  },
  {
    id: 'apple-pencil',
    name: 'Apple Pencil (2nd generation)',
    tagline: 'Dream it up. Jot it down.',
    price: 12900,
    image: 'https://iplanet.one/cdn/shop/files/apple-pencil-usb-c_MUWA3.png?v=1697553378&width=600',
    images: [
      'https://iplanet.one/cdn/shop/files/apple-pencil-usb-c_MUWA3.png?v=1697553378&width=600'
    ],
    colors: ['White'],
    category: 'accessories',
    description: 'Apple Pencil (2nd generation). The tool that can turn the iPad into your notepad, canvas, or just about anything you need it to be.',
    specifications: [
      'Pixel-perfect precision',
      'Tilt and pressure sensitivity',
      'Magnetic attachment',
      'Wireless charging',
      'Double-tap to switch tools'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 1876
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'store') {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};