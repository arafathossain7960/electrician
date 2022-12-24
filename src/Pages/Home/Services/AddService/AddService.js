import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





const AddService = () => {
   
    const HandleAddReviews =(e)=>{
        e.preventDefault();
    
        const service_name= e.target.service_name.value;
        const price= e.target.price.value;
        const img_url= e.target.img_url.value;
        const description= e.target.description.value;
        const addNewService = {service_name,img_url,description,price};
        
        fetch('https://fast-electro-server-side.vercel.app/addService',{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(addNewService)
        })
        .then(res => res.json())
        .then(data => console.log(data))
       
    
        
    }
  
    return (
        <div className='w-50 my-4 mx-auto p-4 mb-3 border rounded shadow '>
             <Form.Group controlId="formBasicTitle">
                <Form.Text className='text-center border-bottom'>
                    <h3>Add your services </h3>
                </Form.Text>
            </Form.Group>
            <hr />
     <Form onSubmit={HandleAddReviews}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Service title</Form.Label>
        <Form.Control name='service_name' type="text" required placeholder="Service title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Add price</Form.Label>
        <Form.Control name='price' type="number" required placeholder="Enter service price $00" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image url</Form.Label>
        <Form.Control name='img_url' type="text" required placeholder="Enter service image url" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control style={{hight:'80px'}} name='description' type="text" required placeholder="Add service description" />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default AddService;