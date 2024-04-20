import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Popup Content</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
