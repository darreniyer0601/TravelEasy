import React, { useContext, useEffect } from 'react';
import ItenaryContext from '../context/Itenary/ItenaryContext';

const ExplorePage = () => {
    const { itenaries, getItenaries } = useContext(ItenaryContext);

    useEffect(() => {
        if (itenaries.length === 0) {
            getItenaries();
        }

        // eslint-disable-next-line
    }, [])

    return (
        <div className='d-flex flex-row'>
            {itenaries.map(itenary => (
                <div className='card m-2 p-2'>
                    <p>Origin: {itenary.origin}</p>
                    <p>Destination: {itenary.destination}</p>
                    <p>Travelling by {itenary.vehicle}</p>
                    <p>Staying at: {itenary.hotel}</p>
                    <p>Staying for {itenary.days} days</p>
                    <p>Total Expenditures: ${itenary.price}</p>
                </div>
            ))}
        </div>
    )
}

export default ExplorePage
