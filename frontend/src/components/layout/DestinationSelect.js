import React, { useContext } from 'react';

import CitySelect from './CitySelect';
import ItenaryContext from '../../context/Itenary/ItenaryContext';

const DestinationSelect = () => {
    const { setDestination } = useContext(ItenaryContext);

    const handleSelect = (id) => {
        setDestination(id);
    }

    return (
        <CitySelect selectCity={handleSelect} />
    )
}

export default DestinationSelect
