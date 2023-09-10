import React from 'react';
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

  //let avatarPosition = 0;

  // const keys = {
  //   left: 37,
  //   right: 39,
  // };

  // function handleKey(e) {
  //   switch (e.keyCode) {
  //     case keys.left:
  //       avatarPosition-=1;
  //       console.log(avatarPosition);
  //       break;
  //     case keys.right:
  //       avatarPosition+=1;
  //       console.log(avatarPosition);
  //       break;
  //   }
  // }

  // function handleClick(space) {
  //   console.log(space + " button clicked");
  // }

  //window.addEventListener("keydown", handleKey);

//maybe have the avatar start in the first position, then adjust the index by 1 in the appropriate direction

//to prevent errors, will want to do something so the player character can't go left from the starting position, and when they hit the last space / last quiz battle, the game ends

//if grid index is = avatarPosition, have avatar be what fills in the grid index. otherwise keep it empty? 

//if (avatarPosition === index) {<p>Avatar could be here!</p>}
              
const GameBoard = () => {
  const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // function handleClick(e) {
  //   console.log(space + " button clicked");
  // }

  const gameItems = spaces.map((space) =>
    <TableCell key={space}>
      <Button variant="outlined">{space}</Button>
    </TableCell>
  )
  
  return (
    <div>
      <h3>This is the GameBoard</h3>

      <Box sx={{ flexGrow: 1}}>
        <p>User Score: {0}</p>
        <p>User Health: {3}</p>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              {gameItems}              
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default GameBoard;
