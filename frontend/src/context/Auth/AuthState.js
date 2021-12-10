import React, { useReducer } from "react";
import axios from 'axios';

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import {
    AUTH_SUCCESS,
    AUTH_FAIL,
    LOGOUT
} from '../types';

const initialState = {
    authenticated: localStorage.getItem('token') ? true : false,
    user: localStorage.getItem('user') || null,
    token: localStorage.getItem('token') || null
}

const AuthState = (props) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const login = async (user) => {
        try {
            const res = await axios.post('/api/login', user);

            dispatch({
                type: AUTH_SUCCESS,
                payload: {
                    token: res.data.token,
                    user: res.data.user
                }
            })
        } catch (err) {
            throw err;
        }
    }

    const signup = async (user) => {
        try {
            await axios.post('/api/signup', user);
        } catch (err) {
            throw err;
        }
    }

    const logout = async () => {
        dispatch({
            type: LOGOUT
        })
    }

    return (
        <AuthContext.Provider value={{
            user: state.user,
            authenticated: state.authenticated,
            login,
            logout,
            signup
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;