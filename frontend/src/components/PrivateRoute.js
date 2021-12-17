import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';

import AuthContext from '../context/Auth/AuthContext';

const PrivateRoute = ({ children }) => {
    const authContext = useContext(AuthContext);
    const { authenticated } = authContext;
    return (
        authenticated ? children : <Navigate to='/login' />
    )
}

export default PrivateRoute;