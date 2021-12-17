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
        vehicle_price: 0,
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
            payload: parseInt(id)
        })
    }

    // Select destination
    const setDestination = (id) => {
        dispatch({
            type: DESTINATION_SELECTED,
            payload: parseInt(id)
        })
    }

    // Select vehicle
    const setVehicle = (id) => {
        const vehicle = state.vehicles.find(v => parseInt(id) === v.id);

        dispatch({
            type: VEHICLE_SELECTED,
            payload: vehicle
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
            payload: parseInt(time)
        })
    }

    // Add itenary
    const addItenary = async (userId) => {
        try {
            // Add route using origin and destination
            let body = {
                origin: state.itenary.origin,
                destination: state.itenary.destination
            }

            await axios.post('/api/route', body);

            // Get created route
            let res = await axios.get('/api/routes');

            const route_id = res.data.result.id;

            // Add vehicle_route using route, vehicle and travel time
            body = {
                vehicle: state.itenary.vehicle,
                route_id,
                travel_time: state.itenary.travel_time
            }

            await axios.post('/api/itenaries/vehicleroute', body);

            // Get vehicle_route
            res = await axios.get('/api/itenaries/vehicleroute');

            const route = res.data.result.id;

            // Calculate price using travel time + hotel days
            let price = 0;
            price += state.itenary.travel_time * state.itenary.vehicle_price;
            price += state.itenary.hotel_price * state.itenary.days;
            
            // Create itenary object
            body = {
                days: state.itenary.days,
                hotel: state.itenary.hotel,
                route,
                price,
                user_id: userId
            }

            // Add itenary object
            await axios.post('/api/itenaries', body);
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