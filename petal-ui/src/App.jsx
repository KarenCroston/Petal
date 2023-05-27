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
        title: "Marigold",
        description: "Calendula Officinalis",
        url: "https://perenual.com/storage/species_image/1473_calendula_officinalis/og/52278754303_ec74264930_b.jpg",
        id: 0
      },
      {
        title: "Ornamental Onion",
        description: "Allium 'Lavender Bubbles'",
        url: "https://perenual.com/storage/species_image/677_allium_lavender_bubbles/og/35648651144_c62b038777_b.jpg",
        id: 1
      },
      {
        title: "Poeticus Daffodil",
        description: "Narcissus 'Actaea'",
        url: "https://perenual.com/storage/species_image/5315_narcissus_actaea/og/5642949915_9498d6d20c_b.jpg",
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
