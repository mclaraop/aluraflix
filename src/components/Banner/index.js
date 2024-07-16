import React from 'react';
import styles from './Banner.module.css';

const Banner = ({ video }) => {
  const embedUrl = video.video.replace("watch?v=", "embed/");

  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${video.imagem})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>{video.categoria}</h2>
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
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Banner;
