import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ItenaryContext from '../context/Itenary/ItenaryContext';

const ExplorePage = () => {
    const { itenaries, itenariesFiltered, filtered, getItenaries, getItenariresByPrice } = useContext(ItenaryContext);
    const [showToast, setShowToast] = useState(false);

    const [it, setIt] = useState(itenaries);

    const [formData, setFormData] = useState({
		min_price: '',
		max_price: ''
	})

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

    useEffect(() => {
        if (itenaries.length === 0) {
            getItenaries();
        }

        if (filtered) {
            setIt(itenariesFiltered);
        }

        // eslint-disable-next-line
    }, [filtered])

    const handleClose = () => {
		setShowToast(false);
	};

    const handleFilterSelect = () => {
		setShowToast(true);
	}

	const handleFilters = (filters) => {
		getItenariresByPrice(filters);
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
					{/* <DateForm setDates={handleFilters} /> */}
                    <form onSubmit={handleFilters}>
                        <div className="form-group m-3">
                            <label>Minimum Price</label>
                            <input
                                name="min_price"
                                type="text"
                                className="form-control"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group m-3">
                            <label>Maximum Price</label>
                            <input
                                name="max_price"
                                type="text"
                                className="form-control"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-dark">
                            Search
                        </button>
                    </form>
				</Modal.Body>
				<Modal.Footer className="text-center">
					<Button className="btn-danger" onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>

            <div className='d-flex flex-row'>
                {
                it.map(itenary => (
                    <div className='card m-2 p-2'>
                        <p>Origin: {itenary.origin}</p>
                        <p>Destination: {itenary.destination}</p>
                        <p>Travelling by {itenary.vehicle}</p>
                        <p>Staying at: {itenary.hotel}</p>
                        <p>Staying for {itenary.days} days</p>
                        <p>Total Expenditures: ${itenary.price}</p>
                    </div>
                ))
}
            </div>
        </>
    )
}

export default ExplorePage
