import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

let avatarPosition = 0;

  const keys = {
    left: 37,
    right: 39,
  };

  function handleKey(e) {
    switch (e.keyCode) {
      case keys.left:
        avatarPosition--;
        break;
      case keys.right:
        avatarPosition++;
        break;
    }
  }

  window.addEventListener("keydown", handleKey);

//maybe have the avatar start in the first position, then adjust the index by 1 in the appropriate direction

const GameBoard = () => {

  window.addEventListener("keydown", handleKey);

  return (
    <div>
      <h3>This is the GameBoard</h3>

      <Box sx={{ flexGrow: 1}}>
        <p>User Score: {0}</p>
        <p>User Health: {3}</p>
      </Box>

      <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={1} columns={10} align="center">
          {Array.from(Array(10)).map((_, index) => (
            <Grid xs={1} key={index} sx={{ border: 1}}>
              <p>Space {avatarPosition}</p>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default GameBoard;
