import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

  let avatarPosition = 0;

  const keys = {
    left: 37,
    right: 39,
  };

  function handleKey(e) {
    switch (e.keyCode) {
      case keys.left:
        avatarPosition-=1;
        console.log(avatarPosition);
        break;
      case keys.right:
        avatarPosition+=1;
        console.log(avatarPosition);
        break;
    }
  }

  window.addEventListener("keydown", handleKey);

//maybe have the avatar start in the first position, then adjust the index by 1 in the appropriate direction

//to prevent errors, will want to do something so the player character can't go left from the starting position, and when they hit the last space / last quiz battle, the game ends

//if grid index is = avatarPosition, have avatar be what fills in the grid index. otherwise keep it empty? 

//if (avatarPosition === index) {<p>Avatar could be here!</p>}
              

const GameBoard = () => {
  
  return (
    <div>
      <h3>This is the GameBoard</h3>

      <Box sx={{ flexGrow: 1}}>
        <p>User Score: {0}</p>
        <p>User Health: {3}</p>
      </Box>

      <Box sx={{ flexGrow: 1}}>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <List>
            <ListItem tabIndex={1}>
              <ListItemText primary="1" />
            </ListItem>
            <ListItem tabIndex={2}>
              <ListItemText primary="2" />
            </ListItem>
            <ListItem tabIndex={3}>
              <ListItemText primary="3" />
            </ListItem>
            <ListItem tabIndex={4}>
              <ListItemText primary="4" />
            </ListItem>
            <ListItem tabIndex={5}>
              <ListItemText primary="5" />
            </ListItem>
            <ListItem tabIndex={6}>
              <ListItemText primary="6" />
            </ListItem>
            <ListItem tabIndex={7}>
              <ListItemText primary="7" />
            </ListItem>
            <ListItem tabIndex={8}>
              <ListItemText primary="8" />
            </ListItem>
            <ListItem tabIndex={9}>
              <ListItemText primary="9" />
            </ListItem>
            <ListItem tabIndex={10}>
              <ListItemText primary="10" />
            </ListItem>
          </List>  
        </div>           
      </Box>
    </div>
  );
};

export default GameBoard;
