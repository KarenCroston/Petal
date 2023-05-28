import React, { useEffect, useState } from "react";
import "../styles/plant-detail.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Button} from '@mui/material';

const PlantDetail = () => {
  const navigate = useNavigate();
  const [plantDetail, setPlantDetail] = useState(null);
  let params = useParams();
  useEffect(() => {
    const getplantdetails = async () => {
      const { data } = await axios.get(
        `https://perenual.com/api/species/details/${params.id}?key=sk-maKn6469d505bb7fb1003`
      );
      const { common_name, default_image, sunlight, watering, description, cycle} =
        data;

      setPlantDetail({
        common_name,
        default_image,
        sunlight,
        watering,
        description,
        cycle,
      });
    };
    getplantdetails();
  }, [params.id]);
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const handleSunlightInfo = () => {
    return capitalizeFirstLetter (plantDetail.sunlight.join(" or "));
  };

  const handleFavourites = () => {
    const plantDetails = {
      title: plantDetail.common_name,
        description: plantDetail.description,
        url: plantDetail.default_image.medium_url,
        id: params.id,
    }

    const plantsInStorage =localStorage.getItem("favourites")
    const plantList = JSON.parse(plantsInStorage)
    
    const isInStorage = plantList?.find((plant) => plant.id === plantDetails.id)
    if(!isInStorage){
      const plants = plantsInStorage ? plantsInStorage : []
      localStorage.setItem("favourites",JSON.stringify([ ...plants,plantDetails]))   
    }
    
  }

  return (
    <div className="container">
      {plantDetail && (
        <>
          <div className="search-results-container">
            <button
              className="back-btn"
              onClick={() => navigate("/searchresults")}
            >
              <ArrowBackIcon sx={{ fontSize: 35 }} />
            </button>
            <div className="name-image-wrapper">
              <h3 className="page-title">{plantDetail.common_name}</h3>
              <img
                className="plant-image"
                alt={plantDetail.common_name}
                src={plantDetail.default_image.medium_url}
              />
            </div>
          </div>
          <div className="plantcare-title">
            <h3>Plant Care</h3>
          </div>
          <div className="plant-care-container">
            <ul>
              <li>
                <img 
                alt="cycle"
                src={require("../styles/leaf.png")} />
                {plantDetail.cycle}
              </li>
              <li>
                <img 
                alt="sunlight"
                src={require("../styles/sun.png")} />
                {plantDetail.sunlight && handleSunlightInfo()}
              </li>
              <li>
                <img 
                alt="watering"
                src={require("../styles/water.png")} />
                {plantDetail.watering}
              </li>
            </ul>
            <div className="fav-button">
            <Button 
              onClick={handleFavourites}
              
              >
              <img src={require("../styles/Favourites.png")}>

              </img>

              </Button>

            </div>
            
          </div>
          <div className="overview-container">
            <h3>Overview</h3>
            <p>{plantDetail.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PlantDetail;
