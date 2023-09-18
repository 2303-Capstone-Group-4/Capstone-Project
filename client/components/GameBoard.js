import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import QuizPopup from './QuizPopup';
import UserInfo from './UserInfo';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { setPosition } from '../store/store';

const GameBoard = () => {
  const dispatch = useDispatch();
  const position = useSelector((state) => state.reduxStore.position);
  const character = useSelector((state) => state.reduxStore.character);

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

  const [health, setHealth] = useState(0);

  const spaces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const onKeyDown = (ev) => {
    if (ev.code === 'ArrowLeft') {
      if (position > 0) {
        dispatch(setPosition(position - 1));
      }
    }
    if (ev.code === 'ArrowRight') {
      if (position < 9) {
        dispatch(setPosition(position + 1));
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  useEffect(() => {
    dispatch(setPosition(0));
  }, []);

  const gameItems = spaces.map((space) => (
    <TableCell
      key={space}
      onClick={() => console.log(space)}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ flexDirection: 'column' }}
      >
        {space === position ? (
          <img
            src={imgsrc}
            alt={''}
          />
        ) : (
          <Button
            variant="outlined"
            sx={{ justifyContent: 'center' }}
          >
            {space}
          </Button>
        )}
      </Box>
    </TableCell>
  ));

  return (
    <div id="gameboard">
      <UserInfo health={health} />
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>{gameItems}</TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <hr />
      <QuizPopup />
    </div>
  );
};

export default GameBoard;
