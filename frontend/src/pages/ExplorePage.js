import React, { useContext, useEffect } from 'react';
import ItenaryContext from '../context/Itenary/ItenaryContext';

import ItineraryCard from '../components/ItineraryCard';

const ExplorePage = () => {
    const { itenaries, getItenaries } = useContext(ItenaryContext);

    useEffect(() => {
        if (itenaries.length === 0) {
            getItenaries();
        }

        // eslint-disable-next-line
    }, [])

    return (
        <div className='d-flex flex-row flex-wrap'>
            {itenaries.map(itenary => (
                <ItineraryCard itenary={itenary} />
            ))}
        </div>
    )
}

export default ExplorePage
