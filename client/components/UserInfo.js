import React from 'react';
import Box from '@mui/material/Box';

const UserInfo = (props) => {
    const { health } = props;
    return (
        <Box sx={{ flexGrow: 1 }}>
        <p>User Health: {health}</p>
        </Box>
    )   
}

export default UserInfo;