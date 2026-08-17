import React from 'react';
import { Link } from 'react-router-dom';

export default function SpecialsSection({ onCustomizeItem }) {
  const specials = [
    {
      id: 'special-latte',
      name: '11:11 Swan Latte Art',
      category: 'Hot Specialty',
      price: '₹220',
      priceNum: 220,
      description: 'Single-estate washed Arabica from Attikan Estate, textured with velvety micro-foam in our signature swan rosetta.',
      image: '/images/special_latte_art.jpg',
      badge: 'Chef Signature'
    },
    {
      id: 'special-frappe',
      name: 'Caramel & Vanilla Cloud Frappe',
      category: 'Iced & Blended',
      price: '₹260',
      priceNum: 260,
      description: 'Slow-dripped cold brew blended with Wayanad vanilla bean, salted date palm caramel, topped with whipped cloud cream.',
      image: '/images/special_iced_frappe.jpg',
      badge: 'Popular Favorite'
    },
    {
      id: 'special-cappuccino',
      name: 'Monsooned Malabar Cappuccino',
      category: 'Signature Roast',
      price: '₹210',
      priceNum: 210,
      description: 'Naturally ocean-cured Malabar beans with rich crema, deep cocoa notes, dusted with organic Ceylon cinnamon.',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
      badge: 'Low Acidity'
    }
  ];

  return (
    <section className="section-specials bg-dark-espresso" id="specials">
      <div className="container">
        {/* Section Header */}
        <div className="specials-header">
        
          <h2 className="specials-title">Handcrafted With Love</h2>
          <p className="specials-subtitle">
            Every roast is calibrated daily, hand-poured with passion, and paired with scratch-baked morning pastries.
          </p>
        </div>

        {/* Specials 3-Card Display */}
        <div className="specials-grid">
          {specials.map((item) => (
            <div key={item.id} className="special-product-card">
              <div className="special-card-image-wrap">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="special-card-img" 
                  loading="lazy" 
                />
                <span className="special-card-badge">{item.badge}</span>
              </div>
              <div className="special-card-body">
                <div className="special-card-top">
                  <span className="special-category-tag">{item.category}</span>
                  <span className="special-card-price">{item.price}</span>
                </div>
                <h3 className="special-card-name">{item.name}</h3>
                <p className="special-card-desc">{item.description}</p>
                <div className="special-card-actions">
                 
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Link */}
        <div className="specials-bottom-action">
          <Link to="/menu" className="btn btn-secondary-light">
            <span>Explore Full 20+ Drink &amp; Bakery Menu</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
