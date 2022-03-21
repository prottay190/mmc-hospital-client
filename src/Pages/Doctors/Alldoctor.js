import React from 'react';


const Alldoctor = ({ doctor }) => {
    const { _id, img, name, Expert, details, qualification, Price } = doctor;
    return (
            <div>
                <img src={img} />
                <div>
                    <h5>Name: {name}</h5>
                    <h6>{Expert}</h6>
                    <p>{qualification}</p>
                    <p>{details}</p>
                    <h5>$ {Price}</h5>
                </div>
            </div>
            
    );
};

export default Alldoctor;