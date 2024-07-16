import React from 'react';
import styles from './Card.module.css';

const Card = ({ video, onEdit, onDelete, onSelect }) => {
  const categoryCardStyles = {
    'FRONT END': styles.frontendCard,
    'BACK END': styles.backendCard,
    'INOVAÇÃO E GESTÃO': styles.inovacaoEgestaoCard,
  };

  const cardClass = categoryCardStyles[video.categoria.toUpperCase()] || '';

  return (
    <div className={`${styles.card} ${cardClass}`} onClick={() => onSelect(video)}>
      <img src={video.imagem} alt={video.titulo} className={styles.thumbnail} />
      <div className={`${styles.buttonsContainer} ${cardClass}`}>
        <button className={styles.deleteButton} onClick={(e) => { e.stopPropagation(); onDelete(video.id); }}>
          <img src="/imagens/deletar.png" alt="Deletar" className={styles.icon} /> DELETAR
        </button>
        <button className={styles.editButton} onClick={(e) => { e.stopPropagation(); onEdit(video); }}>
          <img src="/imagens/editar.png" alt="Editar" className={styles.icon} /> EDITAR
        </button>
      </div>
    </div>
  );
};

export default Card;
