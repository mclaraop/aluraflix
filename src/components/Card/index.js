import React from 'react';
import styles from './Card.module.css';

const Card = ({ video, onEdit, onDelete }) => {
  return (
    <div className={styles.card}>
      <img src={video.imagem} alt={video.titulo} className={styles.thumbnail} />
      <div className={styles.details}>
        <h2 className={styles.title}>{video.titulo}</h2>
        <p className={styles.description}>{video.descricao}</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.editButton} onClick={() => onEdit(video)}>✎ Editar</button>
        <button className={styles.deleteButton} onClick={() => onDelete(video.id)}>✖ Excluir</button>
      </div>
    </div>
  );
};

export default Card;

