import React from 'react';
import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";

const WrongPage = () => (
    <div>
        <Typography>Sorry, there is nothing here</Typography>
        <Link to="/">Home</Link>
    </div>
);

export default WrongPage;
