import React from 'react';
import Carousel from '../components/SwipableCards';
import DashHeader from '../components/DashHeader';
import '../index.css';
import TopCarousel from '../components/TopSwipableCards';
import { Typography } from '@mui/material';


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

function Dashboard() {

    return (
      <div className = "dashBoardWrapper">
        <DashHeader />

        <Typography sx={styles.root}>
          Your Plant Library
        </Typography>
        <Carousel /> 

        <Typography sx={styles.root}>
          Top Picks
        </Typography>

        <TopCarousel/>
      </div>
    );
  }
  
  export default Dashboard;
  