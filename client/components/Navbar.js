import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => (
  <Box
    sx={{ flexGrow: 1 }}
    id="navbar"
  >
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          <Link to="/">Home</Link>
          <Link to="/Tier1Info">Tier1Info</Link>
          <Link to="/Tier2Info">Tier2Info</Link>
          <Link to="/Tier3Info">Tier3Info</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navbar;
