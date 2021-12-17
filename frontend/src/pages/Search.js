import React from 'react'

import ItineraryCard from '../components/itineraryCard'

const p = {
    date: "DATE",
    description: "DESCRIPTION",
    location: "LOCATION",
    price: "PRICE"    
}

const Search = () => {
    return (
        // needs to return a list of filtered cards
        <div>
            <ItineraryCard p={p} />
        </div>
        
        
    )
}

export default Search
