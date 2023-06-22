import React from 'react';
import styles from './styles.module.css';

const Modal = ({ image, onClose }) => {
  const handleKeyDown = e => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={styles['modal-overlay']}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.modal}>
        <img src={image.largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
