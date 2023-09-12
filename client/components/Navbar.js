import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Navbar = () => (
  <Box>
    <AppBar position="static">
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/">Home</Link>
      </Typography>
    </AppBar>
  </Box>
    // <nav>
    //   <div>
    //     <Link to="/">Home</Link>
    //   </div>
    // </nav>
);

export default Navbar;
