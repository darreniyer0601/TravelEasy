import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";

import ItenaryContext from "../../context/Itenary/ItenaryContext";

import HotelSelect from "../layout/HotelSelect";
import VehicleSelect from "../layout/VehicleSelect";
import OriginSelect from "../layout/OriginSelect";
import DestinationSelect from "../layout/DestinationSelect";
import DateForm from "./DateForm";

const NewTripForm = (props) => {
	const { addItenary, allocateDays, setTravelTime } = useContext(ItenaryContext);
	const [showToast, setShowToast] = useState(false);

	const handleClose = () => {
		setShowToast(false);
	};

	const handleDates = (dates) => {
		allocateDays(dates);
		setShowToast(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addItenary();
	};

	const handleChange = (e) => {
		setTravelTime(e.target.value);
	}

	return (
		<form onSubmit={handleSubmit} className="d-flex flex-column">
			<div className="form-group m-3">
				<label>Select Origin City</label>
				<OriginSelect />
			</div>
			<div className="form-group m-3">
				<label>Select Destination City</label>
				<DestinationSelect />
			</div>
			<div className="form-group m-3">
				<label>Select Vehicle</label>
				<VehicleSelect />
			</div>
			<div className="form-group m-3">
				<label>Add Travel Time</label>
				<input
					name="travel_time"
					type="number"
					className="form-control"
					required
					min={0}
					onChange={handleChange}
				/>
			</div>
			<div className="form-group m-3">
				<label>Select A Hotel</label>
				<HotelSelect />
			</div>
			<button
				className="btn btn-warning m-3"
				onClick={() => setShowToast(true)}
			>
				Select Dates
			</button>
			<Modal show={showToast} centered className="text-center">
				<Modal.Header>
					<Modal.Title>Select Dates</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<DateForm setDates={handleDates} />
				</Modal.Body>
				<Modal.Footer className="text-center">
					<Button className="btn-danger" onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
			<button type="submit" className="btn btn-dark m-5">
				Create
			</button>
		</form>
	);
};

export default NewTripForm;
