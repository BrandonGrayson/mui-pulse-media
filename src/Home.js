import { Typography, Grid, Button } from '@mui/material';
import Navbar from './Header_Footer/Header';
import "./Home.css"

export default function Home() {
    return (
        <Grid container >
            <Grid item xs={12} sx={{ height: "98vh" }} width="100vw" >
                <img src="./img/Pulse-background.jpeg" style={{ height: '100%', width: '100%' }} />
                <Navbar />
            </Grid>
        </Grid>
    )
}