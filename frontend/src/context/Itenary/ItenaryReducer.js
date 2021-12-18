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
    TRAVEL_TIME_SET,
    ITENARY_ADDED,
    ITENARY_FILTERED,
    USER_ITENARIES_LOADED
} from '../types';

const ItenaryReducer = (state, action) => {
    switch (action.type) {
        case HOTELS_LOADED:
            return {
                ...state,
                hotels: action.payload,
                itenary: {
                    ...state.itenary,
                    hotel: action.payload[0].id,
                    hotel_price: action.payload[0].price_per_night
                }
            }
        case VEHICLES_LOADED:
            return {
                ...state,
                vehicles: action.payload,
                itenary: {
                    ...state.itenary,
                    vehicle: action.payload[0].id,
                    vehicle_price: action.payload[0].price_per_hour
                }
            }
        case CITIES_LOADED:
            return {
                ...state,
                cities: action.payload,
                itenary: {
                    ...state.itenary,
                    origin: action.payload[0].id,
                    destination: action.payload[0].id
                }
            }
        case ITENARIES_LOADED:
            return {
                ...state,
                itenaries: action.payload
            }
        case ITENARY_ADDED:
            return {
                ...state,
                itenaries: [action.payload, ...state.itenaries],
            }
        case ITENARY_FILTERED:
            return {
                ...state,
                itenariesFiltered: action.payload,
                filtered: true
            }
        case USER_ITENARIES_LOADED:
            return {
                ...state,
                user_itenaries: state.itenaries.filter(itenary => itenary.user_id === action.payload)
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