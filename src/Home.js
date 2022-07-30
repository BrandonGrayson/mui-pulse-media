import { Box, Typography, Grid, Card, CardContent, CardHeader, Button, CardActions } from '@mui/material';
import { React, useState } from 'react';
import "./Home.css"

export default function Home() {
    const [showDialog, setShowDialog] = useState(false)
    return (
        <>
            <Grid container spacing={2} id="container">
                <Grid item xs={10} md={12} lg={3} sx={{ marginLeft: "15vw" }} id="title">
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
                    xs={10} md={10} lg={6}
                    sx={{ display: 'flex', justifyContent: 'center', overflow: 'none', position: 'relative' }}
                >
                    <Box sx={{ display: 'block' }}>
                        <Box
                            component='img'
                            alt="Pulse Media Hero"
                            src="img/pulseHeroImg.png"
                            className="hero-img"
                        />
                    </Box>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={8} display='flex' flexDirection="row" mt={5} className="about-box">
                <Box className="bar"></Box>
                <Typography id="about" sx={{ marginRight: '5vw', display: 'flex', alignItems: 'center' }}>
                    Pulse Media is a branding agency based in Mt Laurel, NJ.
                    We help home remodeling companies generate referrals through online brand promotion.
                </Typography>
            </Grid>

            <Grid item xs={12} mt={3} pb={4} display='flex' justifyContent='center'>
                <Typography id="what">
                    What We Do
                </Typography>
            </Grid>
            <Grid container >
                <Grid item xs={12} md={4} px={3} mb={2} className="card-group" >
                    <Card className="card">
                        <CardHeader title="Google Reviews" />
                        <CardContent>
                            <Typography>Generate Consistent Reviews </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" onClick={() => setShowDialog(true)} >Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} px={3} mb={2} className="card-group" >
                    <Card className="card">
                        <CardHeader title="Social Media" />
                        <CardContent>
                            <Typography>Generate Consistent Reviews </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained"  >Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} px={3} mb={2} className="card-group" >
                    <Card className="card">
                        <CardHeader title="Web Development" />
                        <CardContent>
                            <Typography>Generate Consistent Reviews </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" >Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </>

    )
}