import React from "react";
import Card from "react-bootstrap/Card";

const ItineraryCard = ({ itenary }) => {
	return (
		<Card style={{ width: "45rem" }} className="m-3">
			<div className="row no-gutters">
				<div className="col-auto">
					<Card.Img
						src={`https://picsum.photos/id/${itenary.id * (100 - Math.random(10).toFixed())}/300/250`}
						class="img-fluid"
						alt=""
					></Card.Img>
				</div>
				<div className="col">
					<Card.Body>
						<Card.Title>Itenary #{itenary.id}</Card.Title>
						<Card.Text>From: {itenary.origin}</Card.Text>
						<Card.Text>To: {itenary.destination}</Card.Text>
						<Card.Text>Staying At: {itenary.hotel}</Card.Text>
						<Card.Text>For {itenary.days} days</Card.Text>
						<Card.Text>Expenditure: ${itenary.price}</Card.Text>
					</Card.Body>
				</div>
			</div>
		</Card>
	);
};

export default ItineraryCard;
