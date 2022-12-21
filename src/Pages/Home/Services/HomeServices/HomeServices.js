import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServiceCard from './HomeServiceCard';

const HomeServices = () => {
    const [homeService, setHomeService]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setHomeService(data))
    },[])
    return (
        <div className='d-flex w-75'>
            {
                homeService.map(homeServiceCard => <HomeServiceCard 
                
                    homeServiceCard={homeServiceCard}
                    key={homeServiceCard._id}
                    ></HomeServiceCard>)
            }
            <div>
                <Link to='/allServices'>
                <button>See more</button>
                </Link>
            
            </div>
        </div>
    );
};

export default HomeServices;