import React, { useReducer } from "react";
import axios from "axios";

import ItenaryContext from "./ItenaryContext";
import ItenaryReducer from "./ItenaryReducer";

import {
    HOTELS_LOADED,
    VEHICLES_LOADED,
    CITIES_LOADED,
    ITENARIES_LOADED,
    HOTEL_SELECTED,
    ORIGIN_SELECTED,
    DESTINATION_SELECTED,
    VEHICLE_SELECTED,
    DAYS_ALLOCATED,
    TRAVEL_TIME_SET
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
        travel_time: 0,
        hotel_price: 0,
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
    const getCities = async () => {
        try {
            const res = await axios.get('/api/cities');

            dispatch({
                type: CITIES_LOADED,
                payload: res.data.cities
            })
        } catch (err) {
            console.log(err);
        }
    }

    // Fetch vehicles from backend
    const getVehicles = async () => {
        try {
            const res = await axios.get('/api/vehicles');

            dispatch({
                type: VEHICLES_LOADED,
                payload: res.data.vehicles
            })
        } catch (err) {
            console.log(err);
        }
    }

    // Fetch itenaries from backend
    const getItenaries = async () => {
        try {
            const res = await axios.get('/api/itenaries');

            dispatch({
                type: ITENARIES_LOADED,
                payload: res.data.itenaries
            })
        } catch (err) {
            console.log(err);
        }
    }

    // Select hotel
    const setHotel = (id) => {
        console.log(id);
        const hotel = state.hotels.find(h => parseInt(id) === h.id);

        dispatch({
            type: HOTEL_SELECTED,
            payload: hotel
        })
    }

    // Select origin
    const setOrigin = (id) => {
        dispatch({
            type: ORIGIN_SELECTED,
            payload: id
        })
    }

    // Select destination
    const setDestination = (id) => {
        dispatch({
            type: DESTINATION_SELECTED,
            payload: id
        })
    }

    // Select vehicle
    const setVehicle = (id) => {
        dispatch({
            type: VEHICLE_SELECTED,
            payload: id
        })
    }

    // Set number of days
    const allocateDays = (dates) => {
        const d1 = new Date(dates.start_date);
		const d2 = new Date(dates.end_date);

		const diff = d2.getTime() - d1.getTime();
		const days = diff / (1000 * 3600 * 24);

        dispatch({
            type: DAYS_ALLOCATED,
            payload: days
        })
    }

    // Set travel time
    const setTravelTime = (time) => {
        dispatch({
            type: TRAVEL_TIME_SET,
            payload: time
        })
    }

    // Add itenary
    const addItenary = async () => {
        try {
            
        } catch (err) {
            console.log(err);
        }
    }
    

    return (
        <ItenaryContext.Provider value={{
            ...state,
            getHotels,
            getVehicles,
            getCities,
            getItenaries,
            setHotel,
            setOrigin,
            setDestination,
            setVehicle,
            allocateDays,
            setTravelTime,
            addItenary
        }}>
            {props.children}
        </ItenaryContext.Provider>
    )
}

export default ItenaryState;