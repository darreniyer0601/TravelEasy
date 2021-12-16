import React, { useEffect, useContext } from 'react'

import ItenaryContext from '../../context/Itenary/ItenaryContext'

const CitySelect = (props) => {
    const { getCities, cities } = useContext(ItenaryContext);

    useEffect(() => {
        if (cities.length === 0) {
            getCities();
        }
        // eslint-disable-next-line
    }, [])

    const handleChange = (e) => {
        props.selectCity(e.target.value);
    }

    return (
        <div>
            <select onChange={handleChange}>
                {cities.map(city => (
                    <option id={city.id}>{city.name}{" " + city.state || null}, {city.country}</option>
                ))}
            </select>
        </div>
    )
}

export default CitySelect
