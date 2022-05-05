import { Box, Typography, Grid, Button } from '@mui/material';
export default function Home() {
    return (
        <Grid container>
            <Grid item xs={12} display='flex' flexDirection='column' justifyContent="center" minHeight='70%'
                alignItems="center">
                {/* <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'red',
                    alignItems: 'center'
                    // ml: '15%',
                    // mt: '20%'
                }}> */}
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
                        A system designed to generate referrals
                    </Typography>
                </Box>
                <Box
                    mt='2%'>
                    <Button color='success' variant="contained">
                        <Typography color="pulse.buttonText">Pulse Check</Typography>
                    </Button>
                </Box>
                {/* </Box> */}

            </Grid>

        </Grid>
    )
}