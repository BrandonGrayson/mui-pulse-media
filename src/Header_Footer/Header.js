import * as React from 'react';
import { Box, Typography } from '@mui/material';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

export default function Navbar() {
  return (
    <Box
      sx={{
        color: "primary.secondary",
        height: '8vh',
        backgroundColor: '#6E7EE0',
        display: 'flex',
        flexDirection: 'row',
      }}
      pt={1.5}
    >
      <MonitorHeartIcon color='primary' fontSize="large" className='nav-icon' sx={{ marginLeft: '5vw' }} />
      <Typography pl={1} fontSize='x-large'>Pulse Media</Typography>
    </Box >
  );
}