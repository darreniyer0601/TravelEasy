import React from 'react'

import ItineraryCardWithoutPicture from '../components/itineraryCardWithoutPicture'

const p = {
    date: "DATE",
    description: "DESCRIPTION",
    location: "LOCATION",
    price: "PRICE"    
}

const HomePage = () => {
    return (
        // needs to return a list of homepage cards
        <div>
            <ItineraryCardWithoutPicture p={p} />
        </div>
        
        
    )
}

export default HomePage
