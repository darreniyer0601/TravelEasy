import React, { useState } from "react";

const PriceForm = (props) => {
	const [formData, setFormData] = useState({
		min_price: 0,
		max_price: 0,
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = () => {
		props.handleFilters(formData);
	};

	return (
		<form>
			<div className="form-group m-3">
				<label>Minimum Price</label>
				<input
					name="min_price"
					type="number"
					className="form-control"
					required
					onChange={handleChange}
				/>
			</div>
			<div className="form-group m-3">
				<label>Maximum Price</label>
				<input
					name="max_price"
					type="number"
					className="form-control"
					required
					onChange={handleChange}
				/>
			</div>
			<button type="button" className="btn btn-dark" onClick={handleSubmit}>
				Search
			</button>
		</form>
	);
};

export default PriceForm;
