import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../context/Auth/AuthContext";
import SignupForm from "../components/forms/SignupForm";

const Signup = () => {
	const { signup } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSignup = async (user) => {
		try {
			await signup(user);
			alert("Successfully registered");
			navigate("/login");
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<div className="text-center">
			<SignupForm signup={handleSignup} />
		</div>
	);
};

export default Signup;
