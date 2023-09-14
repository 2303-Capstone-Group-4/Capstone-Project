import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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

const GameBoard = (props) => {
  const { state } = useLocation();
  const { language, character } = state;
  // console.log(language);
  // console.log(character);

  //State solution for where the character is located?

  const [position, setPosition] = useState(0);

  const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const changePosition = (space) => {
    //onClick, change Character position to be on clicked Button
    //remove Character from Previous Position
  };

  const gameItems = spaces.map((space) => (
    <TableCell key={space}>
      <img
        src={'./20230907_180304.jpg'}
        alt={''}
      />
      <Button variant="outlined" onClick={() => console.log(space)}>
        {space}
      </Button>
    </TableCell>
  ));

  return (
    <div id="gameboard">
      <UserInfo health={0}/>
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
