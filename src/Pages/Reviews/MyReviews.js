import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import MySingleReview from './MyReviews/MySingleReview';

const MyReviews = () => {
    const [myReviews, setMyReviews]= useState([]);
    const {user}=useContext(AuthContext);
    useEffect(()=>{
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReviews(data))
    },[])
    return (
        <div>
            {
                myReviews.map(myReview => <MySingleReview
                key={myReview._id}
                myReview={myReview}
                ></MySingleReview>)
            }
        </div>
    );
};

export default MyReviews;