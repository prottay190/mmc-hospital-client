import React from 'react';
import Doctors from '../Doctors/Doctors';
import Reviews from '../Review/Reviews';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Doctors></Doctors>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;