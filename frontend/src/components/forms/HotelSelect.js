import React, { useContext, useEffect } from 'react';

import ItenaryContext from '../../context/Itenary/ItenaryContext';

const HotelSelect = (props) => {
    const { getHotels, hotels } = useContext(ItenaryContext);

    useEffect(() => {
        getHotels();
        // eslint-disable-next-line
    }, [])

    const handleChange = (e) => {
        console.log(e);
    }

    return (
        <div>
            <select onChange={handleChange}>
                {hotels.map(hotel => (
                    <option id={hotel.id}>{hotel.name} : ${hotel.price_per_night}</option>
                ))}
            </select>
        </div>
    )
}

export default HotelSelect
