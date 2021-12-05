import React from 'react';
import Card from 'react-bootstrap/Card';

const UtilityCard = (props) => {
    return (
        <Card style={{ width: '13rem'}}>
            <Card.Body style={ {fontSize: '0.6rem'}, {lineHeight: '0.1rem'}}>
                <Card.Title>{props.p.name}</Card.Title> 
                <Card.Text>{props.p.details}</Card.Text>
                <Card.Text>{props.p.date}</Card.Text>
                <Card.Text>{props.p.price}</Card.Text>
                <Card.Text>{props.p.startLocation}</Card.Text>
                <Card.Text>{props.p.endLocation}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UtilityCard

