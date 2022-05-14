import * as React from 'react';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { Divider } from '@mui/material';

export default function Navbar() {
  return (
    <>
      <MonitorHeartIcon color='primary' fontSize="large" className='nav-icon' sx={{ marginLeft: '10vw' }} />
      <Divider />
    </>

  );
}