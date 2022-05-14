import { Typography, Grid } from '@mui/material';
import Navbar from './Header_Footer/Header';
import "./Home.css"

export default function Home() {
    return (
        <Grid container >
            <Grid item xs={12} mt="2vh" >
                <Navbar />
            </Grid>

            <Grid item xs={12} display='flex' ml="5vw" mt='15vh'>
                <Typography id='header' color='pulse.headerText'>
                    Pulse Media
                </Typography>
            </Grid>

            <Grid item xs={12} display='flex' ml="5vw">
                <Typography
                    color="pulse.subtitleText"
                    id="subHeader">
                    Engineered to generate referrals
                </Typography>
            </Grid>
        </Grid>
    )
}