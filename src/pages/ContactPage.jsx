import React from 'react';
import ContactSection from '../components/ContactSection';

export default function ContactPage({ onBookingSubmit, showToast }) {
  return (
    <div className="page-contact">
      {/* Hero Header */}
     
      {/* Main Contact & Reservation Section */}
      <ContactSection onBookingSubmit={onBookingSubmit} showToast={showToast} />
    </div>
  );
}
