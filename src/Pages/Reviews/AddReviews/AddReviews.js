import React, { useContext, useState } from 'react';
import { Button, Toast } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const AddReviews = () => {
    const [reviewSuccess, setReviewSuccess]=useState(null);
    const {user, serviceUniqueId}=useContext(AuthContext);
    const handleAddReviews =(e)=>{
        e.preventDefault();
        const review = e.target.reviews.value;
        const email = user.email;
        const userReview = {review, email, serviceUniqueId};
    

        fetch('http://localhost:5000/addReview',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userReview)
        })
        .then(res => res.json())
        .then(data => setReviewSuccess(data))
       
        e.target.reset();
    }
    console.log(reviewSuccess)
    return (
        <div className='w-50 mx-auto my-5 p-4 mb-3 border rounded shadow '>
            <Form.Group>
                <Form.Text className='text-center'>
                    <h3>Add your reviews </h3>
                </Form.Text>
            </Form.Group>
     <Form onSubmit={handleAddReviews}>
    
      <FloatingLabel controlId="floatingTextarea2" label="Add reviews">
        <Form.Control name='reviews'
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
          </FloatingLabel>
          <Button variant="primary" type="submit">
        Submit
      </Button>
          <Button variant="dark" type="submit">
        <Link to='/home'>Go home</Link>
      </Button>
         </Form>

         {reviewSuccess.insertedId &&  <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>

         }
      </div>
    );
};

export default AddReviews;