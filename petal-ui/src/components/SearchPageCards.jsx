import React from 'react'
import {Card,CardActionArea, Typography} from '@mui/material';
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
        marginLeft: 4,
        marginRight: 1,
        boxShadow: 6
    },

}

 
function SearchPageCards({title, description,url,id}) {
  const navigate = useNavigate();
  const handleButtonClick = (evt) => {
    console.log("SearchPageCards event: " + evt.target)
    debugger;
    navigate(`/plantdetail/${evt.currentTarget.id}`);
  };
    return(
        <>
        <div id={id} styles={{background: '#518273'}} onClick={(event) =>handleButtonClick(event)}>
        <Card sx={styles.root}>
        <CardActionArea sx={{justifyContent: 'flex-start', height:CARD_HEIGHT}}
        >
        <div style={{display: 'flex', flexDirection: 'column'}}>

        <div style={{width: '95%',marginLeft:10, marginTop: -22}}>
          <CardMedia
            sx={{borderRadius: '16px'}}
            component="img"
            width={100}
            height={230}
            image= {url}
            alt="plant"
          />
          </div>

              <div style={{marginTop: 15}}>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
              </div>

              <div style={{}}>
                <Typography>
                  {description}
                </Typography>
              </div>

          </div>
        </CardActionArea>
      </Card>
      </div>
      </>
    )
}

export default SearchPageCards