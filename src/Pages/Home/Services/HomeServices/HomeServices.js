import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServiceCard from './HomeServiceCard';

const HomeServices = () => {
    const [homeService, setHomeService]=useState([]);

    useEffect(()=>{
        fetch('https://fast-electro-server-side.vercel.app/services')
        .then(res => res.json())
        .then(data => setHomeService(data))
    },[])
    return (
        <div style={{width:'85%'}} className='d-flex  my-5'>
            {
                homeService.map(homeServiceCard => <HomeServiceCard 
                
                    homeServiceCard={homeServiceCard}
                    key={homeServiceCard._id}
                    ></HomeServiceCard>)
            }
            <div className='d-flex  align-items-center'>
                <Link to='/allServices'>
                <button className='btn btn-info'> &#8827;</button>
                </Link>
            
            </div>
        </div>
    );
};

export default HomeServices;