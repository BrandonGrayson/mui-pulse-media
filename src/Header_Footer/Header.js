import * as React from 'react';
import {Box, Typography} from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
       sx={{
         color: "primary.secondary",
         pl: "5%",
         pt: " 2%",
        }}>
        <Typography>Pulse Media</Typography>
      </Box>
    </Box>
  );
}