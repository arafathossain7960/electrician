import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/UserContext';

const AddReviews = () => {
    const {user}=useContext(AuthContext);
    const handleAddReviews =(e)=>{
        e.preventDefault();
        const reviews = e.target.reviews.value;
        const email = user.email;
        console.log(reviews, email)

    }
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
          </Form>
      </div>
    );
};

export default AddReviews;