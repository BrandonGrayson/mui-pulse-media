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
                     >We Are Pulse Media
                    </Typography>
                    <Box>
                    <Typography
                        variant="h4"
                        pt="3%">
                        A system designed to track customer data and generate referrals 
                    </Typography>
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