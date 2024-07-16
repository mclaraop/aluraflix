import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import NovoVideo from './pages/NovoVideo';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/novo-video" element={<NovoVideo />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;



