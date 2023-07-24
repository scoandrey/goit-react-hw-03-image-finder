import React from 'react';

const Modal = ({ src, onClick }) => {
  return (
    <div className="Overlay" onClick={() => onClick('')}>
      <div className="Modal">
        <img src={src} alt="" />
      </div>
    </div>
  );
};

export default Modal;
