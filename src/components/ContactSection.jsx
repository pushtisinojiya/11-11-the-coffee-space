import React, { useState } from 'react';

export default function ContactSection({ onBookingSubmit, showToast }) {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      q: 'Do I need to reserve a table in advance for the rooftop in Jamnagar?',
      a: 'Walk-ins are always warmly welcomed! However, during weekend evenings (7:00 PM to 10:00 PM) and for sunset golden hour, we highly recommend reserving a table to guarantee your preferred outdoor terrace or indoor lounge seating.'
    },
    {
      q: 'Can we host birthday parties, anniversaries, or private gatherings?',
      a: 'Yes! We love hosting intimate celebrations, rooftop birthday surprises, and get-togethers. You can select "Private Rooftop Gathering" in the form above or call us directly to discuss custom fairy light decor and menu packages.'
    },
    {
      q: 'What are your popular must-try items at 11:11 Jamnagar?',
      a: 'Our guests rave about the 11:11 Swan Latte Art, Iced Caramel Cloud Frappe, Wood-Fired Margherita Rustica Pizza, Creamy Truffle Fettuccine Alfredo, and the warm Lotus Biscoff Baked Cheesecake!'
    },
    {
      q: 'Is there parking available near the cafe?',
      a: 'Yes, there is convenient dedicated two-wheeler and four-wheeler parking right in front of the building on Khodiyar Colony main road with elevator access to the 6th floor.'
    }
  ];

  const handleFaqToggle = (index) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section-py bg-body" id="contact">
      <div className="container">
        {/* Side-by-Side 2-Column Grid for Direct Contact & FAQs */}
        <div className="contact-side-by-side-grid">
          {/* Left Block: Direct Contact Information */}
          <div className="contact-card-box contact-block-equal">
            <h3 className="contact-block-title">Direct Contact Information</h3>
            
            <div className="contact-details-list">
              <div className="contact-detail-item">
                <span className="contact-icon" aria-hidden="true"></span>
                <div>
                  <strong className="contact-item-label">Address</strong>
                  <p className="contact-item-desc">
                    6th Floor Rooftop, Above Bhavani Electronics, Near Jio Petroleum, Khodiyar Colony, Jamnagar, Gujarat 361006
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="contact-icon" aria-hidden="true"></span>
                <div>
                  <strong className="contact-item-label">Phone &amp; WhatsApp</strong>
                  <a href="tel:+919825011110" className="contact-link">
                    +91 98250 11110
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="contact-icon" aria-hidden="true"></span>
                <div>
                  <strong className="contact-item-label">Email</strong>
                  <a href="mailto:hello@thecoffeespacejamnagar.com" className="contact-link">
                    hello@thecoffeespacejamnagar.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="contact-icon" aria-hidden="true"></span>
                <div>
                  <strong className="contact-item-label">Rooftop Timings</strong>
                  <p className="contact-item-desc">
                    Monday – Sunday: 4:00 PM – 11:30 PM (Sunset to Late Night)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Frequently Asked Questions */}
          <div className="contact-card-box contact-block-equal">
            <h3 className="contact-block-title">Frequently Asked Questions</h3>
            <div className="faq-list">
              {faqs.map((faq, idx) => (
                <div key={idx} className="faq-item-row">
                  <button
                    type="button"
                    onClick={() => handleFaqToggle(idx)}
                    className="faq-question-btn"
                    aria-expanded={activeFaq === idx}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-toggle-sign">{activeFaq === idx ? '−' : '+'}</span>
                  </button>
                  {activeFaq === idx && (
                    <p className="faq-answer-text">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
