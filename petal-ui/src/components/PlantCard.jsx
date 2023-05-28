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
        height:'75%', 
        width:'95%',
        padding:0,
        margin:1,
        borderRadius: 3, 
    }

}

export default function PlantCard({ title, description, url, plantData, setPlandData }) {

    return (
        <Card sx={styles.root}>
            <CardMedia
                sx={styles.urlstyles}
                image={url}
                title="Plant Card"
                component='img'
            />
            <div styles ={{display:'flex', flexDirection:'column', flexWrap: 'wrap', justifyContent:'left'}}>
                <Typography sx={{justifyContent:'left',display:'flex', marginTop:-8, marginLeft:4}}>
                    {title}
                </Typography>
                <Typography sx = {{marginLeft:4, color:'grey'}}>
                    {description}
                </Typography>
            </div>
        </Card>
    );
}

