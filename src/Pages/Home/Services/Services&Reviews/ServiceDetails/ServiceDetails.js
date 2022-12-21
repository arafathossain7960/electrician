import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../../Context/UserContext';
import AllReviews from '../Reviews/AllReviews';

const ServiceDetails = () => {
    const {setServiceUniqueId}=useContext(AuthContext);
    const singleService = useLoaderData();
    const {description,_id, id,img_url,service_name, price, ratings
    } =singleService;
    setServiceUniqueId(_id);
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