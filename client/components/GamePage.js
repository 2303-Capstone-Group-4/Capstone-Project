import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const GamePage = () => {
  let navigate = useNavigate();
  const changeRoute = () => {
    let path = '/home';
    navigate(path);
  };

  return (
    <div id="home-page">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="start-button"
        onClick={changeRoute}
      >
        Return Home!
      </motion.button>
    </div>
  );
};

export default GamePage;
