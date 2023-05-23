import React, { useState } from 'react'
import SearchPageHeader from '../components/SearchPageHeader'
import '../index.css'

import SearchCardListView from '../components/SearchPageCardMap'

function SearchPage() {
    const [plantData, setPlantData] = useState(undefined);

    return(
        <div className = "searchPageWrapper">
            <SearchPageHeader />
            <SearchCardListView />
        </div>
    )
}

export default SearchPage;