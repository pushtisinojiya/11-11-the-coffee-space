import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Yash Patel',
      role: 'Founder & Head of Roasting',
      quote: '“Bringing authentic third-wave specialty coffee, slow manual brews, and rooftop sunset serenity to Jamnagar.”',
      //image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Pooja Jadeja',
      role: 'Lead Barista & Latte Artist',
      quote: '“Every cup of coffee we pour is crafted with precision, passion, and single-origin Arabica beans.”',
     // image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Chef Harsh Dave',
      role: 'Executive Chef (Pizzas & Pastas)',
      quote: '“Our Neapolitan dough is fermented for 48 hours to create that light, airy, wood-fired crust our guests love.”',
      //image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const missionPillars = [
    {
      icon: '🌆',
      title: 'Jamnagar’s Rooftop Oasis',
      description: 'Perched on the 6th floor in Khodiyar Colony, we offer a serene escape from the bustling city with open-air sunset views and ambient lighting.'
    },
    {
      icon: '☕',
      title: 'Specialty Indian Beans',
      description: 'We source single estate Arabicas from shade-grown estates in Chikmagalur and Coorg, calibrated daily on commercial espresso bars.'
    },
    {
      icon: '🍕',
      title: 'Artisanal Comfort Food',
      description: 'From hand-stretched wood-fired pizzas to creamy pastas, loaded nachos, and Lotus Biscoff cheesecakes, every dish is crafted fresh.'
    }
  ];

  return (
    <div className="page-about">
      {/* Hero Header */}
      <section className="page-hero-banner bg-cream">
        <div className="container">
         
          <h1>The Story of 11:11 The Coffee Space</h1>
          <p className="page-hero-sub">
            Jamnagar’s favorite rooftop café destination for artisanal coffee, wood-fired pizzas, and memorable sunset conversations.
          </p>
        </div>
      </section>

      {/* Story Narrative */}
      <section className="section-py bg-body" id="story">
        <div className="container">
          <div className="about-grid">
            <div>
              
              <h2>More Than Just Coffee — A Shared Community Rooftop</h2>
              <p className="text-lead" style={{ marginBottom: '1.25rem' }}>
                11:11 represents synchronicity, positive energy, and taking a mindful pause in your day.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Established in <strong>Khodiyar Colony, Jamnagar (Gujarat)</strong>, 11:11 The Coffee Space was born out of a passion to bring true third-wave specialty coffee culture together with gourmet European dining and rooftop lounge aesthetics.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Whether you're visiting for an evening espresso with friends, enjoying a romantic dinner overlooking the golden sunset, or hosting a celebration under the starlight, our rooftop is your sanctuary.
              </p>

              {/* Milestones */}
              <div className="about-stats-strip">
                <div className="about-stat-item">
                  <h4>6th Floor</h4>
                  <p>Rooftop View</p>
                </div>
                <div className="about-stat-item">
                  <h4>25,000+</h4>
                  <p>Happy Guests</p>
                </div>
                <div className="about-stat-item">
                  <h4>4.9 ★</h4>
                  <p>Jamnagar Rating</p>
                </div>
              </div>
            </div>

            <div className="about-images-composition">
              <div className="about-img-main">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
                  alt="Aesthetic rooftop cafe in Jamnagar with fairy lights" 
                  width="400" 
                  height="360" 
                  loading="lazy" 
                />
              </div>
              <div className="about-img-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80" 
                  alt="Wood-fired pizza baking in oven" 
                  width="400" 
                  height="360" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-py bg-cream" id="mission">
        <div className="container">
          <div className="section-header">
           
            <h2>What Makes 11:11 Special in Jamnagar</h2>
            <p>Our commitment to authentic ingredients, friendly hospitality, and an unforgettable rooftop vibe.</p>
          </div>

          <div className="about-mission-grid">
            {missionPillars.map((pillar, index) => (
              <div key={index} className="about-mission-card">
                <div className="about-mission-icon" aria-hidden="true">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Baristas */}
      <section className="section-py bg-body" id="team">
        <div className="container">
          <div className="section-header">
            <h2>Meet The People Behind Your Experience</h2>
            <p>Our passionate baristas, chefs, and team members dedicated to making every visit special.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
              
                <div className="team-body">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p className="team-quote">{member.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Menu / Visit CTA */}
      {/* <section className="section-py bg-dark-espresso" style={{ textAlign: 'center' }}>
        <div className="container">
         
          <h2 style={{ color: '#FFF', marginBottom: '1rem' }}>Visit Our Rooftop in Jamnagar Today</h2>
          <p style={{ color: 'var(--color-text-light-muted)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Join us on the 6th Floor in Khodiyar Colony for fresh wood-fired pizzas, specialty lattes, and starlight vibes.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/menu" className="btn btn-secondary-light">
              <span>View Full Menu</span>
              <span aria-hidden="true">→</span>
            </Link>
            
          </div>
        </div>
      </section> */}
    </div>
  );
}
