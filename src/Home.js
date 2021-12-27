import { Box, Typography } from '@mui/material';
export default function Home() {
    return (
        <Box sx={{
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            mt: '10%',
            color: "primary.secondary"
        }}>
            <Typography
                variant="h2"
            >Engineered
           </Typography>
            <Typography
                variant="h4"
                pt="2%">
                To Grow Your Business
           </Typography>


        <Box>
        <Typography>
               "Pulse": A method of collecting customer Data, Engaging clients, and showcasing customer experiences. 
           </Typography>
        </Box>

        </Box>
    )
}