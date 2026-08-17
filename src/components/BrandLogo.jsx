import React from 'react';

export default function BrandLogo({ size = 'normal', light = false }) {
  const isLarge = size === 'large';

  return (
    <div className={`brand-identity-wrap ${isLarge ? 'large' : ''} ${light ? 'light-mode' : ''}`}>
      <img
        src="/images/brand_logo.png"
        alt="11:11 The Coffee Space Logo"
        className="brand-logo-img"
        style={{
          height: isLarge ? '74px' : '68px',
          width: 'auto',
          display: 'block',
          objectFit: 'contain',
          background: 'transparent',
          filter: light ? 'brightness(0) invert(1)' : 'none'
        }}
      />
    </div>
  );
}
