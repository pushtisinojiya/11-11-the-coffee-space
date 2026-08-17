import React from 'react';

export default function VinylVibeBar() {
  return (
    <div className="vinyl-vibe-bar">
      <span className="vinyl-disc" aria-hidden="true"></span>
      <span><strong>Now spinning on the roastery turntable:</strong> <em>Raga Morning Acoustic</em> — Zakir Hussain &amp; Niladri Kumar</span>
      <span className="handwritten-note" style={{ color: 'var(--color-accent-caramel)', fontSize: '1.1rem', marginLeft: '10px' }}>
        • Roasting fresh Chikmagalur Estate beans!
      </span>
    </div>
  );
}
