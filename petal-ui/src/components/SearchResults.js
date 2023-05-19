import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchResults = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    console.log("Button clicked!");
    navigate("/plantdetail");
  };

  return (
    <div>
      <h1>Search Results</h1>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default SearchResults;
