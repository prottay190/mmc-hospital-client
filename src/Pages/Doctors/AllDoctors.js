import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Header from '../Home/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Alldoctor from './Alldoctor';
import './AllProducts.css'

const AllDoctors = () => {
    const [doctors, setDoctors] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 6;

    useEffect(() => {
        fetch(`https://arcane-scrubland-61314.herokuapp.com/doctors?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setDoctors(data.doctors);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
    }, [page])
    return (
        <>
          <div style={{background: '#f2f2f2', marginBottom: '30px'}}>
          <Header></Header>
          </div>
            <div>
                {doctors.map(doctor => <Alldoctor
                    key={doctor._id}
                    doctor={doctor}
                ></Alldoctor>)
                }

           <div className='pagination'>
               {
                   [...Array(pageCount).keys()].map(number => <Pagination>
                       
                     <Pagination.Item size='lg'  className= {number === page ? 'selected' : ''} 
                   key={number} 
                   onClick ={() => setPage(number)}>{number + 1}</Pagination.Item>
                   
                   </Pagination>)
               }
           </div>

            </div>
            <Footer></Footer>
        </>

    );
};

export default AllDoctors;