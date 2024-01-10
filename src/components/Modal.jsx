import React from 'react';
import "../styles/Modal.css";
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" >
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
