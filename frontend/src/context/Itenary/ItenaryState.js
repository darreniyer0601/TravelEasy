import React, { useReducer } from "react";
import axios from "axios";

import ItenaryContext from "./ItenaryContext";
import ItenaryReducer from "./ItenaryReducer";

import {
    HOTELS_LOADED
} from '../types';

axios.defaults.baseURL = 'http://localhost:5000/';

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

const ItenaryState = (props) => {
    const [state, dispatch] = useReducer(ItenaryReducer, initialState);

    // Fetch hotels from backend
    const getHotels = async () => {
        try {
            const res = await axios.get('/api/hotels');

            dispatch({
                type: HOTELS_LOADED,
                payload: res.data.hotels
            })
        } catch (err) {
            console.log(err);
        }
    }

    // Fetch cities from backend

    // Fetch vehicles from backend

    // Fetch itenaries from backend

    // Select hotel

    // Select origin

    // Select destination

    // Select vehicle

    // Set number of days

    // Set travel time

    // Add itenary

    return (
        <ItenaryContext.Provider value={{
            ...state,
            getHotels
        }}>
            {props.children}
        </ItenaryContext.Provider>
    )
}

export default ItenaryState;