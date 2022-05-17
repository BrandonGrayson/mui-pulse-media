import * as React from 'react';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { Divider, Box } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ position: 'absolute', top: '8px', left: '16px' }}>
      <MonitorHeartIcon color='primary' fontSize="large" className='nav-icon' sx={{ marginLeft: '10vw' }} />
      <Divider />
    </Box>

  );
}