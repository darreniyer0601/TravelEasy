import {
    HOTELS_LOADED,
    VEHICLES_LOADED,
    CITIES_LOADED,
    ITENARIES_LOADED,
    HOTEL_SELECTED,
    VEHICLE_SELECTED,
    ORIGIN_SELECTED,
    DESTINATION_SELECTED,
    DAYS_ALLOCATED,
    TRAVEL_TIME_SET
} from '../types';

const ItenaryReducer = (state, action) => {
    switch (action.type) {
        case HOTELS_LOADED:
            return {
                ...state,
                hotels: action.payload
            }
        case VEHICLES_LOADED:
            return {
                ...state,
                vehicles: action.payload
            }
        case CITIES_LOADED:
            return {
                ...state,
                cities: action.payload
            }
        case ITENARIES_LOADED:
            return {
                ...state,
                itenaries: action.payload
            }
        case HOTEL_SELECTED:
            return {
                ...state,
                itenary: {
                    ...state.itenary,
                    hotel: action.payload.id,
                    hotel_price: action.payload.price_per_night
                }
            }
        case VEHICLE_SELECTED:
            return {
                ...state,
                itenary: {
                    ...state.itenary,
                    vehicle: action.payload.id,
                    vehicle_price: action.payload.price_per_hour
                }
            }
        case ORIGIN_SELECTED:
            return {
                ...state,
                itenary: {
                    ...state.itenary,
                    origin: action.payload
                }
            }
        case DESTINATION_SELECTED:
            return {
                ...state,
                itenary: {
                    ...state.itenary,
                    destination: action.payload
                }
            }
        case DAYS_ALLOCATED:
            return {
                ...state,
                itenary: {
                    ...state.itenary,
                    days: action.payload,
                }
            }
        case TRAVEL_TIME_SET:
            return {
                ...state,
                itenary: {
                    ...state.itenary,
                    travel_time: action.payload
                }
            }
        default: 
            return {
                ...state
            }
    }
}

export default ItenaryReducer;