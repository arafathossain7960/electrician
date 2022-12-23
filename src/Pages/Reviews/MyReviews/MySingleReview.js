import React from 'react';

const MySingleReview = ({myReview}) => {
    const {_id, email, review}=myReview;

    const handleReviewDelete =(id)=>{
        alert('Are you confirm this review will delete permanently');
        fetch(`http://localhost:5000/myReview/${id}`,{method:'DELETE'} )
       .then(res => res.json())
       .then(data => console.log(data))
       

    }
    return (
        <div>
            <small>{email}</small>
            <p>{review}</p>
            <button onClick={()=>handleReviewDelete(_id)}>Delete Review</button>
        </div>
    );
};

export default MySingleReview;