import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const styles = {
    root: {
        width: '300px',
        height: '350px', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems:'flex-start',
        borderRadius: 4,
        marginRight: -24,
        filter: 'drop-shadow(0 0 0.27rem lightgrey);',
        marginLeft:1.8,
        marginTop:1,
        marginBottom:1,
    },

    urlstyles: {
        height:'80%', 
        width:'95%',
        padding:0,
        margin:1,
        borderRadius: 3, 
    }

}

export default function PlantCard({ title, description, url }) {
  
    return (
        <Card sx={styles.root}>
            <CardMedia
                sx={styles.urlstyles}
                image={url}
                title="Plant Card"
            />
            <CardContent>
                <Typography sx={{padding:0,marginLeft:'-59px'}}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

