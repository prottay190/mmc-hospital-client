import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaSearchPlus } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer'>
            <Container className='footer-container p-4'>
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <h3 className="footer-heading">MMC Hospital</h3>
                        <p className="footer-textp">Quick Results - Search for Relevant Info & Results. Get Results from Multiple Engines. Search for Hospitals In Usa and Discover Millions of Results at BlendedSearch. Discover us now!</p>


                    </Col>
                    <Col lg={3} md={6} sm={12} className='f-c'>
                       <h4>Help</h4>
                       <p>Doctor Appointment</p>
                       <p>Medicine</p>
                       <p>Healthcare</p>
                       
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                       <h4 style={{marginBottom: '10px'}}>Newsletter</h4>
                       <input type="search" /> <FaSearchPlus style={{color: 'red', fontSize: '28px'}} />
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <h4>Get Social</h4>
                        <small><FaFacebook style={{ fontSize: '25px' }} /></small>
                        <small><FaInstagramSquare style={{ fontSize: '25px', marginLeft: '15px' }} /></small>
                        <small><FaTwitterSquare style={{ fontSize: '25px', marginLeft: '15px' }} /></small>
                        <small> <FaLinkedin style={{ fontSize: '25px', marginLeft: '15px' }} /></small>
                    </Col>
                </Row>
                <Row>
                    <h5 className="footer-content">© Copyright 2022 -MMC  </h5>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;