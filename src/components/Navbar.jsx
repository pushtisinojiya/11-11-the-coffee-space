import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const closeMobile = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="siteHeader">
        <div className="container header-container">
          {/* Brand Logo with Wings & Halo */}
          <Link to="/" className="brand-logo" aria-label="11:11 The Coffee Space Home" onClick={closeMobile}>
            <BrandLogo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="nav-desktop" aria-label="Primary Navigation">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About Us
            </NavLink>
            <NavLink to="/menu" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Menu
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Gallery
            </NavLink>
            <NavLink to="/location" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Location &amp; Hours
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="header-actions">
            <button 
              type="button" 
              className={`hamburger-btn ${isMobileOpen ? 'active' : ''}`} 
              onClick={toggleMobile} 
              aria-label="Toggle mobile navigation menu" 
              aria-expanded={isMobileOpen}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`mobile-nav-backdrop ${isMobileOpen ? 'open' : ''}`} 
        onClick={closeMobile} 
        aria-hidden="true" 
      />
      <aside className={`mobile-nav-drawer ${isMobileOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-nav-header">
          <BrandLogo light={true} />
          <button 
            type="button" 
            className="mobile-close-btn" 
            onClick={closeMobile}
            aria-label="Close navigation"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-nav-list">
          <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile} end>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            About Us
          </NavLink>
          <NavLink to="/menu" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Menu
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Gallery
          </NavLink>
          <NavLink to="/location" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Location &amp; Hours
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Contact &amp; Reserve Table
          </NavLink>
        </nav>

        <div className="mobile-nav-footer">
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light-muted)', textAlign: 'center' }}>
            📍 6th Floor Rooftop, Khodiyar Colony, Jamnagar, Gujarat
          </p>
        </div>
      </aside>
    </>
  );
}
