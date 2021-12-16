import {
    HOTELS_LOADED,
    VEHICLES_LOADED,
    CITIES_LOADED,
    ITENARIES_LOADED
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
        default: 
            return {
                ...state
            }
    }
}

export default ItenaryReducer;