import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

const ItineraryCard = (props) => {
    return (
        <Card style={{ width: '50rem'}}>
            <div class="row no-gutters">
            <div class="col-auto">
                <Card.Img src="https://picsum.photos/300/200" class="img-fluid" alt=""></Card.Img>
            </div>  
            <div class="col">
                <Card.Body>
                    <Card.Title>{props.p.description}</Card.Title>
                    <Card.Text>{props.p.date}</Card.Text>
                    <Card.Text>{props.p.price}</Card.Text>
                    <Card.Text>{props.p.location}</Card.Text>
                </Card.Body>
            </div>
            </div>
        </Card>
    )

}

export default ItineraryCard

