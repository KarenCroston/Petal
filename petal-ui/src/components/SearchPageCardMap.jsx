import {useEffect, useState} from 'react'
import SearchPageCards from './SearchPageCards';
// import {searchValue} from './DashHeader'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
  
  function SearchCardListView({setPlant}){
    console.log(setPlant);
    const [plantData, setPlantData] = useState(undefined);
    const location = useLocation();
    const search = location.search.slice(1);
    console.log('plantData', plantData)

    useEffect(() => {
      axios.get(`https://perenual.com/api/species-list?page=1&key=sk-lZko6450201dec978711&q=${search}`)
      .then(response => {
        setPlantData(response?.data?.data)
      })
    }, [search, setPlantData]);


    // function capitalizeFirstLetter(plantName) {
    //   return plantName.charAt(0).toUpperCase() + plantName.slice(1);

    return(
      plantData?.map(data => (
          <SearchPageCards
            key={data?.id}
            id={data?.id}
            title={data?.common_name.charAt(0).toUpperCase() + data?.common_name.slice(1)}
            url={data?.default_image?.original_url}
            description={data?.scientific_name}
            setPlant={setPlant}
          />
        ))
    );
  }
  export default SearchCardListView