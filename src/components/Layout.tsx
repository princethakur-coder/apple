import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sf-pro">
      <Header />
      <main className="pt-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;