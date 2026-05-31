import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function SiteLayout() {
  const [visible, setVisible] = useState(true);
  const [renderKey, setRenderKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => {
      window.scrollTo(0, 0);
      setRenderKey(k => k + 1);
      setVisible(true);
    }, 120);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main
        className="flex-1 pt-16 lg:pt-[72px]"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 180ms ease' }}
      >
        <Outlet key={renderKey} context={{}} />
      </main>
      <Footer />
    </div>
  );
}