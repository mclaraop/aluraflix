import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addVideo } from '../../api';
import Header from '../../components/Header'; 
import Rodape from '../../components/Rodape';
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
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>NOVO VÍDEO</h1>
        <p className={styles.subtitle}>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>
        <h2 className={styles.formTitle}>Criar Card</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Insira o título"
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
              <option value="FRONT END">FRONT END</option>
              <option value="BACK END">BACK END</option>
              <option value="INOVAÇÃO E GESTÃO">INOVAÇÃO E GESTÃO</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="imagem">Imagem (URL)</label>
            <input
              type="text"
              id="imagem"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
              placeholder="URL da imagem"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="video">Vídeo (URL)</label>
            <input
              type="text"
              id="video"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
              placeholder="URL do vídeo"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Sobre o que é esse vídeo?"
            ></textarea>
          </div>
          <div className={styles.formActions}>
            <button type="submit" className={styles.saveButton}>GUARDAR</button>
            <button type="button" className={styles.clearButton} onClick={handleReset}>LIMPAR</button>
          </div>
        </form>
      </div>
      <Rodape />
    </div>
  );
};

export default NovoVideo;
