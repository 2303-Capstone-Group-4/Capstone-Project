import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import QuizPopup from './QuizPopup';

const GameBoard = (props) => {
  const { state } = useLocation();
  const { language, character } = state;
  // console.log(language);
  // console.log(character);

  const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const gameItems = spaces.map((space) => (
    <TableCell key={space}>
      <img
        src={'./20230907_180304.jpg'}
        alt={''}
      />
      <Button variant="outlined">{space}</Button>
    </TableCell>
  ));

  return (
    <div id="gameboard">
      <h3>This is the GameBoard</h3>

      <Box sx={{ flexGrow: 1 }}>
        <p>User Score: {0}</p>
        <p>User Health: {3}</p>
      </Box>

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
