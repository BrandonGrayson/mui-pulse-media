import { Box, Typography, Grid, Button } from '@mui/material';
import React from 'react';
import "./Home.css"

export default function Home() {
    return (
        <>
            <Grid container spacing={2} id="container">
                {/* <Grid item xs={6}> */}
                <Grid item xs={12} md={8} lg={7}>
                    <Typography

                        width="bold"
                        color="pulse.headerText"
                        id='header'
                    >Designed to
                    </Typography>

                    <Typography
                        variant="h4"
                        pt="3%"
                        color="pulse.subtitleText"
                        id="sub-header">
                        generate referrals
                    </Typography>
                </Grid>
                {/* <Grid item xs={4}> */}
                <Grid item xs={12} md={4} lg={4} className="hero-grid">
                    <Box
                        component='img'
                        alt="Pulse Media Hero"
                        src="img/pulseHeroImg.png"
                        className="hero-img"
                    >
                    </Box>
                </Grid>
            </Grid>
        </>

    )
}