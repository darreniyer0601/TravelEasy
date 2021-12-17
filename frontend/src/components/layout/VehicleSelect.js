import React, { useEffect, useContext } from 'react'

import ItenaryContext from '../../context/Itenary/ItenaryContext'

const VehicleSelect = () => {
    const { vehicles, getVehicles, setVehicle } = useContext(ItenaryContext);

    useEffect(() => {
        if (vehicles.length === 0) {
            getVehicles();
        }
        // eslint-disable-next-line
    }, [])

    const handleChange = (e) => {
        setVehicle(e.target.value);
    }

    return (
        <select className="form-select" onChange={handleChange}>
			{vehicles.map((vehicle) => (
				<option key={vehicle.id} value={vehicle.id}>
					{vehicle.type} : ${vehicle.price_per_hour}
				</option>
			))}
		</select>
    )
}

export default VehicleSelect
