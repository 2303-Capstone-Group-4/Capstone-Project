import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const GameBoard = () => {
  {/* Thinking a 10 x grid, block out the square we aren't using */}

  {/* for (let i = 0; i < 60; i++) {
          
    } 
  */}

  return (
    <div>
      <h3>This is the GameBoard</h3>

      <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={1} columns={10} align="center">
        {Array.from(Array(60)).map((_, index) => (
          <Grid xs={1} key={index}>
            <p>Space {index+1}</p>
          </Grid>
        ))}
      </Grid>
      </Box>
    </div>
  );
};

export default GameBoard;
