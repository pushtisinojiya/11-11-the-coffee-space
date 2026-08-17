import React, { useState, useMemo } from 'react';
import { MENU_DATA } from '../data/menuData';

const inrFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0
});

export default function MenuSection({ onCustomizeItem }) {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [currentSearch, setCurrentSearch] = useState('');
  const [activeDietaryFilter, setActiveDietaryFilter] = useState(null);

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'coffee', label: ' Specialty Coffee & Frappes' },
    { id: 'pizza', label: ' Wood-Fired Pizzas' },
    { id: 'pasta', label: 'Creamy Pastas' },
    { id: 'bites', label: ' Rooftop Bites & Toast' },
    { id: 'desserts', label: ' Cheesecakes & Waffles' }
  ];

  const dietaryTags = [
    { id: 'signature', label: 'Signature' },
    { id: 'popular', label: 'Top Pick' },
    { id: 'vegan', label: ' Plant Based' }
  ];

  const filteredItems = useMemo(() => {
    return MENU_DATA.filter((item) => {
      const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
      const query = currentSearch.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.notes.toLowerCase().includes(query);

      const matchesDietary = !activeDietaryFilter || item.tags.includes(activeDietaryFilter);

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [currentCategory, currentSearch, activeDietaryFilter]);

  const handleDietaryToggle = (tagId) => {
    setActiveDietaryFilter((prev) => (prev === tagId ? null : tagId));
  };

  const handleResetFilters = () => {
    setCurrentCategory('all');
    setCurrentSearch('');
    setActiveDietaryFilter(null);
  };

  return (
    <section className="section-py bg-body" id="menu">
      <div className="container">
       
        {/* Menu Controls */}
        <div className="menu-controls-bar">
          {/* Category Tabs */}
          <div className="menu-category-tabs" role="tablist" aria-label="Menu Categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-tab-pill ${currentCategory === cat.id ? 'active' : ''}`}
                role="tab"
                aria-selected={currentCategory === cat.id}
                onClick={() => setCurrentCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          {/* <div className="menu-search-box-wrap">
            <input
              type="text"
              value={currentSearch}
              onChange={(e) => setCurrentSearch(e.target.value)}
              placeholder="Search coffee, pizza, pasta, fries..."
              className="menu-search-input"
              aria-label="Search menu items"
            />
          </div> */}
  

<div className="menu-search-box-wrap">
  <input
    type="text"
    value={currentSearch}
    onChange={(e) => setCurrentSearch(e.target.value)}
    placeholder="Search coffee, pizza, pasta, fries..."
    className="menu-search-input"
    aria-label="Search menu items"
  />
</div>
        </div>

        {/* Dietary Tag Quick Toggles */}
        <div className="menu-dietary-row" style={{ display: 'flex', gap: '8px', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', alignSelf: 'center' }}>Filter:</span>
          {dietaryTags.map((tag) => (
            <button
              key={tag.id}
              type="button"
              className={`tag-pill-btn ${activeDietaryFilter === tag.id ? 'active' : ''}`}
              onClick={() => handleDietaryToggle(tag.id)}
            >
              {tag.label}
            </button>
          ))}
          {(activeDietaryFilter || currentSearch || currentCategory !== 'all') && (
            <button
              type="button"
              onClick={handleResetFilters}
              style={{ background: 'none', border: 'none', color: 'var(--color-caramel)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'underline' }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Menu Cards Grid with IMAGES */}
        {filteredItems.length > 0 ? (
          <div className="menu-cards-grid-with-images">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-product-card">
                {/* Product Image Header */}
                <div className="menu-product-img-wrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-product-img"
                    loading="lazy"
                  />
                  <div className="menu-product-badges">
                    {item.tags.includes('signature') && (
                      <span className="badge-signature"> Signature</span>
                    )}
                    {item.tags.includes('popular') && (
                      <span className="badge-popular">Top Pick</span>
                    )}
                    {item.tags.includes('vegan') && (
                      <span className="badge-vegan">Plant Based</span>
                    )}
                  </div>
                  <span className="menu-product-price-chip">
                    {inrFormatter.format(item.price)}
                  </span>
                </div>

                {/* Product Body */}
                <div className="menu-product-body">
                  <h3 className="menu-product-title">{item.name}</h3>
                  <p className="menu-product-desc">{item.description}</p>
                  
                  {item.notes && (
                    <div className="menu-product-notes">
                       <em>{item.notes}</em>
                    </div>
                  )}

                  
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#FFFFFF', borderRadius: 'var(--radius-lg)' }}>
            <h3>No menu items found</h3>
            <p style={{ marginTop: '0.5rem', color: 'var(--color-text-secondary)' }}>
              Try clearing your search query or selecting another category.
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleResetFilters}
              style={{ marginTop: '1.25rem' }}
            >
              Show All Menu Items
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
