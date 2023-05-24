import React, { useState } from 'react'
import SearchPageHeader from '../components/SearchPageHeader'
import '../index.css'

import SearchCardListView from '../components/SearchPageCardMap'

function SearchPage({favourites, setFavourites, plantData,setPlantData}) {
console.log('searchpage',favourites)
    return(
        <div className = "searchPageWrapper">
            
            <SearchPageHeader />
            <SearchCardListView 
                favourites={favourites} 
                setFavourites={setFavourites}
                plantData = {plantData}
                setPlantData = {setPlantData} 
            />
        </div>
    )
}

export default SearchPage;