import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import SpecialsSection from '../components/SpecialsSection';

export default function HomePage({ onCustomizeItem }) {
  return (
    <div className="page-home">
      {/* 1. Exact Hero Section from Reference UI */}
      <Hero />

      {/* 2. Exact Story Highlights Section from Reference UI */}
      <Highlights />

      {/* 3. Handcrafted With Love Specials Section */}
      <SpecialsSection onCustomizeItem={onCustomizeItem} />

      {/* 4. Experience & Explore 11:11 Section */}
      <section className="section-py bg-cream" id="experience">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-marker">
             
            </div>
            <h2>Experience The Coffee Space</h2>
            <p>
              Whether you’re stopping by for your morning brew, exploring single estates, or finding a peaceful garden corner to work and connect.
            </p>
          </div>

          <div className="home-cta-grid">
            {/* CTA 1: View Menu */}
            <div className="home-cta-card">
              <div className="home-cta-icon-wrap" aria-hidden="true">
                ☕
              </div>
              <h3>Explore Our Menu</h3>
              <p>
                From single origin Arabicas and slow V60 pour-overs to palm jaggery cold tonics and fresh Irani bakery bakes.
              </p>
              <Link to="/menu" className="btn btn-primary">
                <span>View Full Menu</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* CTA 2: Visit & Hours */}
            <div className="home-cta-card">
              <div className="home-cta-icon-wrap" aria-hidden="true">
                📍
              </div>
              <h3>Location & Hours</h3>
              <p>
                6th Floor Rooftop, Above Bhavani Electronics, Khodiyar Colony, Jamnagar. Open daily for sunset views, pizzas &amp; artisanal coffee.
              </p>
              <Link to="/location" className="btn btn-secondary">
                <span>Find Directions</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

           
            
          </div>
        </div>
      </section>

      {/* 5. Guest Testimonials */}
      <section className="section-py bg-body" id="testimonials">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-marker">
             
            </div>
            <h2>Loved by Coffee and Food Enthusiasts</h2>
            <p>Here is what our regulars and first-time guests in Jamnagar say about their 11:11 rooftop experience.</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="testimonial-quote">
                “11:11 is easily the most aesthetic rooftop in Jamnagar! The wood-fired Margherita pizza and Swan Latte Art are phenomenal. The sunset view from the 6th floor is breathtaking.”
              </p>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                  alt="Rhea Shah" 
                  className="testimonial-avatar" 
                />
                <div>
                  <strong>Rhea Shah</strong>
                  <span>Jamnagar Local and Regular</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="testimonial-quote">
                “Best coffee place in Saurashtra! The Iced Caramel Cloud Frappe and Lotus Biscoff cheesecake are top tier. Amazing ambiance for evening hangouts with friends.”
              </p>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" 
                  alt="Meet Patel" 
                  className="testimonial-avatar" 
                />
                <div>
                  <strong>Meet Patel</strong>
                  <span>Food Enthusiast</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="testimonial-quote">
                “Hosted my birthday on the rooftop terrace and the staff made it unforgettable. Fairy lights, great music, delicious pastas, and exceptional coffee!”
              </p>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80" 
                  alt="Drashti Joshi" 
                  className="testimonial-avatar" 
                />
                <div>
                  <strong>Drashti Joshi</strong>
                  <span>Regular Guest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
