import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/forms/LoginForm";
import AuthContext from "../context/Auth/AuthContext";

const Login = () => {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogin = async (user) => {
		// Login user
		try {
			await login(user);
			navigate("/");
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<div className="text-center">
			<LoginForm login={handleLogin} />
		</div>
	);
};

export default Login;
