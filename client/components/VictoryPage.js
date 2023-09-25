import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
// import Particles from 'react-particles';
// import type { Engine } from 'tsparticles-engine';
// import { loadFireworksPreset } from 'tsparticles-preset-fireworks';
// import { tsParticles } from 'tsparticles-engine';

const VictoryPage = () => {
  const navigate = useNavigate();

  // const customInit = async (engine: Engine) => {
  //   await loadFireworksPreset(engine);
  // };

  // tsParticles.load('tsparticles', {
  //   fullScreen: {
  //     zIndex: 1,
  //   },
  //   particles: {
  //     color: {
  //       value: ['#FFFFFF', '#FFd700'],
  //     },
  //     move: {
  //       direction: 'bottom',
  //       enable: true,
  //       outModes: {
  //         default: 'out',
  //       },
  //       size: true,
  //       speed: {
  //         min: 1,
  //         max: 3,
  //       },
  //     },
  //     number: {
  //       value: 500,
  //       density: {
  //         enable: true,
  //         area: 800,
  //       },
  //     },
  //     opacity: {
  //       value: 1,
  //       animation: {
  //         enable: false,
  //         startValue: 'max',
  //         destroy: 'min',
  //         speed: 0.3,
  //         sync: true,
  //       },
  //     },
  //     rotate: {
  //       value: {
  //         min: 0,
  //         max: 360,
  //       },
  //       direction: 'random',
  //       move: true,
  //       animation: {
  //         enable: true,
  //         speed: 60,
  //       },
  //     },
  //     tilt: {
  //       direction: 'random',
  //       enable: true,
  //       move: true,
  //       value: {
  //         min: 0,
  //         max: 360,
  //       },
  //       animation: {
  //         enable: true,
  //         speed: 60,
  //       },
  //     },
  //     shape: {
  //       type: ['circle', 'square'],
  //       options: {},
  //     },
  //     size: {
  //       value: {
  //         min: 2,
  //         max: 4,
  //       },
  //     },
  //     roll: {
  //       darken: {
  //         enable: true,
  //         value: 30,
  //       },
  //       enlighten: {
  //         enable: true,
  //         value: 30,
  //       },
  //       enable: true,
  //       speed: {
  //         min: 15,
  //         max: 25,
  //       },
  //     },
  //     wobble: {
  //       distance: 30,
  //       enable: true,
  //       move: true,
  //       speed: {
  //         min: -15,
  //         max: 15,
  //       },
  //     },
  //   },
  // });

  // const [language, changeLanguage] = useState('');
  // const [selectedChar, changeSelectedChar] = useState({
  //   char1: false,
  //   char2: false,
  //   char3: false,
  //   char4: false,
  // });
  // const dispatch = useDispatch();

  // const navigate = useNavigate();

  // const changeRoute = () => {
  //   if (
  //     !selectedChar.char1 &&
  //     !selectedChar.char2 &&
  //     !selectedChar.char3 &&
  //     !selectedChar.char4 &&
  //     language === ''
  //   ) {
  //     alert('Make sure to enter a language and select a character!');
  //   } else if (language === '') {
  //     alert('Make sure to enter a language!');
  //   } else if (
  //     !selectedChar.char1 &&
  //     !selectedChar.char2 &&
  //     !selectedChar.char3 &&
  //     !selectedChar.char4
  //   ) {
  //     alert('Make sure to select a character!');
  //   } else {
  //     let path = '/GameBoard';
  //     let character = '';
  //     if (selectedChar.char4 === true) {
  //       character = 'char4';
  //     } else if (selectedChar.char3 === true) {
  //       character = 'char3';
  //     } else if (selectedChar.char2 === true) {
  //       character = 'char2';
  //     } else {
  //       character = 'char1';
  //     }
  //     dispatch(setLanguage(language));
  //     dispatch(setCharacter(character));
  //     navigate(path);
  //   }
  // };

  // const selectChar = (inputChar) => {
  //   let newState = {
  //     char1: false,
  //     char2: false,
  //     char3: false,
  //     char4: false,
  //   };
  //   if (selectedChar[inputChar] != true) {
  //     newState[inputChar] = true;
  //   }
  //   changeSelectedChar(newState);
  // };

  return (
    <div id="home-page">
      {/* <Particles
        options={{ preset: 'fireworks' }}
        init={customInit}
      /> */}
      <h2 id="input-label">Victory!!!</h2>
      {/*      <h2 id="input-label">Enter Language Here:</h2>
       <input
         id="language-input"
         value={language}
         onChange={(ev) => changeLanguage(ev.target.value)}
       />
       <div id="character-selector">
         <h2 id="character-label">Select Character Here:</h2>
         <div id="char-images">
           <motion.img
             src={'./images/20230907_180304.jpg'}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             className={selectedChar.char1.toString() + '-selected'}
             onClick={() => selectChar('char1')}
           />
           <motion.img
             src={'./images/20230907_180322.jpg'}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             className={selectedChar.char2.toString() + '-selected'}
             onClick={() => selectChar('char2')}
           />
           <motion.img
             src={'./images/20230907_180337.jpg'}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             className={selectedChar.char3.toString() + '-selected'}
             onClick={() => selectChar('char3')}
           />
           <motion.img
             src={'./images/20230907_180348.jpg'}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             className={selectedChar.char4.toString() + '-selected'}
             onClick={() => selectChar('char4')}
           />
         </div>
       </div> */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="start-button"
        onClick={navigate('/')}
      >
        Click to Play Again!
      </motion.button>
    </div>
  );
};

export default VictoryPage;
