import React, { useState, useEffect } from 'react';
import { getLiveOperatingStatus } from '../data/scheduleData';

export default function LocationHours() {
  const [liveStatus, setLiveStatus] = useState(getLiveOperatingStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveStatus(getLiveOperatingStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-py bg-body" id="location-hours">
      <div className="container">
        <div className="location-grid">
          {/* Left Column: Jamnagar Info & Timings */}
          <div className="location-info-card" style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border-card)', boxShadow: 'var(--shadow-card)' }}>
            <div className={`live-status-badge ${liveStatus.isOpen ? '' : 'closed'}`}>
              <span className={`status-dot ${liveStatus.isOpen ? '' : 'closed'}`} aria-hidden="true"></span>
              <span>{liveStatus.statusText}</span>
            </div>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>11:11 The Coffee Space (Jamnagar)</h2>
            <p style={{ color: 'var(--color-caramel)', fontWeight: '600', marginBottom: '1.5rem' }}>
              📍 6th Floor Rooftop, Above Bhavani Electronics, Near Jio Petroleum, Khodiyar Colony, Jamnagar, Gujarat 361006
            </p>

            <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Operating Hours</h3>
            <table className="hours-schedule-table">
              <tbody>
                <tr>
                  <td>Monday – Sunday</td>
                  <td>6:00 PM – 11:00 PM</td>
                </tr>
               
                <tr>
                 
                </tr>
              </tbody>
            </table>

            {/* <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Rooftop Highlights &amp; Amenities</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--color-text-secondary)' }}>
              <li> <strong>Panoramic Rooftop View:</strong> Overlooking the Jamnagar cityscape with open-air terrace seating</li>
              <li> <strong>Wood-Fired Kitchen:</strong> Freshly hand-stretched Neapolitan pizzas &amp; creamy pastas</li>
              <li> <strong>Cozy Indoor Dining:</strong> Air-conditioned glasshouse lounge with warm aesthetic lighting</li>
              <li> <strong>Fast Wi-Fi &amp; Power Outlets:</strong> Perfect for laptop work sessions and coffee dates</li>
              <li> <strong>Dedicated Parking:</strong> Ample two-wheeler &amp; four-wheeler parking in front of building</li>
            </ul> */}

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://maps.google.com/?q=11:11+The+Coffee+Space+Khodiyar+Colony+Jamnagar+Gujarat" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-text-link"
              >
                <span>Open in Google Maps</span>
                {/* <span aria-hidden="true">↗</span> */}
              </a>
      
              <a href="tel:+919825011110" className="btn-text-link">
                <span>Call Us: +91 98250 11110</span>
                
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Simulator for Jamnagar */}
          <div className="location-map-wrapper" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--color-border-card)', boxShadow: 'var(--shadow-card)', background: '#FFFFFF', minHeight: '480px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'var(--color-espresso)', color: '#FFF', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>📍 Khodiyar Colony, Jamnagar, Gujarat</span>
              <span style={{ fontSize: '0.8rem', background: 'var(--color-gold-accent)', color: '#2D1910', padding: '2px 8px', borderRadius: '4px', fontWeight: '700' }}>6th Floor Rooftop</span>
            </div>
            
            <iframe
              title="11:11 The Coffee Space Location in Jamnagar"
              src="https://maps.google.com/maps?q=Khodiyar+Colony+Jamnagar+Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, flex: 1 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
