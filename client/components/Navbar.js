import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

const Navbar = () => (
  // <div id="navbar">
  //   <Box sx={{ flexGrow: 1 }}>
  //     <AppBar position="static">
  //       <Toolbar>
  //         <Typography
  //           variant="h6"
  //           component="div"
  //           sx={{ flexGrow: 1 }}
  //         >
  //           <Link to="/">Home</Link>
  //         </Typography>
  //       </Toolbar>
  //     </AppBar>
  //   </Box>
  // </div>
  <nav>
    <div id="navbar">
      <h1 style={{ textAlign: 'center' }}>Language Knight</h1>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/">Home</Link>
      </motion.div>
    </div>
  </nav>
);

export default Navbar;
