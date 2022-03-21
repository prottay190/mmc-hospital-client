import React from 'react';
import Doctors from '../Doctors/Doctors';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Doctors></Doctors>
            <Footer></Footer>
        </div>
    );
};

export default Home;