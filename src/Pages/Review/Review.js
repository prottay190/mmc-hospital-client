import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

  
import './Review.css'

const Review = ({ doctor }) => {
    const { _id, img, name, Expert, details, qualification, Price, rating } = doctor;

    return (
        <Col className="single-hotel-card">
            <Card>

                <Card.Body className="text-start">
                    <Card.Title className="hotel-name">{name}</Card.Title>
                    <Card.Text> <span className='c-text'>Specialist: {Expert}</span></Card.Text>
                    <Card.Text>{qualification}</Card.Text>
                    <Card.Text>rating: {rating} </Card.Text>
                    <Rating
                       initialRating={rating}  
                       readonly 
                    />
                    <Card.Text> <span className='c-text'>Price: ${Price}</span></Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;