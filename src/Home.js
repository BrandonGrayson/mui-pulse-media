import { Box, Typography, Grid, Button } from '@mui/material';
export default function Home() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    ml: '15%',
                    mt: '20%'
                }}>
                    <Typography
                        variant="h2"
                        width="bold"
                        color="pulse.headerText"
                     >We Are Pulse Media
                    </Typography>
                    <Box>
                    <Typography
                        variant="h4"
                        pt="3%"
                        color="pulse.subtitleText">
                        A system designed to track customer data and generate referrals 
                    </Typography>
                    </Box>
                    <Box
                     mt='2%'>
                    <Button color='success' variant="contained">
                        <Typography color="pulse.buttonText">Pulse Check</Typography>
                    </Button>
                    </Box>
                </Box>

            </Grid>
            <Grid item xs={4}>
                    <Box
                    component='img'
                    alt="Pulse Media Hero"
                    src="img/pulseHeroImg.png"
                    sx={{
                        mt: '10%'
                    }}>
                    </Box>
                </Grid>
        </Grid>
    )
}