import React from "react";

const initialState = {
    itenaries: [],
    hotels: [],
    vehicles: [],
    cities: [],
    filtered: false,
    itenary: {
        origin: null,
        destination: null,
        vehicle: null,
        hotel: null,
        days: 0,
        travel_time: 0
    },
    itenariesFiltered: {
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
    getItenariresByPrice: (min_price, max_price) => {},
    setHotel: (id) => {},
    setOrigin: (id) => {},
    setDestination: (id) => {},
    setVehicle: (id) => {},
    allocateDays: (dates) => {},
    setTravelTime: (time) => {},
    addItenary: () => {}
});

export default ItenaryContext;