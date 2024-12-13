import React from 'react';

const Popup = ({ onClose, children }) => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '5px' }}>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
