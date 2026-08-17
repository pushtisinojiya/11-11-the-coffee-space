import React, { useState, useEffect } from 'react';

const inrFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0
});

export default function CupCustomizerModal({ item, onClose, onAddToOrder }) {
  const [size, setSize] = useState('regular');
  const [milk, setMilk] = useState('a2');
  const [sweetener, setSweetener] = useState('jaggery');
  const [blend, setBlend] = useState('degree');
  const [temp, setTemp] = useState('hot');
  const [extraDecoction, setExtraDecoction] = useState(false);

  useEffect(() => {
    setSize('regular');
    setMilk('a2');
    setSweetener('jaggery');
    setBlend('degree');
    setTemp('hot');
    setExtraDecoction(false);

    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  if (!item) return null;

  const sizeExtra = size === 'small' ? -20 : size === 'regular' ? 0 : 40;
  const milkExtra = milk === 'a2' ? 0 : 40;
  const shotExtra = extraDecoction ? 40 : 0;
  const totalPrice = Math.max(80, item.price + sizeExtra + milkExtra + shotExtra);

  const handleAdd = () => {
    const sizeMap = { small: 'Traditional Davarah (150ml)', regular: 'Regular (250ml)', large: 'Grand Mug (350ml)' };
    const milkMap = { a2: 'Fresh A2 Milk', oat: 'Barista Oat Milk', almond: 'House Almond Milk', coconut: 'Coconut Milk' };
    const sweetMap = { jaggery: 'Palm Jaggery', khandsari: 'Khandsari Sugar', none: 'Unsweetened' };

    onAddToOrder({
      itemName: item.name,
      size: sizeMap[size],
      milk: milkMap[milk],
      sweetener: sweetMap[sweetener],
      temp,
      totalFormatted: inrFormatter.format(totalPrice)
    });
  };

  return (
    <div
      className="modal-overlay active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="customizerItemTitle"
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) onClose();
      }}
    >
      <div className="modal-container">
        <div className="modal-header">
          <div>
            <h3 id="customizerItemTitle">Customize {item.name}</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>{item.description}</p>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close customization dialog">
            ✕
          </button>
        </div>

        <div className="modal-body">
          {/* 1. Size & Vessel */}
          <div>
            <span className="option-group-label">1. Select Serving Vessel and Size</span>
            <div className="option-pill-grid">
              <div className="custom-radio-pill">
                <input
                  type="radio"
                  id="sizeSmall"
                  name="coffeeSize"
                  value="small"
                  checked={size === 'small'}
                  onChange={() => setSize('small')}
                />
                <label htmlFor="sizeSmall">Brass Davarah (150ml)</label>
              </div>
              <div className="custom-radio-pill">
                <input
                  type="radio"
                  id="sizeReg"
                  name="coffeeSize"
                  value="regular"
                  checked={size === 'regular'}
                  onChange={() => setSize('regular')}
                />
                <label htmlFor="sizeReg">Regular Cup (250ml)</label>
              </div>
              <div className="custom-radio-pill">
                <input
                  type="radio"
                  id="sizeLarge"
                  name="coffeeSize"
                  value="large"
                  checked={size === 'large'}
                  onChange={() => setSize('large')}
                />
                <label htmlFor="sizeLarge">Grand Mug (350ml +₹40)</label>
              </div>
            </div>
          </div>

          {/* 2. Milk Preference */}
          <div>
            <span className="option-group-label">2. Choice of Milk</span>
            <div className="option-pill-grid">
              <div className="custom-radio-pill">
                <input
                  type="radio"
                  id="milkA2"
                  name="coffeeMilk"
                  value="a2"
                  checked={milk === 'a2'}
                  onChange={() => setMilk('a2')}
                />
                <label htmlFor="milkA2">Fresh A2 Milk</label>
              </div>
              <div className="custom-radio-pill">
                <input
                  type="radio"
                  id="milkOat"
                  name="coffeeMilk"
                  value="oat"
                  checked={milk === 'oat'}
                  onChange={() => setMilk('oat')}
                />
                <label htmlFor="milkOat">Barista Oat (+₹40)</label>
              </div>
              <div className="custom-radio-pill">
                <input
                  type="radio"
                  id="milkAlmond"
                  name="coffeeMilk"
                  value="almond"
                  checked={milk === 'almond'}
                  onChange={() => setMilk('almond')}
                />
                <label htmlFor="milkAlmond">House Almond (+₹40)</label>
              </div>
              <div className="custom-radio-pill">
                <input
                  type="radio"
                  id="milkCoconut"
                  name="coffeeMilk"
                  value="coconut"
                  checked={milk === 'coconut'}
                  onChange={() => setMilk('coconut')}
                />
                <label htmlFor="milkCoconut">Coconut Milk (+₹40)</label>
              </div>
            </div>
          </div>

          {/* 3. Traditional Sweetener */}
          <div>
            <span className="option-group-label">3. Sweetener Preference</span>
            <div className="option-pill-grid">
              <div className="custom-radio-pill">
                <input
                  type="radio"
                  id="sweetJaggery"
                  name="coffeeSweet"
                  value="jaggery"
                  checked={sweetener === 'jaggery'}
                  onChange={() => setSweetener('jaggery')}
                />
                <label htmlFor="sweetJaggery">Palm Jaggery (Nolen Gur)</label>
              </div>
              <div className="custom-radio-pill">
                <input
                  type="radio"
                  id="sweetKhandsari"
                  name="coffeeSweet"
                  value="khandsari"
                  checked={sweetener === 'khandsari'}
                  onChange={() => setSweetener('khandsari')}
                />
                <label htmlFor="sweetKhandsari">Raw Khandsari Sugar</label>
              </div>
              <div className="custom-radio-pill">
                <input
                  type="radio"
                  id="sweetNone"
                  name="coffeeSweet"
                  value="none"
                  checked={sweetener === 'none'}
                  onChange={() => setSweetener('none')}
                />
                <label htmlFor="sweetNone">Unsweetened (Zero Sugar)</label>
              </div>
            </div>
          </div>

          {/* 4. Temperature & Froth */}
          <div>
            <span className="option-group-label">4. Serving Temperature</span>
            <div className="option-pill-grid">
              <div className="custom-radio-pill">
                <input
                  type="radio"
                  id="tempHot"
                  name="coffeeTemp"
                  value="hot"
                  checked={temp === 'hot'}
                  onChange={() => setTemp('hot')}
                />
                <label htmlFor="tempHot"> Piping Hot Davarah Froth</label>
              </div>
              <div className="custom-radio-pill">
                <input
                  type="radio"
                  id="tempIced"
                  name="coffeeTemp"
                  value="iced"
                  checked={temp === 'iced'}
                  onChange={() => setTemp('iced')}
                />
                <label htmlFor="tempIced"> Iced Shakerato</label>
              </div>
            </div>
          </div>

          {/* 5. Extra Decoction Shot */}
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-text-dark-coffee)' }}>
              <input
                type="checkbox"
                checked={extraDecoction}
                onChange={(e) => setExtraDecoction(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--color-primary-forest)' }}
              />
              <span>Add Extra Thick First-Pour Decoction Shot (+₹40)</span>
            </label>
          </div>
        </div>

        <div className="modal-footer">
          <div>
            <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', display: 'block' }}>Total Calculated</span>
            <span className="modal-price-calc">{inrFormatter.format(totalPrice)}</span>
          </div>
          <button type="button" className="btn btn-primary btn-sm" onClick={handleAdd}>
            Add to Coffee Tray
          </button>
        </div>
      </div>
    </div>
  );
}
