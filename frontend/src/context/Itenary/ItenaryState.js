import React, { useReducer } from "react";
import axios from "axios";

import ItenaryContext from "./ItenaryContext";
import ItenaryReducer from "./ItenaryReducer";

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
            // Functions go here
        }}>
            {props.children}
        </ItenaryContext.Provider>
    )
}

export default ItenaryState;