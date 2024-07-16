import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addVideo } from '../../api';
import styles from './NovoVideo.module.css';

const NovoVideo = () => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState('');
  const [video, setVideo] = useState('');
  const [descricao, setDescricao] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newVideo = { titulo, categoria, imagem, video, descricao };
    try {
      await addVideo(newVideo);
      navigate('/');
    } catch (error) {
      console.error('Error adding video:', error);
    }
  };

  const handleReset = () => {
    setTitulo('');
    setCategoria('');
    setImagem('');
    setVideo('');
    setDescricao('');
  };

  return (
    <div className={styles.novoVideo}>
      <h1>Novo Vídeo</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Selecione uma categoria</option>
            <option value="Front-end">Front-end</option>
            <option value="Back-end">Back-end</option>
            <option value="Inovação e Gestão">Inovação e Gestão</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="imagem">Imagem (URL)</label>
          <input
            type="text"
            id="imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="video">Vídeo (URL)</label>
          <input
            type="text"
            id="video"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.formActions}>
          <button type="submit" className={styles.saveButton}>GUARDAR</button>
          <button type="button" className={styles.clearButton} onClick={handleReset}>LIMPAR</button>
        </div>
      </form>
    </div>
  );
};

export default NovoVideo;



