import React from 'react';

export default function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className="toast" role="alert">
          <span style={{ fontSize: '1.25rem' }} aria-hidden="true">
            {t.type === 'warning' ? '⚠️' : t.type === 'success' ? '🎉' : '☕'}
          </span>
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
}
