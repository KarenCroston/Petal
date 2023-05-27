import React from 'react'
import PlantCard from './PlantCard';
import SwipeableViews from 'react-swipeable-views';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import {useTheme } from '@mui/material/styles';


const plantCardData = [
  {
    title: "Butterflies Magnolia",
    description: "Magnolia 'Butterflies'",
    url: "https://perenual.com/storage/species_image/328_magnolia_butterflies/og/magnolia-yellow-blossom-magnolia-acuminata-butterflies-magnoliengewaechs-bloom.jpg",
    key: 328
  },
  {
    title: "Marilyn Magnolia",
    description: "Magnolia 'Marilyn'",
    url: "https://perenual.com/storage/species_image/333_magnolia_marilyn/og/pexels-photo-4099162.jpg",
    key: 333
  },
  {
    title: "Yellow Bird Magnolia",
    description: "Magnolia 'Yellow Bird'",
    url: "https://perenual.com/storage/species_image/337_magnolia_yellow_bird/og/7384703532_7b3c58347a_b.jpg",
    key: 337
  },
  {
    title: "Little Gem Magnolia",
    description: "Magnolia Grandiflora",
    url: "https://perenual.com/storage/species_image/5398_narcissus_pops_legacy/og/2560px-thumbnail.jpg",
    key: 337
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
