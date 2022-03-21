import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Doctor from './Doctor';
import './Doctors.css';
import { FaArrowCircleRight } from 'react-icons/fa';


const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data.doctors))
    }, [])
    return (
        <div>
            <div className='Services-container'>
                <h2 style={{ padding: '20px' }}>Doctors</h2>
                <Container className='my-5'>
                    <Row lg={3} md={2} sm={1} xs={1} className="g-4">
                        {doctors.map(doctor => <Doctor
                            key={doctor._id}
                            doctor={doctor}
                        ></Doctor>).slice(0, 5)
                        }
                        <div className='service-con'>
                            <div className='service-btn'>
                                <Link to='/alldoctors'> <button className="btn btn-primary">View All Doctors <FaArrowCircleRight style={{ fontSize: '20px' }} /></button> </Link>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Doctors;