import React, { useState, useContext, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import ItenaryContext from "../context/Itenary/ItenaryContext";

import ItineraryCard from "../components/ItineraryCard";
import PriceForm from "../components/forms/PriceForm";

const ExplorePage = () => {
	const {
		itenaries,
		filtered,
		filtered_itenaries,
		getItenaries,
		getItenariresByPrice,
	} = useContext(ItenaryContext);

	const [showToast, setShowToast] = useState(false);

	useEffect(() => {
        console.log('effect', itenaries.length);
		if (itenaries.length === 0) {
			getItenaries();
		}

		// eslint-disable-next-line
	}, []);

	const handleClose = () => {
		setShowToast(false);
	};

	const handleFilterSelect = () => {
		setShowToast(true);
	};

	const handleFilters = (prices) => {
		getItenariresByPrice(prices);
		setShowToast(false);
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-warning m-3"
				onClick={handleFilterSelect}
			>
				Filter By Price
			</button>
			<Modal show={showToast} centered className="text-center">
				<Modal.Header>
					<Modal.Title>Select Dates</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<PriceForm handleFilters={handleFilters} />
				</Modal.Body>
				<Modal.Footer className="text-center">
					<Button className="btn-danger" onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>

			<div className="d-flex flex-row flex-wrap">
				{filtered
					? filtered_itenaries.map((itenary) => (
							<ItineraryCard itenary={itenary} />
					  ))
					: itenaries.map((itenary) => <ItineraryCard itenary={itenary} />)}
			</div>
		</>
	);
};

export default ExplorePage;
