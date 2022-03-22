import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from './Review';

const Reviews = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('https://arcane-scrubland-61314.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data.doctors))
    }, [])
    return (
        <div>
            <Container className='my-5'>
                <h2 className='p-5'>All Reviews</h2>
                <Row lg={3} md={2} sm={1} xs={1} className="g-4">
                    {doctors.map(doctor => <Review
                        key={doctor._id}
                        doctor={doctor}
                    ></Review>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Reviews;