import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServicesCard from './AllServicesCard';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';

const AllServices = () => {
    const allServices = useLoaderData();
    return (
        <Container className='my-4'>
               <Row>
           {
            allServices.map(allService => <AllServicesCard 
            key={allService._id}
            allService={allService}
            ></AllServicesCard>)
           }
           </Row>
        </Container>
    );
};

export default AllServices;