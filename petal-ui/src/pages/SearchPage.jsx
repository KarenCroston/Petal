import React from 'react'
import SearchPageHeader from '../components/SearchPageHeader'
import '../index.css'

import SearchCardListView from '../components/SearchPageCardMap'


function SearchPage({setPlant}) {
    
    return(
        <div className = "searchPageWrapper">
        <SearchPageHeader/>
        <SearchCardListView/>
        
        </div>
    )
}

export default SearchPage;