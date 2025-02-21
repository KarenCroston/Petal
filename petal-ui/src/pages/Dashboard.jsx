import React from 'react';
import Carousel from '../components/SwipableCards';
import DashHeader from '../components/DashHeader';
import '../index.css';
import TopCarousel from '../components/TopSwipableCards';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const styles = {
  root: {
    display:'flex',
    alignItems:'flex-start',
    flexDirection:'row',
    padding: '20px 0px 10px 22px',
    fontSize: 20,
    fontWeight: "bold"

    }
}

function Dashboard({favourites, setFavourites,plantData,setPlantData}) {
  console.log('this is plantData here for the dashboard',plantData)
  
  

    return (
      <div className = "dashBoardWrapper">
        <DashHeader/>
        

        <Typography sx={styles.root}>
          Your Plant Library
        </Typography>

        <Carousel 
        favourites={favourites} 
        setFavourites={setFavourites} 
        plantData={plantData}
        setPlantData={setPlantData}
        /> 

        <Typography sx={styles.root}>
          Top Picks
        </Typography>

        <TopCarousel/>
        
      </div>
    );
  }
  
  export default Dashboard;
  