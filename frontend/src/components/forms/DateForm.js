import React, { useState } from 'react'

const DateForm = (props) => {
    const [formData, setFormData] = useState({
        start_date: '',
        end_date: ''
	})

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setDates(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group m-3">
				<label>From</label>
				<input
					name="start_date"
					type="date"
					className="form-control"
                    required
					onChange={handleChange}
				/>
			</div>
            <div className="form-group m-3">
				<label>Till</label>
				<input
					name="end_date"
					type="date"
					className="form-control"
                    required
					onChange={handleChange}
				/>
			</div>
            <button type="submit" className="btn btn-light">
				Finalize
			</button>
        </form>
    )
}

export default DateForm
