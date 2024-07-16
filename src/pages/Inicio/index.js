import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import Modal from '../../components/Modal';
import { getVideos, deleteVideo, updateVideo } from '../../api';
import styles from './Inicio.module.css';

const Inicio = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getVideos();
        setVideos(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteVideo(id);
      setVideos(videos.filter((video) => video.id !== id));
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  const handleEdit = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const handleSave = async (updatedVideo) => {
    try {
      const savedVideo = await updateVideo(updatedVideo);
      setVideos(videos.map((video) => (video.id === savedVideo.id ? savedVideo : video)));
      setModalOpen(false);
    } catch (error) {
      console.error('Error updating video:', error);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedVideo(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const categories = videos.reduce((acc, video) => {
    const { categoria } = video;
    if (!acc[categoria]) {
      acc[categoria] = [];
    }
    acc[categoria].push(video);
    return acc;
  }, {});

  const categoryStyles = {
    'FRONT END': styles.frontend,
    'BACK END': styles.backend,
    'INOVAÇÃO E GESTÃO': styles.inovacaoEgestao,
  };

  return (
    <div className={styles.inicio}>
      <Header />
      <Banner video={videos[0]} />
      {Object.keys(categories).map((category, index) => (
        <div key={index}>
          <h2 className={`${styles.categoryTitle} ${categoryStyles[category]}`}>{category}</h2>
          <div className={styles.cardsContainer}>
            {categories[category].map((video) => (
              <Card 
                key={video.id} 
                video={video} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
              />
            ))}
          </div>
        </div>
      ))}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSave={handleSave} 
        video={selectedVideo} 
      />
      <Rodape />
    </div>
  );
};

export default Inicio;
