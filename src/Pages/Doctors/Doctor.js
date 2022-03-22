import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    const { _id, img, name, Expert, details, qualification, Price } = doctor;
    return (
        <Col className="single-hotel-card">
        <Card>
            <Card.Img variant="top" src={img} className="hotel-card-img" />
            <Card.Body className="text-start">
                <Card.Title className="hotel-name">{name}</Card.Title>
                <Card.Text> <span className='c-text'>Specialist: {Expert}</span></Card.Text>
                <Card.Text>{qualification}</Card.Text>
                <Card.Text> <span className='c-text'>Price: ${Price}</span></Card.Text>
                <Link to={`/doctors/${_id}`}> <button className="btn btn-primary">Show Details</button> </Link> <br />
            </Card.Body>
        </Card>
    </Col>
    );
};

export default Doctor;