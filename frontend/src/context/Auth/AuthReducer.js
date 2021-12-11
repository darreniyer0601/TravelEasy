import React from "react";
import axios from "axios";

import {
    AUTH_SUCCESS,
    LOGOUT
} from '../types';

const AuthReducer = (state, action) => {
    switch(action.type) {
        case LOGOUT: 
            axios.defaults.headers['Authorization'] = '';
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return {
                token: null,
                authenticated: false,
                user: null
            }
        case AUTH_SUCCESS:
            axios.defaults.headers['Authorization'] = action.payload.token;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            return {
                token: action.payload.token,
                user: action.payload.user,
                authenticated: true
            }
        default:
            return {
                ...state
            }
    }
}

export default AuthReducer;