import React, { useState } from 'react';
import { FLAVOR_MATCHES, MENU_DATA } from '../data/menuData';

export default function FlavorFinderQuiz({ onCustomizeItem }) {
  const [activeFlavor, setActiveFlavor] = useState('sweet-creamy');
  const currentMatch = FLAVOR_MATCHES[activeFlavor];

  const handleFlavorClick = (flavorKey) => {
    setActiveFlavor(flavorKey);
  };

  const handleOrderClick = () => {
    if (currentMatch && onCustomizeItem) {
      const fullItem = MENU_DATA.find((i) => i.id === currentMatch.itemId);
      if (fullItem) {
        onCustomizeItem(fullItem);
      }
    }
  };

  return (
    <div className="flavor-matcher-card" id="flavor-match">
      <div className="flavor-matcher-grid">
        <div>
          <span className="section-badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFF', borderColor: 'rgba(255,255,255,0.3)' }}>
             Interactive Estate Flavor Matcher
          </span>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.85rem', marginBottom: '0.75rem' }}>
            Not sure what to order today?
          </h3>
          <p style={{ color: 'var(--color-secondary-sage-light)', fontSize: '0.95rem' }}>
            Click what flavor profile you’re craving, and our Chikmagalur roasters will match your ideal cup:
          </p>

          <div className="flavor-options-grid">
            <button 
              type="button"
              className={`flavor-btn ${activeFlavor === 'sweet-creamy' ? 'active' : ''}`}
              onClick={() => handleFlavorClick('sweet-creamy')}
            >
              <strong>Palm Jaggery &amp; Cardamom</strong>
              <span>Smoky Nolen Gur &amp; Steamed Oat</span>
            </button>

            <button 
              type="button"
              className={`flavor-btn ${activeFlavor === 'bright-floral' ? 'active' : ''}`}
              onClick={() => handleFlavorClick('bright-floral')}
            >
              <strong> Bright &amp; Floral Araku</strong>
              <span>Crisp Apple, Pomelo &amp; Jasmine V60</span>
            </button>

            <button 
              type="button"
              className={`flavor-btn ${activeFlavor === 'bold-chocolate' ? 'active' : ''}`}
              onClick={() => handleFlavorClick('bold-chocolate')}
            >
              <strong>Traditional Degree Coffee</strong>
              <span>Brass Davarah Froth &amp; Dark Chicory</span>
            </button>

            <button 
              type="button"
              className={`flavor-btn ${activeFlavor === 'iced-refreshing' ? 'active' : ''}`}
              onClick={() => handleFlavorClick('iced-refreshing')}
            >
              <strong> Wild Kokum &amp; Cold Brew</strong>
              <span>Tangy Konkan Tonic &amp; Malabar Float</span>
            </button>
          </div>
        </div>

        {/* Quiz Output Result */}
        <div className="flavor-result-box">
          <span className="flavor-result-badge">{currentMatch.badge}</span>
          <h4 className="flavor-result-title">{currentMatch.title} ({currentMatch.price})</h4>
          <p className="flavor-result-quote">{currentMatch.quote}</p>
          {/* <button 
            type="button" 
            className="btn btn-primary btn-sm" 
            style={{ width: '100%' }}
            onClick={handleOrderClick}
          >
            Customize This Coffee →
          </button> */}
        </div>
      </div>
    </div>
  );
}
