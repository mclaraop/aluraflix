import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </div>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>HOME</NavLink>
        <NavLink to="/novo-video" className={({ isActive }) => isActive ? `${styles.link} ${styles.active} ${styles.newVideoButton}` : `${styles.link} ${styles.newVideoButton}`}>NOVO VÍDEO</NavLink>
      </nav>
    </header>
  );
};

export default Header;

