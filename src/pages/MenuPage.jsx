import React from 'react';
import MenuSection from '../components/MenuSection';

export default function MenuPage({ onCustomizeItem }) {
  return (
    <div className="page-menu">
      {/* Hero Header */}
      <section className="page-hero-banner bg-cream">
        <div className="container">
          <div className="section-subtitle-marker">
           
          </div>
          <h1>Our Coffee and Bakery Menu</h1>
          <p className="page-hero-sub">
            From single-origin pour-overs and signature lattes to artisanal sourdough toasts and fresh morning pastries.
          </p>
        </div>
      </section>

      {/* Main Menu Section */}
      <MenuSection onCustomizeItem={onCustomizeItem} />
    </div>
  );
}
