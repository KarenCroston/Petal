import React, { useEffect, useState } from "react";
import "./styles/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PlantDetail from "./pages/PlantDetail";
import SearchPage from "./pages/SearchPage";
import { useLocation } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import axios from "axios";

function App() {
  const [plantData, setPlantData] = useState();
  const [user, setUser] = useState({});
  const [data,setData] = useState()
  const [favourites, setFavourites] = useState([
      {
        title: "Plant 1",
        description: "Planty plant plant",
        url: "https://picsum.photos/300/300",
        id: 0
      },
      {
        title: "Plant 2",
        description: "Planty plant plant",
        url: "https://picsum.photos/300/300",
        id: 1
      },
      {
        title: "Plant3",
        description: "Planty plant plant",
        url: "https://picsum.photos/300/300",
        id: 2
      }
    ])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="plantdetail/:id" element={<PlantDetail />} />
          {/* add dynamic paramater that can have different values */}
          <Route path="/home" element={<Dashboard    
              favourites={favourites}
              setFavourites={setFavourites}
              plantData={plantData}
              setPlantData={setPlantData} />} 
          />

          <Route
            path="/searchresults"
            element={<SearchPage 
              favourites={favourites}
              setFavourites={setFavourites}
              plantData={plantData}
              setPlantData={setPlantData} 
            />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
