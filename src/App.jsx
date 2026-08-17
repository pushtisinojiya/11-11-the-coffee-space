import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CupCustomizerModal from './components/CupCustomizerModal';
import ReservationModal from './components/ReservationModal';
import Toast from './components/Toast';

// Dedicated Page Views (Events page removed as requested)
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import GalleryPage from './pages/GalleryPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [customizingItem, setCustomizingItem] = useState(null);
  const [bookingConfirmation, setBookingConfirmation] = useState(null);
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const handleOpenCustomizer = (item) => {
    // If no item passed (e.g. from Order Now button), default to Signature 11:11 Latte
    if (!item) {
      setCustomizingItem({
        id: 'special-latte',
        name: '11:11 Signature Swan Latte',
        price: 220,
        description: 'Single-estate washed Arabica from Attikan Estate, textured with velvety micro-foam in our signature swan rosetta.'
      });
    } else {
      setCustomizingItem(item);
    }
  };

  const handleCloseCustomizer = () => {
    setCustomizingItem(null);
  };

  const handleAddToOrder = (order) => {
    setCustomizingItem(null);
    showToast(`☕ Added ${order.itemName} (${order.size}, ${order.milk}, ${order.sweetener}) — ${order.totalFormatted} to your coffee tray!`, 'success');
  };

  const handleBookingSubmit = (booking) => {
    setBookingConfirmation(booking);
  };

  const handleCloseBooking = () => {
    setBookingConfirmation(null);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-root">
        {/* Skip Navigation Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Global Site Header */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage onCustomizeItem={handleOpenCustomizer} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage onCustomizeItem={handleOpenCustomizer} />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/contact" element={<ContactPage onBookingSubmit={handleBookingSubmit} showToast={showToast} />} />
          </Routes>
        </main>

        {/* Global Site Footer */}
        <Footer showToast={showToast} />

        {/* Shared Interactive Modals */}
        <CupCustomizerModal
          item={customizingItem}
          onClose={handleCloseCustomizer}
          onAddToOrder={handleAddToOrder}
        />

        <ReservationModal
          bookingDetails={bookingConfirmation}
          onClose={handleCloseBooking}
        />

        {/* Global Toast Alert Notifications */}
        <Toast toasts={toasts} />
      </div>
    </BrowserRouter>
  );
}
