import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const UserInfo = (props) => {
    const { health } = props;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6">User Health: {health}</Typography>
        </Box>
    )   
}

export default UserInfo;