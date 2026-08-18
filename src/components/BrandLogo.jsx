import React from 'react';

export default function BrandLogo({ size = 'normal', light = false }) {
  const isLarge = size === 'large';

  return (
    <div className={`brand-identity-wrap ${isLarge ? 'large' : ''} ${light ? 'light-mode' : ''}`}>
      <img
        src="/images/brand_logo.png"
        alt="11:11 The Coffee Space Logo"
        className="brand-logo-img"
      />
    </div>
  );
}
