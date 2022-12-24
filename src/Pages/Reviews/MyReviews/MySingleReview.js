import React from 'react';

const MySingleReview = ({myReview, setMyReviews}) => {
    const {_id, email, review}=myReview;

    const handleReviewDelete =(id)=>{
        const agree = window.confirm('Are you sure you want to delete this review?')
      if(agree){
        fetch(`https://fast-electro-server-side.vercel.app/myReview/${id}`,{method:'DELETE'} )
        .then(res => res.json())
        .then(data => {
           console.log(data)
        })
      }
      
       

    }
    return (
        <div className='my-2 p-3 d-flex justify-content-between shadow'>
            
            <p>{review}</p>
            <button className='btn btn-warning btn-sm' onClick={()=>handleReviewDelete(_id)}>Delete Review</button>
        </div>
    );
};

export default MySingleReview;