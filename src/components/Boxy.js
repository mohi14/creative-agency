import { Box, CssBaseline, Paper } from '@mui/material';
import React from 'react';
import MaterialCard from './MaterialCard';


const Boxy = () => {
    return (
        <Paper sx={{
            height: "100vh",
            width: "100vw",
            // bgcolor: "primary.main",
            display: "grid",
            placeItems: "center"
        }}>

            <MaterialCard />
            <CssBaseline />
            <Paper sx={{
                width: "100px",
                height: "100px"
            }}>

            </Paper>
        </Paper>
    );
};

export default Boxy;