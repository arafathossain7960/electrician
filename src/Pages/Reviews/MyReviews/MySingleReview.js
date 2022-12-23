import React from 'react';

const MySingleReview = ({myReview}) => {
    const {_id, email, review}=myReview;
    return (
        <div>
            <small>{email}</small>
            <p>{review}</p>
            <button>Delete Review</button>
        </div>
    );
};

export default MySingleReview;