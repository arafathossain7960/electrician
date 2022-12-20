import React, { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import { postUserInfoToDb } from '../../../Utilitis/userInfo';


const Register = () => {
    const navigate =useNavigate();
const {signUpUserGoogle, signUpUserWithEmailPassword}=useContext(AuthContext);
    // const handleUserGoogle =()=>{
    //     signUpUserGoogle
    //     .then(result=>{
    //         console.log(result.user)
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     })
    // }


    const handleUserRegister =(e)=>{
        e.preventDefault();
       
        const fullName = e.target.fullName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const imgUrl = e.target.imgUrl.value;
         const userInfo = {fullName, email,imgUrl};
        signUpUserWithEmailPassword(email, password)
        .then(result =>{
          
            if(result?.user?.uid){
                navigate('/home');
                
                    postUserInfoToDb(userInfo)
              
            }
        })
        .catch(error=>{
            console.log(error)
        })
        
        e.target.reset();
    }
    return (
        <div className='w-50 mx-auto p-4 mb-3 border rounded shadow '>
            <Form.Group controlId="formBasicTitle">
                <Form.Text className='text-center'>
                    <h3>Please sign up </h3>
                </Form.Text>
            </Form.Group>
     <Form onSubmit={handleUserRegister}>

        <Form.Group className="mb-3" controlId="formBasicFullName">
            <Form.Label>Enter your full name</Form.Label>
            <Form.Control type="text" name='fullName' required placeholder="Enter full name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Email address</Form.Label>
            <Form.Control type="email" name='email' required placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control type="password" name='password' required placeholder="Enter password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter profile image link</Form.Label>
            <Form.Control type="text" name='imgUrl' required placeholder="Enter image url" />
        </Form.Group>

        
                <Form.Text className='' controlId="formBasicLogin">
                    <p>I have already account <Link to='/login'>Login</Link></p>
                </Form.Text>
           
        <Button variant="primary" type="submit">
           Register
        </Button>
        <small className='mx-2'>or</small>
        <Button onClick={signUpUserGoogle} variant='info' className='btn btn-small'>
        Register with google
        </Button>
    </Form>
        </div>
    );
};

export default Register;