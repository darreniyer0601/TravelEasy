import React, { useContext } from 'react'

import CitySelect from './CitySelect'
import ItenaryContext from '../../context/Itenary/ItenaryContext'

const OriginSelect = () => {
    const { setOrigin } = useContext(ItenaryContext);

    const handleSelect = (id) => {
        setOrigin(id);
    }

    return (
        <CitySelect selectCity={handleSelect} />
    )
}

export default OriginSelect
