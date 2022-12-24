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
        const userImg = user.photoURL;
       
        const userReview = {review, userImg, email, serviceUniqueId};
    

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
    return (
        <div className='w-50 mx-auto my-5 p-4 mb-3 border rounded shadow '>
           
           {reviewSuccess?.insertedId &&  <Toast className='py-3 my-3 mx-auto'>
        <Link to='/allServices'><Toast.Header className='text-end' >
        </Toast.Header></Link>
      <Toast.Body className='text-success'>Review successfully added</Toast.Body>
    </Toast>

         }
            <Form.Group>
                <Form.Text className='text-center'>
                    <h3>Add your reviews </h3>
                </Form.Text>
            </Form.Group>
     <Form onSubmit={handleAddReviews}>
    
      <FloatingLabel controlId="floatingTextarea2" label="Add reviews">
        <Form.Control name='reviews'
          as="textarea" required
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
          </FloatingLabel>
          <Button variant="primary" type="submit">
        Submit
      </Button>
          <Button className='mx-2 text-light' variant="info" type="submit">
        <Link to='/home'>Go home</Link>
      </Button>
         </Form>

   
      </div>
    );
};

export default AddReviews;