import { Typography, Grid } from '@mui/material';
import Navbar from './Header_Footer/Header';
import "./Home.css"

export default function Home() {
    return (
        <Grid container>
            <Grid item xs={12} mt="2vh" >
                <Navbar />
            </Grid>

            {/* <Typography color='primary.main'>Pulse</Typography> */}
        </Grid>
    )
}