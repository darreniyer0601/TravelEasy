import React from 'react';
import Card from 'react-bootstrap/Card';

const ItineraryCardWithoutPicture = (props) => {
    return (
        <Card style={{ width: '18rem', backgroundColor: 'lightGreen'}}>
            <Card.Body>
                <Card.Title>{props.p.description}</Card.Title>
                <Card.Text>{props.p.date}</Card.Text>
                <Card.Text>{props.p.price}</Card.Text>
                <Card.Text>{props.p.location}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ItineraryCardWithoutPicture

