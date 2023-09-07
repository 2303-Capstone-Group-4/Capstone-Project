import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const LandingPage = () => {
  return (
    <div id="home-page">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="start-button"
      >
        Click to Start!
      </motion.button>
    </div>
  );
};

export default LandingPage;
