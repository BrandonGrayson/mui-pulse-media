import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import "./Home.css"

export default function Home() {
    return (
        <>
            <Grid container spacing={2} id="container">
                <Grid item xs={12} md={8} lg={7} sx={{ marginLeft: "5vw" }}>
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
                <Grid item xs={12} md={4} lg={4} sx={{ marginLeft: "5vw" }} className="hero-grid">
                    <Box
                        component='img'
                        alt="Pulse Media Hero"
                        src="img/pulseHeroImg.png"
                        className="hero-img"
                    >
                    </Box>
                </Grid>

            </Grid>
            <Grid container mt={5}>
                <Grid item xs={12} display='flex' flexDirection="row">
                    <Box sx={{ width: '4px', backgroundColor: '#24307D', height: '104px', marginLeft: '5vw', marginRight: '5vw' }}></Box>
                    <Typography id="about">
                        Pulse Media is a branding agency based in Mt Laurel, NJ.
                        We help home remodeling companies generate referrals by promoting their brand online.
                    </Typography>
                </Grid>
            </Grid>
        </>

    )
}