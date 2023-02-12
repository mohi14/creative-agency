import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const MaterialCard = () => {
    return (
        <Card sx={{ maxWidth: 345, p: 2 }}>
            <CardMedia
                sx={{ height: 190, borderRadius: 1 }}
                image="https://shallowfordvet.com/wp-content/uploads/2019/11/Depositphotos_8711174_xl-2015.jpg"
                title="green iguana"

            />
            <CardContent
                sx={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 0,
                    pt: 3
                }}
            >
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles
                    </Typography>
                </Box>
                <IconButton sx={{
                    border: "1px solid #dddddd"
                }}>
                    <AddIcon />
                </IconButton>
            </CardContent>
            {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
        </Card>
    );
};

export default MaterialCard;