import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom';

import AuthContext from '../context/Auth/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const { authenticated } = authContext;
    return (
        <Route { ...rest } render={props => !authenticated ? (
            <Navigate to='/login' />
        ) : (
            <Component {...props} />
        )} />

    )
}

export default PrivateRoute