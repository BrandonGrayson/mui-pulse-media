import { Box, Typography, Grid, Button } from '@mui/material';
export default function Home() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box sx={{
                    display: 'flex',
                    height: '90vh',
                    width: '100vw',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: "primary.secondary",
                    mt: '10vh'
                }}>
                    <Typography
                        variant="h2"
                     >Engineered
                    </Typography>
                    <Box>
                    <Typography
                        variant="h4"
                        pt="2%">
                        To Grow Your Business
                    </Typography>
                    </Box>
                    <Box
                     sx={{
                         pt: '2%'
                     }}>
                        <Typography>"Pulse": A method of collecting customer data, engaging clients, and increasing referrals</Typography>
                    </Box>
                     <Button color="success" variant="contained">Pulse Check</Button>

                </Box>
            </Grid>
        </Grid>
    )
}