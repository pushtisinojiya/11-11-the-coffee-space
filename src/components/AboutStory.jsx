import React from 'react';

export default function AboutStory() {
  const teamMembers = [
    {
      name: 'Ananya Sharma',
      role: 'Head Q-Grader & Master Roaster',
      quote: '“My morning ritual: 5:30 AM Double Attikan Estate Espresso with a pinch of crushed green cardamom.”',
      //image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Rohan Das',
      role: 'Head Barista & Coffee Trainer',
      quote: '“Ask me about our Monsoon Malabar V60 — it tastes like toasted nutmeg and 80% dark single origin cocoa!”',
      //image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Chef Meera Nair',
      role: 'Artisan Pastry & Bakery Chef',
      quote: '“Try our warm saffron mawa cake with a hot brass Davarah degree coffee. Absolute bliss.”',
      //image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="section-py bg-cream" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Narrative */}
          <div>
            <span className="section-badge">The Baba Budan Legacy</span>
            <h2>Celebrating 350+ Years of Indian Coffee</h2>
            <p className="text-lead" style={{ marginBottom: '1.25rem' }}>
              In 1670, Sufi saint Baba Budan smuggled seven sacred coffee seeds strapped to his chest across the Arabian Sea, planting them in the lush hills of Chikmagalur. That sparked India’s coffee story.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              At The Coffee Space, we honor this deep heritage. We source directly from family estates in Karnataka, Kerala, and Tamil Nadu, roasting in micro-batches to let the native terroir of pepper vines, jackfruit, and monsoon winds sing through your cup.
            </p>
            <p>
              Whether you’re catching up over a steaming brass Davarah degree coffee or spending an afternoon reading in our tropical teak courtyard, you’re part of our coffee family.
            </p>

            {/* Milestones Strip */}
            <div className="about-stats-strip">
              <div className="about-stat-item">
                <h4>25k+</h4>
                <p>Coffees Frothed</p>
              </div>
              <div className="about-stat-item">
                <h4>14+</h4>
                <p>Indian Micro-Estates</p>
              </div>
              <div className="about-stat-item">
                <h4>100%</h4>
                <p>Direct-Trade Partner</p>
              </div>
            </div>
          </div>

          {/* Side-by-Side Aligned Story Images */}
          <div className="about-images-composition">
            <div className="about-img-main">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80" 
                alt="Warm sunlit Indian specialty coffee roastery with teak tables" 
                width="400" 
                height="360" 
                loading="lazy" 
              />
            </div>
            <div className="about-img-secondary">
              <img 
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80" 
                alt="Freshly roasted Chikmagalur coffee beans in cooling drum" 
                width="400" 
                height="360" 
                loading="lazy" 
              />
            </div>
          </div>
        </div>

        {/* Team Showcase */}
        <div className="team-section">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-badge">The Roasters &amp; Brewers</span>
            <h3>Meet The Humans Behind Your Cup</h3>
            <p>Passionate Q-graders, degree coffee masters, and artisanal bakers in Bengaluru.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-photo">
                  <img 
                    src={member.image} 
                    alt={`${member.name}, ${member.role}`} 
                    width="300" 
                    height="260" 
                    loading="lazy" 
                  />
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <span className="team-role">{member.role}</span>
                  <p className="team-favorite-quote">{member.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
