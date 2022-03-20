import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/background/successful-medical-team.png';
import img2 from '../../../images/background/young-female-surgeon-with-medical-team-back-before-surgery.png';
import Header from '../Header/Header';
import './banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel> 
                <Carousel.Item className='banner'>
                      
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        />
                    <Carousel.Caption className='header-c'>
                    <Header></Header> 
                    </Carousel.Caption>
                    <Carousel.Caption>
                        wellcome our hospital
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='banner'>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='header-c'>
                    <Header></Header> 
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='banner'>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='header-c'>
                    <Header></Header> 
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;