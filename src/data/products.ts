import { Product, HeroSection } from '../types/product';

export const heroSections: HeroSection[] = [
  {
    id: '1',
    title: 'iPhone 15 Pro',
    subtitle: 'Titanium. So strong. So light. So Pro.',
    description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action Button, and the most powerful iPhone camera system ever.',
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backgroundColor: '#000000',
    textColor: '#ffffff',
    ctaText: 'Learn more',
    ctaLink: '/iphone'
  },
  {
    id: '2',
    title: 'MacBook Air',
    subtitle: 'Lean into M3.',
    description: 'The world\'s most popular laptop is now even better with the incredible performance of the M3 chip.',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backgroundColor: '#f5f5f7',
    textColor: '#1d1d1f',
    ctaText: 'Learn more',
    ctaLink: '/mac'
  }
];

export const products: Product[] = [
  // iPhone Products
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    tagline: 'The ultimate iPhone experience',
    price: 1199,
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    category: 'iphone',
    isNew: true,
    description: 'The ultimate iPhone experience with titanium design, A17 Pro chip, and advanced camera system.',
    specifications: ['6.7-inch Super Retina XDR display', 'A17 Pro chip', 'Pro camera system', 'Up to 29 hours video playback'],
    inStock: true,
    rating: 4.8,
    reviews: 1247
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    tagline: 'Titanium. So strong. So light. So Pro.',
    price: 999,
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    category: 'iphone',
    isNew: true,
    description: 'Pro performance with titanium design and A17 Pro chip.',
    specifications: ['6.1-inch Super Retina XDR display', 'A17 Pro chip', 'Pro camera system', 'Up to 23 hours video playback'],
    inStock: true,
    rating: 4.7,
    reviews: 892
  },
  {
    id: 'iphone-15-plus',
    name: 'iPhone 15 Plus',
    tagline: 'Big and colorful',
    price: 899,
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Pink', 'Yellow', 'Green', 'Blue', 'Black'],
    category: 'iphone',
    isNew: true,
    description: 'All the essential features in a larger size.',
    specifications: ['6.7-inch Super Retina XDR display', 'A16 Bionic chip', 'Advanced dual-camera system', 'Up to 26 hours video playback'],
    inStock: true,
    rating: 4.6,
    reviews: 634
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    tagline: 'New camera. New design. Newphoria.',
    price: 799,
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Pink', 'Yellow', 'Green', 'Blue', 'Black'],
    category: 'iphone',
    isNew: true,
    description: 'The essential iPhone with advanced camera system.',
    specifications: ['6.1-inch Super Retina XDR display', 'A16 Bionic chip', 'Advanced dual-camera system', 'Up to 20 hours video playback'],
    inStock: true,
    rating: 4.5,
    reviews: 1156
  },
  {
    id: 'iphone-14-pro-max',
    name: 'iPhone 14 Pro Max',
    tagline: 'Pro beyond measure',
    price: 1099,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Deep Purple', 'Gold', 'Silver', 'Space Black'],
    category: 'iphone',
    description: 'The previous generation Pro Max with incredible performance.',
    specifications: ['6.7-inch Super Retina XDR display', 'A16 Bionic chip', 'Pro camera system', 'Up to 29 hours video playback'],
    inStock: true,
    rating: 4.7,
    reviews: 2341
  },
  {
    id: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    tagline: 'Pro performance',
    price: 899,
    originalPrice: 999,
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Deep Purple', 'Gold', 'Silver', 'Space Black'],
    category: 'iphone',
    description: 'Pro features in a compact design.',
    specifications: ['6.1-inch Super Retina XDR display', 'A16 Bionic chip', 'Pro camera system', 'Up to 23 hours video playback'],
    inStock: true,
    rating: 4.6,
    reviews: 1876
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    tagline: 'Big and bigger',
    price: 699,
    originalPrice: 799,
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Blue', 'Purple', 'Midnight', 'Starlight', 'Product RED'],
    category: 'iphone',
    description: 'The essential iPhone experience.',
    specifications: ['6.1-inch Super Retina XDR display', 'A15 Bionic chip', 'Advanced dual-camera system', 'Up to 20 hours video playback'],
    inStock: true,
    rating: 4.4,
    reviews: 3421
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    tagline: 'Your new superpower',
    price: 599,
    originalPrice: 699,
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Pink', 'Blue', 'Midnight', 'Starlight', 'Product RED'],
    category: 'iphone',
    description: 'Advanced dual-camera system and A15 Bionic chip.',
    specifications: ['6.1-inch Super Retina XDR display', 'A15 Bionic chip', 'Dual-camera system', 'Up to 19 hours video playback'],
    inStock: true,
    rating: 4.3,
    reviews: 4567
  },
  {
    id: 'iphone-se',
    name: 'iPhone SE',
    tagline: 'Lots to love. Less to spend.',
    price: 429,
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Midnight', 'Starlight', 'Product RED'],
    category: 'iphone',
    description: 'The most affordable iPhone with A15 Bionic chip.',
    specifications: ['4.7-inch Retina HD display', 'A15 Bionic chip', 'Single camera system', 'Up to 15 hours video playback'],
    inStock: true,
    rating: 4.2,
    reviews: 2134
  },
  {
    id: 'iphone-12',
    name: 'iPhone 12',
    tagline: 'Blast past fast',
    price: 499,
    originalPrice: 599,
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Purple', 'Blue', 'Green', 'Black', 'White', 'Product RED'],
    category: 'iphone',
    description: '5G speed and A14 Bionic chip.',
    specifications: ['6.1-inch Super Retina XDR display', 'A14 Bionic chip', 'Dual-camera system', 'Up to 17 hours video playback'],
    inStock: true,
    rating: 4.1,
    reviews: 5432
  },

  // Mac Products
  {
    id: 'macbook-air-m3',
    name: 'MacBook Air 13" M3',
    tagline: 'Lean into M3',
    price: 1099,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Midnight', 'Starlight', 'Silver', 'Space Gray'],
    category: 'mac',
    isNew: true,
    description: 'Supercharged by M3 chip for incredible performance.',
    specifications: ['13.6-inch Liquid Retina display', 'Apple M3 chip', 'Up to 18 hours battery life', '8GB unified memory'],
    inStock: true,
    rating: 4.8,
    reviews: 892
  },
  {
    id: 'macbook-air-15-m3',
    name: 'MacBook Air 15" M3',
    tagline: 'Impressively big. Impossibly thin.',
    price: 1299,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Midnight', 'Starlight', 'Silver', 'Space Gray'],
    category: 'mac',
    isNew: true,
    description: 'The spacious 15-inch MacBook Air with M3 chip.',
    specifications: ['15.3-inch Liquid Retina display', 'Apple M3 chip', 'Up to 18 hours battery life', '8GB unified memory'],
    inStock: true,
    rating: 4.7,
    reviews: 634
  },
  {
    id: 'macbook-pro-14-m3',
    name: 'MacBook Pro 14" M3',
    tagline: 'Mind-blowing. Head-turning.',
    price: 1599,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Space Black', 'Silver'],
    category: 'mac',
    isNew: true,
    description: 'Pro performance with M3 chip and Liquid Retina XDR display.',
    specifications: ['14.2-inch Liquid Retina XDR display', 'Apple M3 chip', 'Up to 22 hours battery life', '8GB unified memory'],
    inStock: true,
    rating: 4.9,
    reviews: 456
  },
  {
    id: 'macbook-pro-16-m3',
    name: 'MacBook Pro 16" M3',
    tagline: 'The most advanced chips. The most pro laptop.',
    price: 2499,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Space Black', 'Silver'],
    category: 'mac',
    isNew: true,
    description: 'Ultimate pro performance with M3 Max chip.',
    specifications: ['16.2-inch Liquid Retina XDR display', 'Apple M3 Max chip', 'Up to 22 hours battery life', '36GB unified memory'],
    inStock: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: 'imac-24-m3',
    name: 'iMac 24" M3',
    tagline: 'Packed with more juice.',
    price: 1299,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Blue', 'Green', 'Pink', 'Silver', 'Yellow', 'Orange', 'Purple'],
    category: 'mac',
    isNew: true,
    description: 'Vibrant colors and M3 performance in an all-in-one.',
    specifications: ['24-inch 4.5K Retina display', 'Apple M3 chip', '8GB unified memory', 'Two Thunderbolt ports'],
    inStock: true,
    rating: 4.6,
    reviews: 789
  },
  {
    id: 'mac-mini-m2',
    name: 'Mac mini M2',
    tagline: 'More muscle. More hustle.',
    price: 599,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Silver'],
    category: 'mac',
    description: 'Compact desktop with M2 chip performance.',
    specifications: ['Apple M2 chip', '8GB unified memory', 'Two Thunderbolt 4 ports', 'Wi-Fi 6E'],
    inStock: true,
    rating: 4.5,
    reviews: 567
  },
  {
    id: 'mac-studio-m2',
    name: 'Mac Studio M2',
    tagline: 'Supercharged for pros.',
    price: 1999,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Silver'],
    category: 'mac',
    description: 'Pro desktop performance with M2 Max or M2 Ultra.',
    specifications: ['Apple M2 Max chip', '32GB unified memory', 'Four Thunderbolt 4 ports', '10Gb Ethernet'],
    inStock: true,
    rating: 4.8,
    reviews: 123
  },
  {
    id: 'mac-pro-m2',
    name: 'Mac Pro M2',
    tagline: 'A beast of a workstation.',
    price: 6999,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Silver'],
    category: 'mac',
    description: 'Ultimate pro workstation with M2 Ultra chip.',
    specifications: ['Apple M2 Ultra chip', '64GB unified memory', 'Eight Thunderbolt 4 ports', 'PCIe expansion'],
    inStock: true,
    rating: 4.9,
    reviews: 45
  },
  {
    id: 'macbook-air-m2',
    name: 'MacBook Air 13" M2',
    tagline: 'Don\'t take it lightly.',
    price: 999,
    originalPrice: 1099,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Midnight', 'Starlight', 'Silver', 'Space Gray'],
    category: 'mac',
    description: 'Previous generation MacBook Air with M2 chip.',
    specifications: ['13.6-inch Liquid Retina display', 'Apple M2 chip', 'Up to 18 hours battery life', '8GB unified memory'],
    inStock: true,
    rating: 4.7,
    reviews: 1234
  },
  {
    id: 'macbook-pro-13-m2',
    name: 'MacBook Pro 13" M2',
    tagline: 'Pro anywhere.',
    price: 1299,
    originalPrice: 1399,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Space Gray', 'Silver'],
    category: 'mac',
    description: 'Compact pro laptop with M2 chip and Touch Bar.',
    specifications: ['13.3-inch Retina display', 'Apple M2 chip', 'Up to 20 hours battery life', '8GB unified memory'],
    inStock: true,
    rating: 4.4,
    reviews: 876
  },

  // iPad Products
  {
    id: 'ipad-pro-12-m4',
    name: 'iPad Pro 12.9" M4',
    tagline: 'Unbelievably thin. Incredibly powerful.',
    price: 1099,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Silver', 'Space Black'],
    category: 'ipad',
    isNew: true,
    description: 'The ultimate iPad experience with M4 chip and stunning display.',
    specifications: ['12.9-inch Liquid Retina XDR display', 'Apple M4 chip', 'Up to 10 hours battery life', '8GB RAM'],
    inStock: true,
    rating: 4.8,
    reviews: 456
  },
  {
    id: 'ipad-pro-11-m4',
    name: 'iPad Pro 11" M4',
    tagline: 'Thin. Light. Epic.',
    price: 799,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Silver', 'Space Black'],
    category: 'ipad',
    isNew: true,
    description: 'Pro performance in a compact design with M4 chip.',
    specifications: ['11-inch Liquid Retina display', 'Apple M4 chip', 'Up to 10 hours battery life', '8GB RAM'],
    inStock: true,
    rating: 4.7,
    reviews: 634
  },
  {
    id: 'ipad-air-11-m2',
    name: 'iPad Air 11" M2',
    tagline: 'Fresh Air.',
    price: 599,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Blue', 'Purple', 'Starlight', 'Space Gray'],
    category: 'ipad',
    isNew: true,
    description: 'Powerful, colorful, and wonderfully versatile.',
    specifications: ['11-inch Liquid Retina display', 'Apple M2 chip', 'Up to 10 hours battery life', '8GB RAM'],
    inStock: true,
    rating: 4.6,
    reviews: 789
  },
  {
    id: 'ipad-air-13-m2',
    name: 'iPad Air 13" M2',
    tagline: 'Big screen. Big performance.',
    price: 799,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Blue', 'Purple', 'Starlight', 'Space Gray'],
    category: 'ipad',
    isNew: true,
    description: 'The largest iPad Air with M2 chip performance.',
    specifications: ['13-inch Liquid Retina display', 'Apple M2 chip', 'Up to 10 hours battery life', '8GB RAM'],
    inStock: true,
    rating: 4.5,
    reviews: 345
  },
  {
    id: 'ipad-10th-gen',
    name: 'iPad 10th Generation',
    tagline: 'Lovable. Drawable. Magical.',
    price: 349,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Blue', 'Pink', 'Yellow', 'Silver'],
    category: 'ipad',
    description: 'The colorful, all-screen iPad for everyday tasks.',
    specifications: ['10.9-inch Liquid Retina display', 'A14 Bionic chip', 'Up to 10 hours battery life', '4GB RAM'],
    inStock: true,
    rating: 4.4,
    reviews: 1234
  },
  {
    id: 'ipad-9th-gen',
    name: 'iPad 9th Generation',
    tagline: 'Lots to love. Easy on the wallet.',
    price: 329,
    originalPrice: 349,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Space Gray', 'Silver'],
    category: 'ipad',
    description: 'The most affordable iPad with great performance.',
    specifications: ['10.2-inch Retina display', 'A13 Bionic chip', 'Up to 10 hours battery life', '3GB RAM'],
    inStock: true,
    rating: 4.3,
    reviews: 2345
  },
  {
    id: 'ipad-mini-6th-gen',
    name: 'iPad mini 6th Generation',
    tagline: 'Mega power. Mini size.',
    price: 499,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Purple', 'Starlight', 'Pink', 'Space Gray'],
    category: 'ipad',
    description: 'The most portable iPad with full-size performance.',
    specifications: ['8.3-inch Liquid Retina display', 'A15 Bionic chip', 'Up to 10 hours battery life', '4GB RAM'],
    inStock: true,
    rating: 4.5,
    reviews: 876
  },
  {
    id: 'ipad-pro-12-m2',
    name: 'iPad Pro 12.9" M2',
    tagline: 'Supercharged by M2.',
    price: 999,
    originalPrice: 1099,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Silver', 'Space Gray'],
    category: 'ipad',
    description: 'Previous generation iPad Pro with M2 chip.',
    specifications: ['12.9-inch Liquid Retina XDR display', 'Apple M2 chip', 'Up to 10 hours battery life', '8GB RAM'],
    inStock: true,
    rating: 4.7,
    reviews: 1567
  },
  {
    id: 'ipad-pro-11-m2',
    name: 'iPad Pro 11" M2',
    tagline: 'Supercharged by M2.',
    price: 699,
    originalPrice: 799,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Silver', 'Space Gray'],
    category: 'ipad',
    description: 'Previous generation iPad Pro with M2 chip.',
    specifications: ['11-inch Liquid Retina display', 'Apple M2 chip', 'Up to 10 hours battery life', '8GB RAM'],
    inStock: true,
    rating: 4.6,
    reviews: 1234
  },
  {
    id: 'ipad-air-5th-gen',
    name: 'iPad Air 5th Generation',
    tagline: 'Light. Bright. Full of might.',
    price: 499,
    originalPrice: 599,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Space Gray', 'Starlight', 'Pink', 'Purple', 'Blue'],
    category: 'ipad',
    description: 'Previous generation iPad Air with M1 chip.',
    specifications: ['10.9-inch Liquid Retina display', 'Apple M1 chip', 'Up to 10 hours battery life', '8GB RAM'],
    inStock: true,
    rating: 4.5,
    reviews: 2134
  },

  // Apple Watch Products
  {
    id: 'apple-watch-series-9-45mm',
    name: 'Apple Watch Series 9 45mm',
    tagline: 'Smarter. Brighter. Mightier.',
    price: 429,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Midnight', 'Starlight', 'Silver', 'Product RED', 'Pink'],
    category: 'watch',
    isNew: true,
    description: 'The most advanced Apple Watch with Double Tap gesture.',
    specifications: ['45mm case', 'Always-On Retina display', 'S9 chip', 'Double Tap gesture', 'Up to 18 hours battery'],
    inStock: true,
    rating: 4.8,
    reviews: 1234
  },
  {
    id: 'apple-watch-series-9-41mm',
    name: 'Apple Watch Series 9 41mm',
    tagline: 'Smarter. Brighter. Mightier.',
    price: 399,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Midnight', 'Starlight', 'Silver', 'Product RED', 'Pink'],
    category: 'watch',
    isNew: true,
    description: 'The most advanced Apple Watch in a smaller size.',
    specifications: ['41mm case', 'Always-On Retina display', 'S9 chip', 'Double Tap gesture', 'Up to 18 hours battery'],
    inStock: true,
    rating: 4.7,
    reviews: 987
  },
  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    tagline: 'Next level adventure.',
    price: 799,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Natural Titanium'],
    category: 'watch',
    isNew: true,
    description: 'The most rugged and capable Apple Watch ever.',
    specifications: ['49mm titanium case', 'Always-On Retina display', 'S9 chip', 'Up to 36 hours battery', 'Water resistant to 100m'],
    inStock: true,
    rating: 4.9,
    reviews: 456
  },
  {
    id: 'apple-watch-se-44mm',
    name: 'Apple Watch SE 44mm',
    tagline: 'A great deal to love.',
    price: 279,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Midnight', 'Starlight', 'Silver'],
    category: 'watch',
    description: 'Essential Apple Watch features at a great price.',
    specifications: ['44mm case', 'Retina display', 'S8 chip', 'Up to 18 hours battery', 'Water resistant to 50m'],
    inStock: true,
    rating: 4.5,
    reviews: 1567
  },
  {
    id: 'apple-watch-se-40mm',
    name: 'Apple Watch SE 40mm',
    tagline: 'A great deal to love.',
    price: 249,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Midnight', 'Starlight', 'Silver'],
    category: 'watch',
    description: 'Essential Apple Watch features in a smaller size.',
    specifications: ['40mm case', 'Retina display', 'S8 chip', 'Up to 18 hours battery', 'Water resistant to 50m'],
    inStock: true,
    rating: 4.4,
    reviews: 1234
  },
  {
    id: 'apple-watch-series-8-45mm',
    name: 'Apple Watch Series 8 45mm',
    tagline: 'A healthy leap ahead.',
    price: 329,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Midnight', 'Starlight', 'Silver', 'Product RED'],
    category: 'watch',
    description: 'Previous generation with advanced health features.',
    specifications: ['45mm case', 'Always-On Retina display', 'S8 chip', 'Temperature sensing', 'Up to 18 hours battery'],
    inStock: true,
    rating: 4.6,
    reviews: 2345
  },
  {
    id: 'apple-watch-series-8-41mm',
    name: 'Apple Watch Series 8 41mm',
    tagline: 'A healthy leap ahead.',
    price: 299,
    originalPrice: 369,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Midnight', 'Starlight', 'Silver', 'Product RED'],
    category: 'watch',
    description: 'Previous generation with advanced health features.',
    specifications: ['41mm case', 'Always-On Retina display', 'S8 chip', 'Temperature sensing', 'Up to 18 hours battery'],
    inStock: true,
    rating: 4.5,
    reviews: 1876
  },
  {
    id: 'apple-watch-ultra',
    name: 'Apple Watch Ultra',
    tagline: 'Adventure awaits.',
    price: 699,
    originalPrice: 799,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Natural Titanium'],
    category: 'watch',
    description: 'First generation Ultra with rugged design.',
    specifications: ['49mm titanium case', 'Always-On Retina display', 'S8 chip', 'Up to 36 hours battery', 'Water resistant to 100m'],
    inStock: true,
    rating: 4.8,
    reviews: 789
  },
  {
    id: 'apple-watch-series-7-45mm',
    name: 'Apple Watch Series 7 45mm',
    tagline: 'The future of health is on your wrist.',
    price: 279,
    originalPrice: 329,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Midnight', 'Starlight', 'Green', 'Blue', 'Product RED'],
    category: 'watch',
    description: 'Previous generation with larger display.',
    specifications: ['45mm case', 'Always-On Retina display', 'S7 chip', 'Fast charging', 'Up to 18 hours battery'],
    inStock: true,
    rating: 4.4,
    reviews: 3456
  },
  {
    id: 'apple-watch-series-7-41mm',
    name: 'Apple Watch Series 7 41mm',
    tagline: 'The future of health is on your wrist.',
    price: 249,
    originalPrice: 299,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Midnight', 'Starlight', 'Green', 'Blue', 'Product RED'],
    category: 'watch',
    description: 'Previous generation with larger display.',
    specifications: ['41mm case', 'Always-On Retina display', 'S7 chip', 'Fast charging', 'Up to 18 hours battery'],
    inStock: true,
    rating: 4.3,
    reviews: 2789
  },

  // AirPods Products
  {
    id: 'airpods-pro-2nd-gen',
    name: 'AirPods Pro (2nd generation)',
    tagline: 'Adaptive Audio. Now playing.',
    price: 249,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4790594/pexels-photo-4790594.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White'],
    category: 'airpods',
    isNew: true,
    description: 'Personalized spatial audio with dynamic head tracking.',
    specifications: ['Active Noise Cancellation', 'Adaptive Transparency', 'Personalized Spatial Audio', 'Up to 6 hours listening time'],
    inStock: true,
    rating: 4.8,
    reviews: 2345
  },
  {
    id: 'airpods-3rd-gen',
    name: 'AirPods (3rd generation)',
    tagline: 'All-new design. Spatial Audio.',
    price: 179,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White'],
    category: 'airpods',
    description: 'Contoured design and Spatial Audio experience.',
    specifications: ['Spatial Audio', 'Adaptive EQ', 'Sweat and water resistant', 'Up to 6 hours listening time'],
    inStock: true,
    rating: 4.6,
    reviews: 1876
  },
  {
    id: 'airpods-2nd-gen',
    name: 'AirPods (2nd generation)',
    tagline: 'Effortless. Wireless. Magical.',
    price: 129,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White'],
    category: 'airpods',
    description: 'The classic AirPods with great sound and convenience.',
    specifications: ['H1 chip', 'Hey Siri', 'Quick access to Siri', 'Up to 5 hours listening time'],
    inStock: true,
    rating: 4.4,
    reviews: 5432
  },
  {
    id: 'airpods-max',
    name: 'AirPods Max',
    tagline: 'Computational audio. Listen, it\'s powerful.',
    price: 549,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Space Gray', 'Silver', 'Sky Blue', 'Green', 'Pink'],
    category: 'airpods',
    description: 'Over-ear headphones with computational audio.',
    specifications: ['Active Noise Cancellation', 'Transparency mode', 'Spatial Audio', 'Up to 20 hours listening time'],
    inStock: true,
    rating: 4.7,
    reviews: 987
  },
  {
    id: 'airpods-pro-1st-gen',
    name: 'AirPods Pro (1st generation)',
    tagline: 'Magic like you\'ve never heard.',
    price: 199,
    originalPrice: 249,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White'],
    category: 'airpods',
    description: 'First generation AirPods Pro with noise cancellation.',
    specifications: ['Active Noise Cancellation', 'Transparency mode', 'Customizable fit', 'Up to 4.5 hours listening time'],
    inStock: true,
    rating: 4.5,
    reviews: 3456
  },
  {
    id: 'beats-studio-buds',
    name: 'Beats Studio Buds',
    tagline: 'True wireless. True freedom.',
    price: 149,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Black', 'White', 'Red'],
    category: 'airpods',
    description: 'Beats wireless earbuds with powerful sound.',
    specifications: ['Active Noise Cancelling', 'Transparency mode', 'IPX4 rated', 'Up to 8 hours listening time'],
    inStock: true,
    rating: 4.3,
    reviews: 1234
  },
  {
    id: 'beats-fit-pro',
    name: 'Beats Fit Pro',
    tagline: 'Secure-fit wireless earbuds.',
    price: 199,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Black', 'White', 'Stone Purple', 'Sage Gray'],
    category: 'airpods',
    description: 'Secure-fit earbuds for workouts and daily use.',
    specifications: ['Active Noise Cancelling', 'Spatial Audio', 'IPX4 rated', 'Up to 6 hours listening time'],
    inStock: true,
    rating: 4.4,
    reviews: 876
  },
  {
    id: 'beats-solo3',
    name: 'Beats Solo3 Wireless',
    tagline: 'Wireless on-ear headphones.',
    price: 199,
    originalPrice: 299,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Black', 'White', 'Red', 'Blue'],
    category: 'airpods',
    description: 'Wireless on-ear headphones with long battery life.',
    specifications: ['Apple W1 chip', 'Fast Fuel charging', 'Adjustable fit', 'Up to 40 hours battery life'],
    inStock: true,
    rating: 4.2,
    reviews: 2345
  },
  {
    id: 'beats-studio3',
    name: 'Beats Studio3 Wireless',
    tagline: 'Wireless over-ear headphones.',
    price: 349,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Matte Black', 'White', 'Red', 'Blue'],
    category: 'airpods',
    description: 'Over-ear headphones with noise cancelling.',
    specifications: ['Pure Adaptive Noise Cancelling', 'Apple W1 chip', 'Fast Fuel charging', 'Up to 22 hours battery life'],
    inStock: true,
    rating: 4.3,
    reviews: 1567
  },
  {
    id: 'powerbeats-pro',
    name: 'Powerbeats Pro',
    tagline: 'Totally wireless earphones.',
    price: 249,
    originalPrice: 299,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Black', 'Ivory', 'Moss', 'Navy'],
    category: 'airpods',
    description: 'Wireless earphones designed for workouts.',
    specifications: ['Apple H1 chip', 'Sweat and water resistant', 'Adjustable ear hooks', 'Up to 9 hours listening time'],
    inStock: true,
    rating: 4.1,
    reviews: 2134
  },

  // TV & Home Products
  {
    id: 'apple-tv-4k-3rd-gen',
    name: 'Apple TV 4K (3rd generation)',
    tagline: 'The Apple experience you love. Now on the big screen.',
    price: 129,
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Black'],
    category: 'tv-home',
    isNew: true,
    description: 'The most powerful Apple TV ever with A15 Bionic chip.',
    specifications: ['A15 Bionic chip', '4K HDR and Dolby Vision', 'Dolby Atmos audio', 'Siri Remote included'],
    inStock: true,
    rating: 4.7,
    reviews: 1234
  },
  {
    id: 'homepod-2nd-gen',
    name: 'HomePod (2nd generation)',
    tagline: 'Profound sound.',
    price: 299,
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White', 'Midnight'],
    category: 'tv-home',
    isNew: true,
    description: 'Immersive, high-fidelity audio and smart home hub.',
    specifications: ['Room-filling sound', 'Spatial Audio', 'Siri built-in', 'Smart home hub'],
    inStock: true,
    rating: 4.6,
    reviews: 876
  },
  {
    id: 'homepod-mini',
    name: 'HomePod mini',
    tagline: 'Surprisingly big sound.',
    price: 99,
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White', 'Space Gray', 'Orange', 'Yellow', 'Blue'],
    category: 'tv-home',
    description: 'Compact smart speaker with great sound.',
    specifications: ['360-degree audio', 'Siri built-in', 'Smart home hub', 'Intercom feature'],
    inStock: true,
    rating: 4.4,
    reviews: 2345
  },
  {
    id: 'apple-tv-hd',
    name: 'Apple TV HD',
    tagline: 'All your TV. All in one place.',
    price: 149,
    originalPrice: 179,
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Black'],
    category: 'tv-home',
    description: 'Stream content in 1080p HD.',
    specifications: ['A8 chip', '1080p HD video', 'Siri Remote', 'AirPlay support'],
    inStock: true,
    rating: 4.2,
    reviews: 3456
  },
  {
    id: 'airtag',
    name: 'AirTag',
    tagline: 'Lose your knack for losing things.',
    price: 29,
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White'],
    category: 'tv-home',
    description: 'Keep track of your items with precision finding.',
    specifications: ['Precision Finding', 'Built-in speaker', 'Water resistant', 'Replaceable battery'],
    inStock: true,
    rating: 4.5,
    reviews: 4567
  },
  {
    id: 'airtag-4-pack',
    name: 'AirTag 4-pack',
    tagline: 'Lose your knack for losing things.',
    price: 99,
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White'],
    category: 'tv-home',
    description: 'Four AirTags for all your important items.',
    specifications: ['Precision Finding', 'Built-in speaker', 'Water resistant', 'Replaceable battery'],
    inStock: true,
    rating: 4.6,
    reviews: 1876
  },
  {
    id: 'apple-tv-4k-2nd-gen',
    name: 'Apple TV 4K (2nd generation)',
    tagline: 'The future of television.',
    price: 179,
    originalPrice: 199,
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Black'],
    category: 'tv-home',
    description: 'Previous generation Apple TV 4K.',
    specifications: ['A12 Bionic chip', '4K HDR and Dolby Vision', 'Dolby Atmos audio', 'Siri Remote'],
    inStock: true,
    rating: 4.5,
    reviews: 2134
  },
  {
    id: 'homepod-1st-gen',
    name: 'HomePod (1st generation)',
    tagline: 'The sound of home.',
    price: 199,
    originalPrice: 299,
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White', 'Space Gray'],
    category: 'tv-home',
    description: 'Original HomePod with rich, detailed sound.',
    specifications: ['High-excursion woofer', 'Seven tweeters', 'Siri built-in', 'Smart home hub'],
    inStock: false,
    rating: 4.3,
    reviews: 1567
  },
  {
    id: 'airport-extreme',
    name: 'AirPort Extreme',
    tagline: 'Fast Wi-Fi for everyone.',
    price: 199,
    originalPrice: 249,
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White'],
    category: 'tv-home',
    description: 'High-performance Wi-Fi base station.',
    specifications: ['802.11ac Wi-Fi', 'Simultaneous dual-band', 'Guest network', 'Time Machine support'],
    inStock: false,
    rating: 4.1,
    reviews: 987
  },
  {
    id: 'time-capsule',
    name: 'Time Capsule',
    tagline: 'Wireless backup for your Mac.',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White'],
    category: 'tv-home',
    description: 'Wireless hard drive and Wi-Fi base station.',
    specifications: ['2TB or 3TB storage', '802.11ac Wi-Fi', 'Time Machine backup', 'Guest network'],
    inStock: false,
    rating: 4.0,
    reviews: 654
  },

  // Accessories Products
  {
    id: 'magic-keyboard-ipad-pro-12',
    name: 'Magic Keyboard for iPad Pro 12.9"',
    tagline: 'Float above the keyboard.',
    price: 349,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White', 'Black'],
    category: 'accessories',
    isNew: true,
    description: 'Full-size keyboard with trackpad for iPad Pro.',
    specifications: ['Backlit keys', 'USB-C pass-through charging', 'Floating cantilever design', 'Multi-Touch trackpad'],
    inStock: true,
    rating: 4.6,
    reviews: 1234
  },
  {
    id: 'magic-keyboard-ipad-pro-11',
    name: 'Magic Keyboard for iPad Pro 11"',
    tagline: 'Float above the keyboard.',
    price: 299,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White', 'Black'],
    category: 'accessories',
    isNew: true,
    description: 'Full-size keyboard with trackpad for iPad Pro 11".',
    specifications: ['Backlit keys', 'USB-C pass-through charging', 'Floating cantilever design', 'Multi-Touch trackpad'],
    inStock: true,
    rating: 4.5,
    reviews: 987
  },
  {
    id: 'apple-pencil-2nd-gen',
    name: 'Apple Pencil (2nd generation)',
    tagline: 'Dream it up. Jot it down.',
    price: 129,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White'],
    category: 'accessories',
    description: 'Precision stylus for iPad Pro and iPad Air.',
    specifications: ['Pixel-perfect precision', 'Tilt and pressure sensitivity', 'Magnetic attachment', 'Wireless charging'],
    inStock: true,
    rating: 4.7,
    reviews: 2345
  },
  {
    id: 'apple-pencil-1st-gen',
    name: 'Apple Pencil (1st generation)',
    tagline: 'Dream it up. Jot it down.',
    price: 99,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White'],
    category: 'accessories',
    description: 'Precision stylus for iPad.',
    specifications: ['Pixel-perfect precision', 'Tilt and pressure sensitivity', 'Lightning charging', 'Replaceable tip'],
    inStock: true,
    rating: 4.4,
    reviews: 3456
  },
  {
    id: 'magic-mouse',
    name: 'Magic Mouse',
    tagline: 'It\'s magic in your hand.',
    price: 79,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White', 'Black'],
    category: 'accessories',
    description: 'Multi-Touch surface mouse.',
    specifications: ['Multi-Touch surface', 'Lightning charging', 'Laser tracking', 'Ambidextrous design'],
    inStock: true,
    rating: 4.2,
    reviews: 4567
  },
  {
    id: 'magic-trackpad',
    name: 'Magic Trackpad',
    tagline: 'Click has never felt this good.',
    price: 129,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White', 'Black'],
    category: 'accessories',
    description: 'Wireless trackpad with Force Touch.',
    specifications: ['Force Touch technology', 'Multi-Touch gestures', 'Lightning charging', 'Edge-to-edge glass surface'],
    inStock: true,
    rating: 4.3,
    reviews: 1876
  },
  {
    id: 'magic-keyboard',
    name: 'Magic Keyboard',
    tagline: 'Effortlessly magical.',
    price: 99,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['White', 'Black'],
    category: 'accessories',
    description: 'Wireless keyboard with numeric keypad.',
    specifications: ['Extended layout', 'Scissor mechanism', 'Lightning charging', 'Numeric keypad'],
    inStock: true,
    rating: 4.1,
    reviews: 2134
  },
  {
    id: 'studio-display',
    name: 'Studio Display',
    tagline: '5K Retina display.',
    price: 1599,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Silver'],
    category: 'accessories',
    description: '27-inch 5K Retina display with exceptional color accuracy.',
    specifications: ['27-inch 5K Retina display', 'A13 Bionic chip', '12MP Ultra Wide camera', 'Six-speaker sound system'],
    inStock: true,
    rating: 4.6,
    reviews: 567
  },
  {
    id: 'pro-display-xdr',
    name: 'Pro Display XDR',
    tagline: 'A sight to behold.',
    price: 4999,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Silver'],
    category: 'accessories',
    description: '32-inch 6K Retina display for pro workflows.',
    specifications: ['32-inch 6K Retina display', 'P3 wide color gamut', '1600 nits peak brightness', 'Thunderbolt 3'],
    inStock: true,
    rating: 4.8,
    reviews: 123
  },
  {
    id: 'thunderbolt-display',
    name: 'Thunderbolt Display',
    tagline: 'The ultimate docking experience.',
    price: 999,
    originalPrice: 1299,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Silver'],
    category: 'accessories',
    description: '27-inch LED-backlit display with Thunderbolt.',
    specifications: ['27-inch LED display', 'Thunderbolt connectivity', 'Built-in FaceTime HD camera', 'MagSafe charging'],
    inStock: false,
    rating: 4.2,
    reviews: 876
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};