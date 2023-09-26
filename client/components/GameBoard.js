import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import QuizPopup1 from './QuizPopup1';
import QuizPopup2 from './QuizPopup2';
import QuizPopup3 from './QuizPopup3';
import Tier1Info from './Tier1Info.js';
import Tier2Info from './Tier2Info.js';
import Tier3Info from './Tier3Info.js';
import { setPosition, setInfo1, setInfo2, setInfo3 } from '../store/store';

const GameBoard = () => {
  const dispatch = useDispatch();
  const { position, character, language, tier1complete, tier2complete } =
    useSelector((state) => state);
  const navigate = useNavigate();

  let imgsrc = '';
  if (character === 'char1') {
    imgsrc = './images/20230907_180304.jpg';
  } else if (character === 'char2') {
    imgsrc = './images/20230907_180322.jpg';
  } else if (character === 'char3') {
    imgsrc = './images/20230907_180337.jpg';
  } else if (character === 'char4') {
    imgsrc = './images/20230907_180348.jpg';
  }

  const spaces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const onKeyDown = (ev) => {
    if (ev.code === 'ArrowLeft') {
      if (position > 0) {
        dispatch(setPosition(position - 1));
      }
    } else if (ev.code === 'ArrowRight') {
      if (position === 4 && tier1complete === false) {
        alert('Complete the first quiz before proceeding further!');
      } else if (position === 7 && tier2complete === false) {
        alert('Complete the second quiz before proceeding further!');
      } else if (position < 9) {
        dispatch(setPosition(position + 1));
      }
    }
  };

  useEffect(() => {
    setPosition(0);
    if (language === '') {
      navigate('/');
    } else {
      dispatch(setInfo1(language));
      setTimeout(() => dispatch(setInfo2(language)), 1000);
      setTimeout(() => dispatch(setInfo3(language)), 2000);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  const gameItems = spaces.map((space) => (
    <TableCell
      id="board"
      key={space}
      sx={{ borderBottom: 'none' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '100px',
        }}
      >
        {space === position ? (
          <img
            src={imgsrc}
            alt={''}
            style={{
              width: '100%',
              justifyContent: 'center',
              borderRadius: '15px',
              boxShadow: '5px 5px 5px black',
              minHeight: '40.5px',
              minWidth: '40.5px',
            }}
          />
        ) : (
          <Button
            variant="outlined"
            sx={{
              justifyContent: 'center',
              borderRadius: '15px',
              borderColor: 'black',
              borderWidth: '3px',
              color: 'black',
              fontWeight: 'bold',
              padding: '5px',
            }}
          >
            <i className="fa-regular fa-chess-knight fa-3x"></i>
          </Button>
        )}
      </Box>
    </TableCell>
  ));

  return (
    <div id="gameboard">
      <h2 id="language">Language: {language}</h2>
      <TableContainer
        component={Paper}
        sx={{
          mt: 20,
          backgroundImage: 'radial-gradient(rgba(0,0,0,.4), rgba(0,0,0,0.2))',
          backgroundColor: 'rgba(0,0,0,0)',
        }}
      >
        <Table>
          <TableBody>
            <TableRow>{gameItems}</TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {position === 2 ? <Tier1Info /> : <div />}
      {position === 3 ? <QuizPopup1 /> : <div />}
      {position === 5 ? <Tier2Info /> : <div />}
      {position === 6 && tier1complete ? <QuizPopup2 /> : <div />}
      {position === 8 ? <Tier3Info /> : <div />}
      {position === 9 && tier2complete ? <QuizPopup3 /> : <div />}
    </div>
  );
};

export default GameBoard;
