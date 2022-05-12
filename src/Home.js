import { Typography, Grid } from '@mui/material';
export default function Home() {
    return (
        <Grid container>
            <Grid item xs={12} display='flex' justifyContent="center" mt="15%"
                alignItems="center">
                <Typography
                    variant="h2"
                    width="bold"
                    color="pulse.headerText"
                >Pulse <span style={{ paddingLeft: '2px' }}>Media</span>
                </Typography>
            </Grid>
            <Grid item xs={12} display='flex' justifyContent="center" ml='auto' mr="auto">
                <Typography
                    variant="h6"
                    pt="3%"
                    color="pulse.subtitleText">
                    Engineered to generate referrals
                </Typography>
            </Grid>


        </Grid>
    )
}