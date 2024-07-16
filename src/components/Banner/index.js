import React from 'react';
import styles from './Banner.module.css';

const Banner = ({ video }) => {
  const embedUrl = video.video.replace("watch?v=", "embed/");

  const categoryStyles = {
    'FRONT END': {
      backgroundColor: 'var(--cor-frontend)',
      borderColor: 'var(--cor-frontend)',
    },
    'BACK END': {
      backgroundColor: 'var(--cor-backend)',
      borderColor: 'var(--cor-backend)',
    },
    'INOVAÇÃO E GESTÃO': {
      backgroundColor: 'var(--cor-gestao)',
      borderColor: 'var(--cor-gestao)',
    },
  };

  const categoryStyle = categoryStyles[video.categoria.toUpperCase()] || {};

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url(${video.imagem})`,
        border: `2px solid ${categoryStyle.borderColor}`,
        boxShadow: `inset 0 0 6px ${categoryStyle.borderColor}, 0 0 10px ${categoryStyle.borderColor}`,
      }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title} style={categoryStyle}>{video.categoria}</h2>
          <h3 className={styles.subtitle}>{video.titulo}</h3>
          <p className={styles.description}>{video.descricao}</p>
        </div>
        <div className={styles.featuredVideo}>
          <iframe
            width="300"
            height="200"
            src={embedUrl}
            title={video.titulo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.featuredThumbnail}
            style={categoryStyle}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Banner;
