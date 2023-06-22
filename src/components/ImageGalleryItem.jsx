import React from 'react';
import styles from './styles.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={styles['gallery-item']}>
      <img src={image.webformatURL} alt="" onClick={onClick} />
    </li>
  );
};

export default ImageGalleryItem;
