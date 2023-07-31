import React from 'react';

const Modal = ({ src, onClick }) => {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      onClick('');
    }
  });
  return (
    <div
      className="Overlay"
      onClick={() => onClick('')}
      onKeyDown={e => console.log(e.key)}
    >
      <div className="Modal">
        <img src={src} alt="" onClick={e => e.stopPropagation()} />
      </div>
    </div>
  );
};

export default Modal;
