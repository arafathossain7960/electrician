import React from 'react';

const MySingleReview = ({myReview, setMyReviews}) => {
    const {_id, email, review}=myReview;

    const handleReviewDelete =(id)=>{
        const agree = window.confirm('Are you sure you want to delete this review?')
      if(agree){
        fetch(`http://localhost:5000/myReview/${id}`,{method:'DELETE'} )
        .then(res => res.json())
        .then(data => {
           console.log(data)
        })
      }
      
       

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