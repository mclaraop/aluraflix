import React from 'react';
import styles from './Rodape.module.css';
import logo from './Rodape.png';

const Rodape = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Logo" className={styles.logo} />
    </footer>
  );
};

export default Rodape;

