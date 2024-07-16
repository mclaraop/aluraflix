import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';  // Importe a imagem

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <img src={logo} alt="AluraFlix Logo" className={styles.logoImage} /> {/* Use a imagem aqui */}
      <nav className={styles.nav}>
        <Link to="/" className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}>HOME</Link>
        <Link to="/novo-video" className={`${styles.link} ${styles.novoVideo} ${location.pathname === '/novo-video' ? styles.active : ''}`}>NOVO VÍDEO</Link>
      </nav>
    </header>
  );
};

export default Header;

