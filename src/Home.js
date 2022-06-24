import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import "./Home.css"

export default function Home() {
    return (
        <>
            <Grid container spacing={2} id="container">
                <Grid item xs={12} md={12} lg={3} sx={{ marginLeft: "15vw" }} id="title">
                    <Typography
                        variant="h2"
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

                <Grid
                    item
                    xs={12} md={12} lg={6}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                    className="hero-grid">
                    <Box
                        component='img'
                        alt="Pulse Media Hero"
                        src="img/pulseHeroImg.png"
                        className="hero-img"
                    >
                    </Box>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={8} display='flex' flexDirection="row" mt={5}>
                <Box className="bar"></Box>
                <Typography id="about" sx={{ marginRight: '5vw', display: 'flex', alignItems: 'center' }}>
                    Pulse Media is a branding agency based in Mt Laurel, NJ.
                    We help home remodeling companies generate referrals through online brand promotion.
                </Typography>
            </Grid>


            {/* <Grid item xs={12} mt={3} display='flex' justifyContent='center'>
                <Typography>
                    What We Do
                </Typography>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent='center'>
                <Box className='right-bar'></Box>
            </Grid> */}


        </>

    )
}