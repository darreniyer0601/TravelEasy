import React from "react";

import {
    AUTH_SUCCESS,
    AUTH_FAIL,
    LOGOUT
} from '../types';

const AuthReducer = (state, action) => {
    switch(action.type) {
        case LOGOUT: 
            return {
                token: null,
                authenticated: false,
                user: null
            }
        case AUTH_SUCCESS:
            return {
                token: action.payload.token,
                user: action.payload.user,
                authenticated: true
            }
    }
}

export default AuthReducer;