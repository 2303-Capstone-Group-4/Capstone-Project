import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const VictoryPage = () => {
  const navigate = useNavigate();

  const changeRoute = () => {
    navigate('/');
  };

  return (
    <div id="home-page">
      <motion.h2
        animate={{ scale: [0.7, 1.0, 0.7] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        id="victory"
      >
        VICTORY!!!
      </motion.h2>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="start-button"
        onClick={changeRoute}
      >
        Click to Start a New Game!
      </motion.button>
    </div>
  );
};

export default VictoryPage;
