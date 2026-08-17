import React, { useEffect } from 'react';

export default function ReservationModal({ bookingDetails, onClose }) {
  useEffect(() => {
    if (bookingDetails) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [bookingDetails]);

  if (!bookingDetails) return null;

  return (
    <div
      className="modal-overlay active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmModalTitle"
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) onClose();
      }}
    >
      <div className="modal-container" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }} aria-hidden="true">☕</div>
        <h3 id="confirmModalTitle" style={{ marginBottom: '0.75rem', color: 'var(--color-text-dark-coffee)' }}>
          Namaskara, {bookingDetails.name}! ☕
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          We have received your <strong>{bookingDetails.purposeLabel}</strong> request
          {bookingDetails.date ? <> for <strong>{bookingDetails.date}</strong></> : ''}. Our Indiranagar roastery team will reach out to{' '}
          <strong>{bookingDetails.email}</strong>
          {bookingDetails.phone ? <> or message on <strong>{bookingDetails.phone}</strong></> : ''} shortly to confirm your booking and seating!
        </p>
        <div
          style={{
            display: 'inline-block',
            padding: '6px 14px',
            background: 'var(--color-secondary-sage-light)',
            border: '1px dashed var(--color-secondary-sage)',
            borderRadius: 'var(--radius-md)',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: 'var(--color-primary-forest)',
            marginBottom: '2rem'
          }}
        >
          Reservation Code: #{bookingDetails.refCode}
        </div>
        <div>
          <button type="button" className="btn btn-primary" style={{ width: '100%' }} onClick={onClose}>
            Dhanyavadagalu / Great, Thank You!
          </button>
        </div>
      </div>
    </div>
  );
}
