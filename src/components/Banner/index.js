import React from 'react';
import styles from './Banner.module.css';

const Banner = ({ imageUrl, title, subtitle, description }) => {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.featuredVideo}>
          <img src={imageUrl} alt={subtitle} className={styles.featuredThumbnail} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
