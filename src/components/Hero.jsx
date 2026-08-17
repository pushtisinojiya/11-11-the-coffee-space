import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero({ onExploreMenu }) {
  return (
    <section className="hero-section" id="hero">
      {/* Full-width edge-to-edge Hero Banner */}
      <div className="hero-card-banner">
        <div className="hero-content-wrapper">
          <div className="section-subtitle-marker">
            <span>•</span>
            <span>WELCOME TO</span>
            <span>•</span>
          </div>

          <h1 className="hero-headline">
            Your Coffee.<br />
            Your Space.
          </h1>

          <p className="hero-lead-text">
            A warm space to relax, connect and create memories over the perfect cup.
          </p>

          <div className="hero-actions-row">
            <Link to="/menu" className="btn btn-primary btn-hero-explore">
              <span>Explore Our Menu</span>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </Link>

            <Link to="/about" className="btn-text-link">
              <span>Learn More</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
