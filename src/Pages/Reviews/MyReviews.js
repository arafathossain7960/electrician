import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import MySingleReview from './MyReviews/MySingleReview';

const MyReviews = () => {
    const [myReviews, setMyReviews]= useState([]);
    const {user}=useContext(AuthContext);
    useEffect(()=>{
        fetch(`https://fast-electro-server-side.vercel.app/myReviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReviews(data))
    },[])
    return (
        <div style={{height:'600px'}}  className='container py-2 my-4 bg-light'>
            {
                myReviews.length > 0?
                    <div>
                        <h3 className='text-center text-primary'>Your all review here</h3>
                   {
                     myReviews.map(myReview => <MySingleReview
                        key={myReview._id}
                        myReview={myReview}
                        setMyReviews={setMyReviews}
                        ></MySingleReview>)
                   }

                </div>
              :
                
                <div className='text-center text-warning fs-2 bold'>
                    You have no review add yet!
                </div>
            }
           
        </div>
    );
};

export default MyReviews;