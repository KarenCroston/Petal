import React from 'react'
import PlantCard from './PlantCard';
import SwipeableViews from 'react-swipeable-views';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import {useTheme } from '@mui/material/styles';


const plantCardData = [
  {
    title: "Plant 1",
    description: "Planty plant plant",
    url: "https://picsum.photos/300/300",
    key: 0
  },
  {
    title: "Plant 2",
    description: "Planty plant plant",
    url: "https://picsum.photos/300/300",
    key: 1
  },
  {
    title: "Plant3",
    description: "Planty plant plant",
    url: "https://picsum.photos/300/300",
    key: 2
  }
];

  function SwipeableCards({activeStep, setActiveStep}) {
    const handleStepChange = (step) => {
      setActiveStep(step);
    };

    return (
        <SwipeableViews
          style={{padding: 38, paddingTop:0}}
          axis="x"
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {plantCardData.map(plant => (
              <PlantCard
                  key={plant.key}
                  title={plant.title}
                  description={plant.description}
                  url={plant.url}
              />
          ))}
        </SwipeableViews>
    );
}

function SwipeButtons ({activeStep, setActiveStep}) {
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const maxSteps = plantCardData.length

  return (
    <MobileStepper
      dotActive={{color:"green"}}
      sx={(theme) => ({
        marginTop:-5,
        "& .MuiMobileStepper-dotActive": {
            backgroundColor: 'grey'
          },
      })
    }
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      nextButton={
        
      <Button
      sx={{marginTop:-55,"&:hover": {backgroundColor: "transparent"},padding:0,height:0,width:0}}
        disableRipple="true"
        type="submit"
        size="small"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
        >
        <img 
        src={require("../styles/Group 57.png")}
        style={{height:50,aspectRatio: 16/16}}
        />
      </Button>
      
    }
      backButton={
        <Button 
        sx={{marginTop:-55,"&:hover": {backgroundColor: "transparent"},padding:0,height:0,width:0}}
        disableRipple="true"
        size="small" 
        onClick={handleBack} 
        disabled={activeStep === 0}
        pointerEvents='none'
        >
        <div style={{
          transform:"rotate(180deg)", 
          transform:"scaleX(-1)",
          lineHeight:0,
          padding:0,
          }}>       
        <img 
        src={require("../styles/Group 57.png")}
        style={{height:50,aspectRatio: 16/16}}
        />
        </div>
        
        </Button>
      }
    />
  )
}

export default function TopCarousel() {
  const [activeStep, setActiveStep] = React.useState(0);
  console.log('Carousel:', activeStep);
  
  return (
    <>
      <SwipeableCards
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <SwipeButtons
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </>
  )
}
