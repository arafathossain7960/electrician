import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {
    const allServices = useLoaderData();
    return (
        <div>
           {
            allServices.map(allService => <AllServicesCard 
            key={allService._id}
            allService={allService}
            ></AllServicesCard>)
           }
        </div>
    );
};

export default AllServices;