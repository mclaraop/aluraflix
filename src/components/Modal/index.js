import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, onSave, video }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (video) {
      setTitle(video.titulo);
      setCategory(video.categoria);
      setImageUrl(video.imagem);
      setVideoUrl(video.video);
      setDescription(video.descricao);
    }
  }, [video]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedVideo = {
      ...video,
      titulo: title,
      categoria: category,
      imagem: imageUrl,
      video: videoUrl,
      descricao: description,
    };
    await onSave(updatedVideo);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.title}>EDITAR CARD:</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="FRONT END">Front-end</option>
              <option value="BACK END">Back-end</option>
              <option value="INOVAÇÃO E GESTÃO">Inovação e Gestão</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="imageUrl">Imagem (URL)</label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="videoUrl">Vídeo (URL)</label>
            <input
              type="text"
              id="videoUrl"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className={styles.formActions}>
            <button type="submit" className={styles.saveButton}>GUARDAR</button>
            <button type="button" className={styles.clearButton} onClick={onClose}>LIMPAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
