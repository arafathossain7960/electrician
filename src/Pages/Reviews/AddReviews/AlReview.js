import React from 'react';
import { Col } from 'react-bootstrap';

const AlReview = ({ allReview}) => {

    // review img style 
    const reviewImg= {
        width:'50px',
        height:'50px',
        borderRadius:'50%'
    }
    return (
        <Col>
        <div className='shadow rounded bordered p-3'>
            <p><b>Comment</b> {allReview.review}</p>
           <div style={{fontSize:'12px'}} className='d-flex justify-content-around align-items-center '>
           <p>Email: {allReview.email}</p>
            <img style={reviewImg} className='reviewImg' src={allReview?.userImg} alt="" />
           </div>
        </div>
        </Col>
    );
};

export default AlReview;