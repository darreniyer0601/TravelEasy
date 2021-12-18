import React, { useState, useContext, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import ItenaryContext from "../context/Itenary/ItenaryContext";

import ItineraryCard from "../components/ItineraryCard";
import PriceForm from "../components/forms/PriceForm";
import CitySelect from '../components/layout/CitySelect';

const ExplorePage = () => {
	const {
		itenaries,
		filtered,
		filtered_itenaries,
		getItenaries,
		getItenariresByPrice,
        getItenariesByDestination,
		clearFilter,
	} = useContext(ItenaryContext);

	const [showPriceToast, setShowPriceToast] = useState(false);
    const [showCityToast, setShowCityToast] = useState(false);

	useEffect(() => {
		if (itenaries.length === 0) {
			getItenaries();
		}

		// eslint-disable-next-line
	}, []);

	const handleClose = () => {
		setShowPriceToast(false);
        setShowCityToast(false);
	};

	const handlePriceFilter = () => {
		setShowPriceToast(true);
	};

    const handleCityFilter = () => {
        setShowCityToast(true);
    }

	const handleClear = () => {
		clearFilter();
	};

	const handlePrice = (prices) => {
		getItenariresByPrice(prices);
		setShowPriceToast(false);
	};

    const handleDestination = (id) => {
        getItenariesByDestination(id);
        setShowCityToast(false);
    }

	return (
		<>
			{!filtered && (
				<>
					<button
						type="button"
						className="btn btn-warning m-3"
						onClick={handlePriceFilter}
					>
						Filter By Price
					</button>
					<button
						type="button"
						className="btn btn-warning m-3"
						onClick={handleCityFilter}
					>
						Filter By Destination
					</button>
				</>
			)}
			{filtered && (
				<button
					type="button"
					className="btn btn-warning m-3"
					onClick={handleClear}
				>
					Clear Filter
				</button>
			)}
			<Modal show={showPriceToast} centered className="text-center">
				<Modal.Header>
					<Modal.Title>Select Price Range</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<PriceForm handleFilters={handlePrice} />
				</Modal.Body>
				<Modal.Footer className="text-center">
					<Button className="btn-danger" onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
            <Modal show={showCityToast} centered className="text-center">
				<Modal.Header>
					<Modal.Title>Select Destination City</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<CitySelect selectCity={handleDestination} />
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
