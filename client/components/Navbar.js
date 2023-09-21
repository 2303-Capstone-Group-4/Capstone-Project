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
          sx={{ fontWeight: 'bold', fontSize: 'x-large' }}
        >
          Language Knight
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-evenly' }}
        >
          <Link
            to="/"
            className="navlink"
          >
            Home
          </Link>
          <Link
            to="/Tier1Info"
            className="navlink"
          >
            Tier 1 Info
          </Link>
          <Link
            to="/Tier2Info"
            className="navlink"
          >
            Tier 2 Info
          </Link>
          <Link
            to="/Tier3Info"
            className="navlink"
          >
            Tier 3 Info
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navbar;
