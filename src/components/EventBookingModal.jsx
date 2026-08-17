// import React, { useState } from 'react';

// export default function EventBookingModal({ event, onClose, onConfirm, showToast }) {
//   const [tickets, setTickets] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     dietaryNotes: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   if (!event) return null;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.phone) {
//       if (showToast) showToast('Please provide your name and phone number to reserve.', 'error');
//       return;
//     }

//     setIsSubmitted(true);
//     if (onConfirm) {
//       onConfirm({
//         eventTitle: event.title,
//         eventDate: event.date,
//         eventTime: event.time,
//         tickets,
//         ...formData
//       });
//     }
//   };

//   return (
//     <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="event-modal-title">
//       <div className="modal-content event-modal-container" onClick={(e) => e.stopPropagation()}>
//         <button className="modal-close-btn" onClick={onClose} aria-label="Close event booking modal">✕</button>

//         {!isSubmitted ? (
//           <div>
//             <div className="event-modal-header">
//               <span className="section-badge">{event.category}</span>
//               <h2 id="event-modal-title" style={{ fontSize: '1.4rem', marginTop: '0.25rem' }}>{event.title}</h2>
//               <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
//                 🗓️ {event.date} • ⏰ {event.time}
//               </p>
//               <div style={{ marginTop: '0.5rem', fontWeight: '600', color: 'var(--color-espresso)' }}>
//                 Fee: {event.fee}
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="event-booking-form">
//               <div className="form-group" style={{ marginBottom: '1rem' }}>
//                 <label className="form-label">Number of Attendees</label>
//                 <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
//                   {[1, 2, 3, 4].map((num) => (
//                     <button
//                       key={num}
//                       type="button"
//                       className={`btn-pill-select ${tickets === num ? 'active' : ''}`}
//                       onClick={() => setTickets(num)}
//                     >
//                       {num} {num === 1 ? 'Person' : 'People'}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label className="form-label" htmlFor="ev-name">Full Name *</label>
//                 <input
//                   id="ev-name"
//                   type="text"
//                   name="name"
//                   required
//                   placeholder="e.g. Maya Krishnan"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="form-input"
//                 />
//               </div>

//               <div className="form-grid-2">
//                 <div className="form-group">
//                   <label className="form-label" htmlFor="ev-phone">Mobile Phone *</label>
//                   <input
//                     id="ev-phone"
//                     type="tel"
//                     name="phone"
//                     required
//                     placeholder="+91 98765 43210"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="form-input"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label className="form-label" htmlFor="ev-email">Email Address</label>
//                   <input
//                     id="ev-email"
//                     type="email"
//                     name="email"
//                     placeholder="maya@example.com"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="form-input"
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label className="form-label" htmlFor="ev-notes">Any dietary requirements or questions?</label>
//                 <input
//                   id="ev-notes"
//                   type="text"
//                   name="dietaryNotes"
//                   placeholder="e.g. Oat milk preferred, beginner barista"
//                   value={formData.dietaryNotes}
//                   onChange={handleChange}
//                   className="form-input"
//                 />
//               </div>

//               <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '1.25rem' }}>
//                 Confirm RSVP for {tickets} {tickets === 1 ? 'Seat' : 'Seats'} →
//               </button>
//             </form>
//           </div>
//         ) : (
//           <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
//             <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🎉</div>
//             <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>You're Registered!</h2>
//             <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
//               We've reserved {tickets} {tickets === 1 ? 'seat' : 'seats'} for <strong>{event.title}</strong> on <strong>{event.date}</strong>.
//             </p>
//             <div style={{ background: 'var(--color-bg-cream)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
//               Confirmation details and calendar invite have been logged for <strong>{formData.name}</strong> ({formData.phone}).
//             </div>
//             <button type="button" className="btn btn-primary" onClick={onClose} style={{ width: '100%' }}>
//               Done
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
