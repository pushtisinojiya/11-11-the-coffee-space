import React from 'react';
import { Link } from 'react-router-dom';

export default function Highlights() {
  const storyCards = [
    {
      id: 'quality',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="7" ry="9" transform="rotate(-30 12 12)" />
          <path d="M12 4.5 C14 8, 10 16, 12 19.5" strokeDasharray="1 0" />
        </svg>
      ),
      title: 'Quality Coffee',
      description: 'We source the finest beans and brew them to perfection.'
    },
    {
      id: 'ambience',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <path d="M6 1v3M10 1v3M14 1v3"></path>
        </svg>
      ),
      title: 'Cozy Ambience',
      description: 'A space designed for comfort, creativity and conversations.'
    },
    {
      id: 'community',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      title: 'Community First',
      description: "We're more than a café, we're a community."
    }
  ];

  return (
    <section className="section-story-highlights" id="story-highlights">
      <div className="container">
        <div className="story-highlights-grid">
          {/* Left Column: Story Copy */}
          <div className="story-content-box">
            
            <h2 className="story-heading">
              More Than<br />
              Just Coffee
            </h2>

            <p className="story-description">
              11:11 The Coffee Space is a community driven coffee shop where every cup tells a story. We believe in quality, comfort, and connections.
            </p>

            <div className="story-action-wrap">
              <Link to="/about" className="btn btn-secondary btn-story-pill">
                <span>Read Our Story</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Pillar Feature Cards */}
          <div className="story-cards-row">
            {storyCards.map((card) => (
              <div key={card.id} className="story-feature-card">
                <div className="story-card-icon-pill" aria-hidden="true">
                  {card.icon}
                </div>
                <h3 className="story-card-title">{card.title}</h3>
                <p className="story-card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
