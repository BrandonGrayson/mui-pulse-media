import { Box, Typography, Grid, Button } from '@mui/material';
export default function Home() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: "primary.secondary",
                    mt: '15vh',
                }}>
                    <Typography
                        variant="h2"
                        width="bold"
                     >Engineered
                    </Typography>
                    <Box>
                    <Typography
                        variant="h4"
                        pt="3%">
                        To Grow Your Business
                    </Typography>
                    </Box>
                    <Box
                     sx={{
                         pt: '2%'
                     }}>
                        <Typography>"Pulse": A business model designed to create opportunities for referrals to happen.</Typography>
                    </Box>
                    <Box
                     mt='2%'>
                    <Button color="success" variant="contained">Pulse Check</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}