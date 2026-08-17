import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

export default function Footer({ showToast }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    if (showToast) {
      showToast('☕ Welcome to the 11:11 Coffee Circle! Check your inbox for roast updates.', 'success');
    }
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Story */}
          <div className="footer-col footer-brand-col">
            <div style={{ marginBottom: '1.25rem' }}>
              <BrandLogo light={true} />
            </div>
            <p style={{ color: 'var(--color-text-light-muted)', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              A warm, community-driven specialty coffee roastery celebrating single-estate harvests, authentic decoctions, and unhurried connections.
            </p>
            
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Our Story</Link></li>
              <li><Link to="/menu">Coffee &amp; Bakery Menu</Link></li>
              <li><Link to="/gallery">Roastery Gallery</Link></li>
              <li><Link to="/location">Location &amp; Hours</Link></li>
              <li><Link to="/contact">Contact &amp; Reservations</Link></li>
            </ul>
          </div>

          {/* Opening Timings */}
          <div className="footer-col">
            <h4>Roastery Hours</h4>
            <ul className="footer-links" style={{ fontSize: '0.9rem', color: 'var(--color-text-light-muted)' }}>
              <li><strong>Mon – Fri:</strong> 7:30 AM – 10:30 PM</li>
              <li><strong>Sat – Sun:</strong> 7:00 AM – 11:00 PM</li>
              <li style={{ marginTop: '0.5rem', color: 'var(--color-gold-accent)' }}>
                First Pour &amp; Morning Bakery starts at 7:30 AM
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="footer-col">
            <h4>Stay Connected</h4>
            <p style={{ color: 'var(--color-text-light-muted)', fontSize: '0.88rem', marginBottom: '1rem' }}>
              Join our coffee collective for single estate release drops and brewing recipes.
            </p>
            <form onSubmit={handleSubscribe} className="footer-newsletter-form">
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="form-input"
                  style={{ background: 'rgba(255,255,255,0.1)', color: '#FFF', borderColor: 'rgba(255,255,255,0.2)', fontSize: '0.88rem' }}
                />
                <button type="submit" className="btn btn-primary" style={{ background: 'var(--color-gold-accent)', color: '#2D1910', padding: '0 1rem' }}>
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} 11:11 The Coffee Space. All rights reserved.</p>
          <p>Designed with care for coffee lovers everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
