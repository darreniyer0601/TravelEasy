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

    const handleSubmit = () => {
        props.setDates(formData);
    }

    return (
        <form>
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
            <button type='button' className="btn btn-light" onClick={handleSubmit}>
				Finalize
			</button>
        </form>
    )
}

export default DateForm
