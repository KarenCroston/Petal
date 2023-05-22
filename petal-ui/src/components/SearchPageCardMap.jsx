import React from 'react'
import SearchPageCards from './SearchPageCards';

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
  
  function SearchCardListView({setPlant}){
    return(
        plantSearchCards.map(searchCards => (
            <SearchPageCards
            title={searchCards.title}
            description={searchCards.description}
            url = {searchCards.url}
            setPlant={setPlant}
            />
        ))
    );
  }
  export default SearchCardListView