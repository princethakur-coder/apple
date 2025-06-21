import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import SearchPage from './pages/SearchPage';
import OrdersPage from './pages/OrdersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/store" element={<CategoryPage />} />
          <Route path="/mac" element={<CategoryPage />} />
          <Route path="/ipad" element={<CategoryPage />} />
          <Route path="/iphone" element={<CategoryPage />} />
          <Route path="/watch" element={<CategoryPage />} />
          <Route path="/airpods" element={<CategoryPage />} />
          <Route path="/tv-home" element={<CategoryPage />} />
          <Route path="/entertainment" element={<CategoryPage />} />
          <Route path="/accessories" element={<CategoryPage />} />
          <Route path="/support" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation/:orderId" element={<OrderConfirmationPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;