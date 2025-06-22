export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  colors: string[];
  category: 'store' | 'mac' | 'ipad' | 'iphone' | 'watch' | 'airpods' | 'tv-home' | 'entertainment' | 'accessories' | 'support';
  isNew?: boolean;
  description: string;
  specifications: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'processing' | 'shipped' | 'delivered';
  orderDate: string;
  estimatedDelivery: string;
  shippingAddress: ShippingAddress;
  paymentMethod: 'card' | 'cash_on_delivery';
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface HeroSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  backgroundColor: string;
  textColor: string;
  ctaText: string;
  ctaLink: string;
}