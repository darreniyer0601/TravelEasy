import React from "react";

const initialState = {
    itenaries: [],
    hotels: [],
    vehicles: [],
    user_itenaries: [],
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
    getCities: () => {},
    getItenaries: () => {},
    getUserItenaries: (userId) => {},
    setHotel: (id) => {},
    setOrigin: (id) => {},
    setDestination: (id) => {},
    setVehicle: (id) => {},
    allocateDays: (dates) => {},
    setTravelTime: (time) => {},
    addItenary: () => {}
});

export default ItenaryContext;