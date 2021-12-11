import React, { useReducer } from "react";
import axios from 'axios';

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import {
    AUTH_SUCCESS,
    LOGOUT
} from '../types';

axios.defaults.baseURL = 'http://localhost:5000/';

const initialState = {
    authenticated: localStorage.getItem('token') ? true : false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    token: localStorage.getItem('token') || null
}

const AuthState = (props) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const login = async (user) => {
        try {
            console.log(user);
            const res = await axios.post('/api/user/login', user);

            console.log(res);
            dispatch({
                type: AUTH_SUCCESS,
                payload: {
                    token: res.data.token,
                    user: res.data.user
                }
            })
        } catch (err) {
            if (err.response) {
                throw new Error(err.response.data.msg);
            }
        }
    }

    const signup = async (user) => {
        try {
            await axios.post('/api/user/signup', user);
        } catch (err) {
            if (err.response) {
                throw new Error(err.response.data.msg);
            } else {
                throw new Error('Something went wrong');
            }
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