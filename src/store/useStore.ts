import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Order, Product, ShippingAddress } from '../types/product';

interface StoreState {
  cart: CartItem[];
  orders: Order[];
  addToCart: (product: Product, color: string, quantity?: number) => void;
  removeFromCart: (productId: string, color: string) => void;
  updateQuantity: (productId: string, color: string, quantity: number) => void;
  clearCart: () => void;
  placeOrder: (shippingAddress: ShippingAddress, paymentMethod: 'card' | 'cash_on_delivery') => string;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      orders: [],
      
      addToCart: (product, color, quantity = 1) => {
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.product.id === product.id && item.selectedColor === color
          );
          
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.product.id === product.id && item.selectedColor === color
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          
          return {
            cart: [...state.cart, { product, selectedColor: color, quantity }],
          };
        });
      },
      
      removeFromCart: (productId, color) => {
        set((state) => ({
          cart: state.cart.filter(
            (item) => !(item.product.id === productId && item.selectedColor === color)
          ),
        }));
      },
      
      updateQuantity: (productId, color, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId, color);
          return;
        }
        
        set((state) => ({
          cart: state.cart.map((item) =>
            item.product.id === productId && item.selectedColor === color
              ? { ...item, quantity }
              : item
          ),
        }));
      },
      
      clearCart: () => set({ cart: [] }),
      
      placeOrder: (shippingAddress, paymentMethod = 'card') => {
        const orderId = `APL-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        const orderDate = new Date().toISOString();
        const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();
        
        const order: Order = {
          id: orderId,
          items: get().cart,
          total: get().getCartTotal(),
          status: 'processing',
          orderDate,
          estimatedDelivery,
          shippingAddress,
          paymentMethod,
        };
        
        set((state) => ({
          orders: [...state.orders, order],
          cart: [],
        }));
        
        return orderId;
      },
      
      getCartTotal: () => {
        return get().cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
      },
      
      getCartItemsCount: () => {
        return get().cart.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'apple-store',
    }
  )
);