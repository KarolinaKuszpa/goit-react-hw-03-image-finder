import React from 'react';
import styles from './styles.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Load More
    </button>
  );
};

export default Button;
