import React, { useEffect, useState } from "react";
import "../styles/plant-detail.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PlantDetail = ({ match }) => {
  const navigate = useNavigate();
  const [plantDetail, setPlantDetail] = useState(null);
  let params = useParams();
  useEffect(() => {
    console.log(params);
    const getplantdetails = async () => {
      const { data } = await axios.get(
        `https://perenual.com/api/species/details/${params.id}?key=sk-maKn6469d505bb7fb1003`
      );
      const { common_name, default_image, sunlight, watering, description } =
        data;

      setPlantDetail({
        common_name,
        default_image,
        sunlight,
        watering,
        description,
      });
    };
    getplantdetails();
  }, []);
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const handleSunlightInfo = () => {
    const sunlightDetails = plantDetail.sunlight.map((sunlightInfo) => {
      return capitalizeFirstLetter(sunlightInfo);
    });

    return sunlightDetails.join(" ");
  };

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
              <h3>{plantDetail.common_name}</h3>
              <img
                className="plant-image"
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
                <img src={require("../styles/leaf.png")} />
                Every 3 weeks
              </li>
              <li>
                <img src={require("../styles/sun.png")} />
                {plantDetail.sunlight && handleSunlightInfo()}
              </li>
              <li>
                <img src={require("../styles/water.png")} />
                {plantDetail.watering}
              </li>
            </ul>
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
