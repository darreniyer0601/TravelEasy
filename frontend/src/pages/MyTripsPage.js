import React, { useEffect, useContext } from 'react';
import ItenaryContext from '../context/Itenary/ItenaryContext';
import AuthContext from '../context/Auth/AuthContext';

import ItineraryCard from '../components/ItineraryCard';

const MyTripsPage = () => {
    const { user } = useContext(AuthContext);
    const { user_itenaries, getUserItenaries } = useContext(ItenaryContext);

    useEffect(() => {
        if (user_itenaries.length === 0) {
            getUserItenaries(user.id);
        }
        
        // eslint-disable-next-line
    }, [])

    return (
        <div className='d-flex flex-row flex-wrap'>
            {user_itenaries.map(itenary => (
                <ItineraryCard itenary={itenary} />
            ))}
        </div>
    )
}

export default MyTripsPage
