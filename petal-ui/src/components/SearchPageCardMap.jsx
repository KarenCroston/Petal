import React, { useEffect,useState } from 'react'
import SearchPageCards from './SearchPageCards';
import axios from "axios";

const plantSearchCards = [
    {
      title: "Plant 1",
      description: "Planty plant plant",
      url: "https://picsum.photos/300/300",
      ID: 5314
    },
    {
      title: "Plant 2",
      description: "Planty plant plant",
      url: "https://picsum.photos/300/300",
      ID: 5315
    },
    {
      title: "Plant 4",
      description: "Planty plant plant",
      url: "https://picsum.photos/300/300",
      ID: 5316
    },
    {
      title: "Plant 4",
      description: "Planty plant plant",
      url: "https://picsum.photos/300/300",
      ID: 5316
    },
  ];
  
  function SearchCardListView(){
    const [plantList, setPlantList] = useState(null);
    useEffect(() => {
        
      const getallplantdetails = async () => {
        const { data } = await axios.get(
          `https://perenual.com/api/species-list?page=1&key=sk-maKn6469d505bb7fb1003`
        );
       console.log(data);
       

     setPlantList(data.data);
    
  };
  getallplantdetails();
}, []);
    return(
      <div>
        {plantList && (plantList.map(plant => (
            <SearchPageCards
            title={plant.common_name}
            description={plant.description}
            url={plant.default_image.medium_url}
            id={plant.id}
            />
        )))}
        </div>
    );
  }
  export default SearchCardListView