import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_DATA } from '../data/galleryData';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'space', label: 'Rooftop Space' },
    { id: 'coffee', label: 'Artisan Coffee' },
    { id: 'food', label: 'Pizzas & Kitchen' },
    { id: 'vibe', label: 'Sunset & Night Vibe' }
  ];

  const filteredGallery = GALLERY_DATA.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredGallery.length - 1 : prev - 1));
  }, [lightboxIndex, filteredGallery.length]);

  const nextPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredGallery.length - 1 ? 0 : prev + 1));
  }, [lightboxIndex, filteredGallery.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, prevPhoto, nextPhoto]);

  const activePhoto = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

  return (
    <section className="section-py bg-body" id="gallery">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle-marker">
            {/* <span>•</span>
            <span>Khodiyar Colony, Jamnagar</span>
            <span>•</span> */}
          </div>
          <h2>Atmosphere, Food and Memories</h2>
          <p>
            Experience our open-air sunset terrace, wood-fired pizza ovens, artisanal swan lattes, and cozy starlight evenings in Jamnagar.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="gallery-filter-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-tab-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid-masonry">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(index); }}
              aria-label={`View photo: ${item.title}`}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-overlay-caption">
                <h4 style={{ color: '#FFF', fontSize: '1.15rem', marginBottom: '4px' }}>{item.title}</h4>
                <p style={{ color: 'var(--color-gold-accent)', fontSize: '0.85rem' }}>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <button className="modal-close-btn" style={{ top: '24px', right: '24px', color: '#FFF', background: 'rgba(255,255,255,0.2)' }} onClick={closeLightbox}>✕</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={activePhoto.image} alt={activePhoto.title} />
            <div style={{ marginTop: '1rem', color: '#FFF', textAlign: 'center' }}>
              <h3 style={{ color: '#FFF', fontSize: '1.3rem' }}>{activePhoto.title}</h3>
              <p style={{ color: 'var(--color-gold-accent)', marginTop: '4px', fontSize: '0.92rem' }}>{activePhoto.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
