import React, { useState } from 'react';
import { EVENTS_DATA } from '../data/eventsData';
import EventBookingModal from '../components/EventBookingModal';

export default function EventsPage({ showToast }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const categories = [
    { id: 'all', label: 'All Gatherings' },
    { id: 'Workshops', label: 'Coffee Masterclasses' },
    { id: 'Tasting', label: 'Cupping & Tasting' },
    { id: 'Music & Vibe', label: 'Live Acoustic & Music' },
    { id: 'Community', label: 'Community Meetups' }
  ];

  const filteredEvents = selectedCategory === 'all'
    ? EVENTS_DATA
    : EVENTS_DATA.filter((ev) => ev.category === selectedCategory);

  const handleOpenRSVP = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseRSVP = () => {
    setSelectedEvent(null);
  };

  const handleRSVPConfirm = (details) => {
    if (showToast) {
      showToast(`🎟️ Reserved ${details.tickets} seat(s) for "${details.eventTitle}"!`, 'success');
    }
  };

  return (
    <div className="page-events">
      {/* Hero Header */}
      <section className="page-hero-banner bg-cream">
        <div className="container">
          <div className="section-subtitle-marker">
            <span>•</span>
            <span>Gatherings &amp; Experiences</span>
            <span>•</span>
          </div>
          <h1>Events &amp; Coffee Masterclasses</h1>
          <p className="page-hero-sub">
            From hands-on barista training to Friday sunset acoustic vibes and estate cupping sessions — gather, learn, and sip together at 11:11.
          </p>
        </div>
      </section>

      {/* Events Filter & Grid */}
      <section className="section-py bg-body">
        <div className="container">
          {/* Category Tabs */}
          <div className="events-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-tab-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="events-cards-grid">
            {filteredEvents.map((event) => (
              <div key={event.id} className="event-item-card">
                <div className="event-item-img-wrap">
                  <img src={event.image} alt={event.title} loading="lazy" />
                  <span className="event-badge-pill">{event.badge}</span>
                  <div className="event-date-chip">
                    <span>{event.date.split(',')[0]}</span>
                    <strong>{event.date.split(',')[1]?.trim().slice(0, 6)}</strong>
                  </div>
                </div>

                <div className="event-item-body">
                  <div className="event-meta-row">
                    <span className="event-category-tag">{event.category}</span>
                    <span className="event-seats-tag">
                      🟢 {event.seatsLeft} seats remaining
                    </span>
                  </div>

                  <h2 className="event-card-title">{event.title}</h2>
                  <p className="event-instructor">
                    <strong>Lead:</strong> {event.instructor}
                  </p>
                  <p className="event-desc">{event.description}</p>

                  <div className="event-perks-box">
                    <strong>What's Included:</strong>
                    <ul>
                      {event.perks.map((perk, idx) => (
                        <li key={idx}>✓ {perk}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="event-card-footer">
                    <div className="event-fee-block">
                      <span className="event-fee-label">Registration</span>
                      <strong className="event-fee-val">{event.fee}</strong>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleOpenRSVP(event)}
                    >
                      <span>RSVP / Book Spot</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Modal */}
      {selectedEvent && (
        <EventBookingModal
          event={selectedEvent}
          onClose={handleCloseRSVP}
          onConfirm={handleRSVPConfirm}
          showToast={showToast}
        />
      )}
    </div>
  );
}
