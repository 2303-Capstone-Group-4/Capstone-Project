import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Box from "@mui/material/Box";

const GamePage = () => {
  let navigate = useNavigate();
  const changeRoute = () => {
    let path = '/home';
    navigate(path);
  };

  return (
    <Box id="home-page">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="start-button"
        onClick={changeRoute}
      >
        Return Home!
      </motion.button>
    </Box>
  );
};

export default GamePage;
