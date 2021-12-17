import React, { useContext } from "react";

import AuthContext from "../context/Auth/AuthContext";
import ItenaryContext from "../context/Itenary/ItenaryContext";

import NewTripForm from "../components/forms/NewTripForm";

const NewTripPage = () => {
	const { user } = useContext(AuthContext);
	const { addItenary } = useContext(ItenaryContext);

	const handleAdd = () => {
		addItenary(user.id);
	}

	return (
		<div className="text-center">
			<NewTripForm addItenary={handleAdd} />
		</div>
	);
};

export default NewTripPage;
