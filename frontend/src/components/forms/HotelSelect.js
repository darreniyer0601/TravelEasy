import React, { useContext, useEffect } from "react";

import ItenaryContext from "../../context/Itenary/ItenaryContext";

const HotelSelect = () => {
	const { getHotels, hotels, setHotel } = useContext(ItenaryContext);

	useEffect(() => {
		if (hotels.length === 0) {
			getHotels();
		}
		// eslint-disable-next-line
	}, []);

	const handleChange = (e) => {
		setHotel(e.target.value);
	};

	return (
		<select className="form-select" onChange={handleChange}>
            <option selected>Select a Hotel</option>
			{hotels.map((hotel) => (
				<option id={hotel.id} value={hotel.id}>
					{hotel.name} : ${hotel.price_per_night}
				</option>
			))}
		</select>
	);
};

export default HotelSelect;
