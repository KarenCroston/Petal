import React, { useState } from 'react'
import {Button, Card,CardActionArea, Typography} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from "react-router-dom";


const CARD_HEIGHT = 350;

const styles = {
    root: {
        borderRadius: '16px',
        display: 'flex',
        marginTop: 2,
        flexDirection: 'column',
        justifyContent:'center',
        height: CARD_HEIGHT,
        marginLeft: 1,
        marginRight: 1,
        boxShadow: 6
    },

}

 
function SearchPageCards({ title, url, description, id,favourites, setFavourites}) {
  const navigate = useNavigate();
  const handleButtonClick = (evt) => {
    navigate(`/plantdetail/${id}`);
  };
    return(
        <>
        <div styles={{background: '#518273'}} 
        
        >
        <Card sx={styles.root}>
        {/* <CardActionArea sx={{justifyContent: 'flex-start', height:200, width:360, backgroundColor:'blue', marginTop:-13}}
        > */}
        <div style={{display: 'flex', flexDirection: 'column'}}>

        <div style={{width: '95%',marginLeft:10, marginTop: -15}}>
          <CardMedia
            onClick={handleButtonClick}
            sx={{borderRadius: '16px'}}
            component="img"
            width={100}
            height={230}
            image={url}
            alt="plant"
            
          />
          </div>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', marginTop:50,marginLeft:20}}>

              <Button 
              onClick={() => setFavourites([...favourites, {title,url,description,id}])}
              sx={{height:0, width:0, display:'flex', disableRipple:'true'}}
              >
              <img src={require("../styles/Favourites.png")}>

              </img>

              </Button>

              <div style={{marginTop:-30, marginLeft:55}}>
                <Typography gutterBottom variant="h5" component="div">
                  {title.charAt(0).toUpperCase() + title.slice(1)}
                </Typography>
              

                    <div>

                      <Typography>
                        {description}
                      </Typography>

                      </div>
              </div>
              </div>
          </div>
        {/* </CardActionArea> */}
      </Card>
      </div>
      </>
    )
}

export default SearchPageCards