import React from 'react';
import LocationHours from '../components/LocationHours';

export default function LocationPage() {
  return (
    <div className="page-location">
      {/* Hero Header */}
      <section className="page-hero-banner bg-cream">
        <div className="container">
          <div className="section-subtitle-marker">
           
          </div>
          <h1>Location and Operating Hours</h1>
          <p className="page-hero-sub">
            Nestled on 12th Main Road, Indiranagar. Open early for your morning coffee and late for relaxed evening conversations.
          </p>
        </div>
      </section>

      {/* Main Location & Hours Component */}
      <LocationHours />
    </div>
  );
}
