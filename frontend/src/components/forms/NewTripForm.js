import React, { useState } from 'react';

import HotelSelect from './HotelSelect';
import CitySelect from './CitySelect';
import VehicleSelect from './VehicleSelect';

const NewTripForm = (props) => {
    const [formData, setFormData] = useState({
        title: '',
		location: '',
        trav: '',
        startdate: '',
        enddate: ''

	})

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
			<div className="form-group m-3">
				<label>title</label>
				<input
					name="Title"
					type="title"
					className="form-control"
                    required
                    placeholder = "title"
					onChange={handleChange}
				/>
			</div>
			<div className="form-group m-3">
				<label>location</label>
				<input
					name="Location"
					type="text"
					className="form-control"
                    required
                    placeholder = "locatioj"
					onChange={handleChange}
				/>
			</div>
            <div className="form-group m-3">
				<label>trav</label>
				<input
					name="Number of Travellers"
					type="text"
					className="form-control"
                    required
                    placeholder = "trav"
					onChange={handleChange}
				/>
			</div>
			<div className="form-group m-3">
				<label>startdate</label>
				<input
					name="Start Date"
					type="date"
					className="form-control"
                    required
                    placeholder = "startdate"
					onChange={handleChange}
				/>
			</div>
            <div className="form-group m-3">
				<label>enddate</label>
				<input
					name="End Date"
					type="date"
					className="form-control"
                    required
                    placeholder = "enddate"
					onChange={handleChange}
				/>
			</div>
			<button type="submit" className="btn btn-dark">
				Submit
			</button>
		</form>
    )
}

export default NewTripForm
