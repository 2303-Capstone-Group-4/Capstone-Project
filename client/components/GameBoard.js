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
import Box from '@mui/material/Box';

const GameBoard = (props) => {
  const { state } = useLocation();
  const { language, character } = state;
  // console.log(language);
  // console.log(character);

  const [position, setPosition] = useState(1);
  const [health, setHealth] = useState(0);

  const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //when game starts, 1st space is where the character is
  //other spaces are empty
  //

  const changePosition = (space) => {
    //onClick, change Character position to be on clicked Button
      //setPosition(space);
        //console.log(space);
        //console.log(position);
      //if clicked, show image
      //
    //remove Character from Previous Position
  };
  
  const gameItems = spaces.map((space) => (
    <TableCell key={space} onClick={() => console.log(space)}>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ flexDirection: "column" }}>
        <img
          src={'./20230907_180304.jpg'}
          alt={''}
        />
        <Button variant="outlined" sx={{ justifyContent: "center"}}>
          {space}
        </Button>
      </Box>    
    </TableCell>
  ));

  return (
    <div id="gameboard">
      <UserInfo health={health}/>
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
