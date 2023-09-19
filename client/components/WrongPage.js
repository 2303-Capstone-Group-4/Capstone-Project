import React from 'react';
import { Link } from 'react-router-dom';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const WrongPage = () => (
    <Box>
        <Typography>Sorry, there is nothing here</Typography>
        <Link to="/">Home</Link>
    </Box>
);

export default WrongPage;
