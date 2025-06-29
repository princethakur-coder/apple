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
import ServicePage from './pages/servicePage';
import AccountPage from './pages/accountPage';
import AppleStorePage from './pages/ApplestorePage';
import BusinessPage from './pages/BusinessPage';
import EducationPage from './pages/EducationPage';
import HealthcarePage from './pages/HealthcarePage';
import ValuesPage from './pages/ValuePage';
import AboutPage from './pages/AboutPage';
import LegalPage from './pages/LegalPage';
import IPhoneProductPage from './pages/IphoneProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IPhoneProductPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/store" element={<CategoryPage />} />
          <Route path="/mac" element={<CategoryPage />} />
          <Route path="/ipad" element={<CategoryPage />} />
          <Route path="/iphone" element={<CategoryPage />} />
          <Route path="/iphone-product" element={<IPhoneProductPage />} />
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
          
          {/* Services Pages */}
          <Route path="/apple-music" element={<ServicePage service="apple-music" />} />
          <Route path="/apple-tv-plus" element={<ServicePage service="apple-tv-plus" />} />
          <Route path="/apple-fitness-plus" element={<ServicePage service="apple-fitness-plus" />} />
          <Route path="/apple-news-plus" element={<ServicePage service="apple-news-plus" />} />
          <Route path="/apple-arcade" element={<ServicePage service="apple-arcade" />} />
          <Route path="/icloud" element={<ServicePage service="icloud" />} />
          <Route path="/apple-one" element={<ServicePage service="apple-one" />} />
          <Route path="/apple-card" element={<ServicePage service="apple-card" />} />
          <Route path="/apple-books" element={<ServicePage service="apple-books" />} />
          <Route path="/apple-podcasts" element={<ServicePage service="apple-podcasts" />} />
          
          {/* Account Pages */}
          <Route path="/manage-your-apple-id" element={<AccountPage account="apple-id" />} />
          <Route path="/apple-store-account" element={<AccountPage account="store-account" />} />
          <Route path="/icloud-com" element={<AccountPage account="icloud" />} />
          
          {/* Apple Store Pages */}
          <Route path="/find-a-store" element={<AppleStorePage store="find-store" />} />
          <Route path="/genius-bar" element={<AppleStorePage store="genius-bar" />} />
          <Route path="/today-at-apple" element={<AppleStorePage store="today-at-apple" />} />
          <Route path="/apple-camp" element={<AppleStorePage store="apple-camp" />} />
          <Route path="/apple-store-app" element={<AppleStorePage store="store-app" />} />
          <Route path="/refurbished-and-clearance" element={<AppleStorePage store="refurbished" />} />
          <Route path="/financing" element={<AppleStorePage store="financing" />} />
          <Route path="/apple-trade-in" element={<AppleStorePage store="trade-in" />} />
          <Route path="/order-status" element={<AppleStorePage store="order-status" />} />
          <Route path="/shopping-help" element={<AppleStorePage store="shopping-help" />} />
          
          {/* Business Pages */}
          <Route path="/apple-and-business" element={<BusinessPage business="apple-business" />} />
          <Route path="/shop-for-business" element={<BusinessPage business="shop-business" />} />
          
          {/* Education Pages */}
          <Route path="/apple-and-education" element={<EducationPage education="apple-education" />} />
          <Route path="/shop-for-k-12" element={<EducationPage education="k12" />} />
          <Route path="/shop-for-college" element={<EducationPage education="college" />} />
          
          {/* Healthcare Pages */}
          <Route path="/apple-in-healthcare" element={<HealthcarePage healthcare="apple-healthcare" />} />
          <Route path="/health-on-apple-watch" element={<HealthcarePage healthcare="health-watch" />} />
          <Route path="/health-records-on-iphone" element={<HealthcarePage healthcare="health-records" />} />
          
          {/* Values Pages */}
          <Route path="/accessibility" element={<ValuesPage value="accessibility" />} />
          <Route path="/education" element={<ValuesPage value="education" />} />
          <Route path="/environment" element={<ValuesPage value="environment" />} />
          <Route path="/inclusion-and-diversity" element={<ValuesPage value="inclusion" />} />
          <Route path="/privacy" element={<ValuesPage value="privacy" />} />
          <Route path="/racial-equity-and-justice" element={<ValuesPage value="racial-equity" />} />
          <Route path="/supplier-responsibility" element={<ValuesPage value="supplier" />} />
          
          {/* About Pages */}
          <Route path="/newsroom" element={<AboutPage about="newsroom" />} />
          <Route path="/apple-leadership" element={<AboutPage about="leadership" />} />
          <Route path="/career-opportunities" element={<AboutPage about="careers" />} />
          <Route path="/investors" element={<AboutPage about="investors" />} />
          <Route path="/ethics-and-compliance" element={<AboutPage about="ethics" />} />
          <Route path="/events" element={<AboutPage about="events" />} />
          <Route path="/contact-apple" element={<AboutPage about="contact" />} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<LegalPage legal="privacy-policy" />} />
          <Route path="/terms-of-use" element={<LegalPage legal="terms-of-use" />} />
          <Route path="/sales-and-refunds" element={<LegalPage legal="sales-and-refunds" />} />
          <Route path="/legal" element={<LegalPage legal="legal" />} />
          <Route path="/sitemap" element={<LegalPage legal="sitemap" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;