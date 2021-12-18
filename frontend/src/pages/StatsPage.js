import React, { useEffect, useContext } from 'react';
import ItenaryContext from '../context/Itenary/ItenaryContext';

const StatsPage = () => {
    const { getStatistics, stats } = useContext(ItenaryContext);

    useEffect(() => {
        getStatistics();

        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <p>Total Users: {stats.total_users}</p>
            <p>Total Itenaries: {stats.total_itenaries}</p>
            <p>Top Hotel: {stats.top_hotel?.hotel} | {stats.top_hotel?.resided} users</p>
            <p>Top Destination: {stats.top_city?.destination} | {stats.top_city?.visited} users</p>
        </div>
    )
}

export default StatsPage
