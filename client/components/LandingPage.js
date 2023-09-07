import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  let navigate = useNavigate();
  const changeRoute = () => {
    let path = '/game';
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
        Click to Start!
      </motion.button>
    </div>
  );
};

export default LandingPage;
