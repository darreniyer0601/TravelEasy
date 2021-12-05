import React from 'react'

import UtilityCard from '../components/utilityCard'

const p = {
    date: "DATE",
    details: "DETAILS",
    startLocation: "s LOCATION",
    endLocation: "e LOCATION",
    name: "NAME",
    price: "PRICE"    
}

const HomePage = () => {
    return (
        // needs to return a list of homepage cards
        <div>
            <UtilityCard p={p} />
        </div>
        
        
    )
}

export default HomePage
