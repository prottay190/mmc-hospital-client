import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Header from '../../Home/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Details = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState({});


    useEffect(() => {
        fetch(`https://arcane-scrubland-61314.herokuapp.com/doctors/${id}`)
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return (
        <div>
            <div style={{ background: '#f2f2f2', marginBottom: '30px' }}>
                <Header></Header>
            </div>
            <div className="details-Container p-5">
                <img src={doctor.img} className='img-fluid center' alt='Responsive image' />
                <h2>Name: {doctor.name}</h2>
                <p> {doctor.Expert}</p>
                <h5> {doctor.qualification}</h5>
                <p>Details: {doctor.details}</p>
                <h6>Price: $ {doctor.Price}</h6>
                <Link to=""><Button className='details-btn'>Book Appointment</Button> </Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;