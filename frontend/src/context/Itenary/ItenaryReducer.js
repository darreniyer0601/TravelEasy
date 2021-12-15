import {
    HOTELS_LOADED
} from '../types';

const ItenaryReducer = (state, action) => {
    switch (action.type) {
        case HOTELS_LOADED:
            return {
                ...state,
                hotels: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}

export default ItenaryReducer;