import React, { useState } from "react";
import "./styles/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PlantDetail from "./pages/PlantDetail";
import SearchPage from "./pages/SearchPage";

import Dashboard from "./pages/Dashboard";

function App() {
  const [_, setUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="plantdetail/:id" element={<PlantDetail />} />
          {/* add dynamic paramater that can have different values */}
          <Route path="/home" element={<Dashboard />} />
          <Route
            path="/searchresults"
            element={<SearchPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
