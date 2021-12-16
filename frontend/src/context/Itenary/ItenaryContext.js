import React from "react";

const initialState = {
    itenaries: [],
    hotels: [],
    vehicles: [],
    cities: [],
    itenary: {
        origin: null,
        destination: null,
        vehicle: null,
        hotel: null,
        days: 0,
        travel_time: 0
    }
}

const ItenaryContext = React.createContext({
    ...initialState,
    getHotels: () => {},
    getVehicles: () => {},
    getCities: () => {}
});

export default ItenaryContext;