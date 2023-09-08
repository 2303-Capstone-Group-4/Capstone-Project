import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [language, setLanguage] = useState('');

  let navigate = useNavigate();
  const changeRoute = () => {
    let path = '/game';
    navigate(path);
  };

  let char1 = false;
  let char2 = false;
  let char3 = false;

  return (
    <div id="home-page">
      <h2 id="input-label">Enter Language Here:</h2>
      <input
        id="language-input"
        value={language}
        onChange={(ev) => setLanguage(ev.target.value)}
      />
      <div id="character-selector">
        <h2 id="character-label">Select Character Here:</h2>
        <div id="char-images">
          <img src="20230907_180304.jpg" />
          <img src="20230907_180322.jpg" />
          <img src="20230907_180337.jpg" />
          <img src="20230907_180348.jpg" />
        </div>
      </div>
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
