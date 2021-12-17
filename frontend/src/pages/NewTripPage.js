import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import AuthContext from "../context/Auth/AuthContext";
import ItenaryContext from "../context/Itenary/ItenaryContext";

import NewTripForm from "../components/forms/NewTripForm";

const NewTripPage = () => {
	const { user } = useContext(AuthContext);
	const { addItenary } = useContext(ItenaryContext);
	const navigate = useNavigate();

	const handleAdd = async () => {
		try {
			await addItenary(user.id);
			alert('Itenary Successfully Added');
			navigate('/');
		} catch (err) {
			alert(err.message);
		}
	}

	return (
		<div className="text-center">
			<NewTripForm addItenary={handleAdd} />
		</div>
	);
};

export default NewTripPage;
