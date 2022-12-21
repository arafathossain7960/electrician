import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReviews from '../../../../Reviews/AddReviews/AddReviews';
import AllReviews from '../Reviews/AllReviews';

const ServiceDetails = () => {
    const singleService = useLoaderData();
    console.log(singleService)
    const {description,_id, id,img_url,service_name, price, ratings
    } =singleService;
    return (
        <>
        <div className='p-3 m-2'>
           <img src={img_url} alt="" />
           <h3>Service name  {service_name}</h3>
           <p><b>Description</b> {description}</p>
           <h4> price : <b>$ {price}</b> <small>Ratings: {ratings} </small></h4>
        </div>

        <AllReviews></AllReviews>
       
        </>
    );
};

export default ServiceDetails;