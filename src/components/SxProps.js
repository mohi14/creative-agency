import { Button } from '@mui/material';
import { bgcolor } from '@mui/system';
import React, { useState } from 'react';

const SxProps = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div style={{
            margin: "50px"
        }}>
            <Button variant='contained' sx={[{
                border: "2px solid red",
                bgcolor: 'steelblue',
                // padding: "1rem"
                // padding: 2
                p: 2
            },
            isActive && {

                background: "yellow"

            }]}>Submit</Button>
            <Button variant='contained' sx={{
                ml: 2,
                // width: {
                //     xs: 100, // theme.breakpoints.up('xs')
                //     sm: 200, // theme.breakpoints.up('sm')
                //     md: 300, // theme.breakpoints.up('md')
                //     lg: 400, // theme.breakpoints.up('lg')
                //     xl: 500, // theme.breakpoints.up('xl')
                // },
                width: [100, 200, 300, 400, 500],
                '&.MuiButton-root': {
                    padding: '3rem'
                }
            }}>Cancel</Button>
        </div >
    );
};

export default SxProps;