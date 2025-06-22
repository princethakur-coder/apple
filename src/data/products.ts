import { Product, HeroSection } from '../types/product';

export const heroSections: HeroSection[] = [
  {
    id: 'iphone-15-pro',
    title: 'iPhone 15 Pro',
    subtitle: 'Titanium. So strong. So light. So Pro.',
    description: 'The most advanced iPhone ever, featuring the powerful A17 Pro chip and revolutionary titanium design.',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backgroundColor: '#000000',
    textColor: '#ffffff',
    ctaText: 'Learn more',
    ctaLink: '/product/iphone-15-pro'
  },
  {
    id: 'macbook-pro',
    title: 'MacBook Pro',
    subtitle: 'Mind-blowing. Head-turning.',
    description: 'The most powerful MacBook Pro ever is here. With the blazing-fast M3 chip for demanding workflows.',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backgroundColor: '#1d1d1f',
    textColor: '#ffffff',
    ctaText: 'Learn more',
    ctaLink: '/product/macbook-pro-14'
  },
  {
    id: 'apple-watch-series-9',
    title: 'Apple Watch Series 9',
    subtitle: 'Smarter. Brighter. Mightier.',
    description: 'The most advanced Apple Watch yet, with the new S9 chip and Double Tap gesture.',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backgroundColor: '#f5f5f7',
    textColor: '#1d1d1f',
    ctaText: 'Learn more',
    ctaLink: '/product/apple-watch-series-9'
  }
];

export const products: Product[] = [
  // iPhone Products
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    tagline: 'Titanium. So strong. So light. So Pro.',
    price: 999,
    originalPrice: 1099,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    price: 799,
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    price: 699,
    originalPrice: 799,
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    price: 599,
    originalPrice: 699,
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    price: 429,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    price: 1999,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
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
    price: 1299,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
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
    price: 1099,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    price: 1299,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
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
  {
    id: 'mac-studio',
    name: 'Mac Studio',
    tagline: 'Supercharged by M2 Max and M2 Ultra.',
    price: 1999,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Silver'],
    category: 'mac',
    description: 'Mac Studio. Outrageous performance. Extensive connectivity. Compact design.',
    specifications: [
      'M2 Max or M2 Ultra chip',
      'Up to 192GB unified memory',
      'Up to 8TB SSD storage',
      'Extensive I/O including Thunderbolt 4',
      'Wi-Fi 6E and Bluetooth 5.3'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 654
  },

  // iPad Products
  {
    id: 'ipad-pro-12',
    name: 'iPad Pro 12.9"',
    tagline: 'Supercharged by M2.',
    price: 1099,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    price: 599,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800'
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
  {
    id: 'ipad-10',
    name: 'iPad',
    tagline: 'Lovable. Drawable. Magical.',
    price: 449,
    originalPrice: 499,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Blue', 'Pink', 'Yellow', 'Silver'],
    category: 'ipad',
    description: 'iPad. The colorful, all-screen iPad for the things you do every day.',
    specifications: [
      '10.9-inch Liquid Retina display',
      'A14 Bionic chip',
      'Up to 256GB storage',
      'USB-C connector',
      'Compatible with Apple Pencil (1st generation)'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 3421
  },
  {
    id: 'ipad-mini',
    name: 'iPad mini',
    tagline: 'Mega power. Mini size.',
    price: 499,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Space Gray', 'Pink', 'Purple', 'Starlight'],
    category: 'ipad',
    description: 'iPad mini. The full iPad experience in an ultraportable design.',
    specifications: [
      '8.3-inch Liquid Retina display',
      'A15 Bionic chip',
      'Up to 256GB storage',
      'USB-C connector',
      'Compatible with Apple Pencil (2nd generation)'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 1876
  },

  // Apple Watch Products
  {
    id: 'apple-watch-series-9',
    name: 'Apple Watch Series 9',
    tagline: 'Smarter. Brighter. Mightier.',
    price: 399,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    price: 799,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
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
  {
    id: 'apple-watch-se',
    name: 'Apple Watch SE',
    tagline: 'A great deal to love.',
    price: 249,
    originalPrice: 299,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Midnight', 'Starlight', 'Silver'],
    category: 'watch',
    description: 'Apple Watch SE. All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe.',
    specifications: [
      'Retina display',
      'S8 SiP with 64-bit dual-core processor',
      'Crash Detection',
      'Water resistant to 50 meters',
      'Family Setup'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 1987
  },

  // AirPods Products
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro (2nd generation)',
    tagline: 'Adaptive Audio. Now playing.',
    price: 249,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    price: 179,
    originalPrice: 199,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800'
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
  {
    id: 'airpods-max',
    name: 'AirPods Max',
    tagline: 'Computational audio meets luxury.',
    price: 549,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Space Gray', 'Silver', 'Sky Blue', 'Green', 'Pink'],
    category: 'airpods',
    description: 'AirPods Max. A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.',
    specifications: [
      'High-fidelity audio',
      'Active Noise Cancellation',
      'Personalized Spatial Audio',
      'Up to 20 hours listening time',
      'Premium materials'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 1543
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