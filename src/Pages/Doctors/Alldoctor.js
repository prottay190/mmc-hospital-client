import React from 'react';
import { Link } from 'react-router-dom';
import './Alldoctor.css';


const Alldoctor = ({ doctor }) => {
    const { _id, img, name, Expert, details, qualification, Price } = doctor;
    return (
            <div className='all-dc p-5'>
                <img src={img} />
                <div>
                    <h5>Name: {name}</h5>
                    <h6>{Expert}</h6>
                    <p>{qualification}</p>
                    <h5>$ {Price}</h5>
                    <Link to={`/doctors/${_id}`}> <button className="btn btn-primary">Show Details</button> </Link>
                </div>
            </div>
            
    );
};

export default Alldoctor;