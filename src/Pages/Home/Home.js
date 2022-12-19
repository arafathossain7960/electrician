import React from 'react';
import Getintouch from './Getintouch/Getintouch';
import Offers from './Offers/Offers';
import HomeServices from './Services/HomeServices/HomeServices';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <HomeServices></HomeServices>
            <Offers></Offers>
            <Getintouch></Getintouch>
        </>
    );
};

export default Home;