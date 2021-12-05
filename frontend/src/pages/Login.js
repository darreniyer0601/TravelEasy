import React from 'react'

import LoginForm from '../components/forms/LoginForm'

const Login = () => {

    const handleLogin = (user) => {
        // Login user
    }

    return (
        <LoginForm login={handleLogin} />
    )
}

export default Login
