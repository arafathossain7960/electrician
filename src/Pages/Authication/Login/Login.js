import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';


const Login = () => {
    const {loading, signUpUserGoogle,loginUserEmailPassword }=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // if(loading){
    //    return <Spinner animation="border" role="status">
    //     <span className="visually-hidden">Loading...</span>
    //   </Spinner>
    // }

    const handleUserLogin =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
      

        const userInfo = {email, password};
        loginUserEmailPassword(email, password)
        .then(result =>{
            navigate(from, {replace:true});
            e.target.reset();
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className='w-50 mx-auto p-4 mb-3 border rounded shadow '>
            <Form.Group>
                <Form.Text className='text-center'>
                    <h3>Please Login Now </h3>
                </Form.Text>
            </Form.Group>
     <Form onSubmit={handleUserLogin}>


        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Email address</Form.Label>
            <Form.Control type="email" name='email' required placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control type="password" name='password' required placeholder="Enter password" />
        </Form.Group>

      

        
                <Form.Text className=''controlId="formBasicAccount">
                    <p>I am a new user <Link to='/register'>Create account</Link></p>
                </Form.Text>
           
        <Button variant="primary" type="submit">
           Login
        </Button>
        <small className='mx-2'>or</small>
        <Button onClick={signUpUserGoogle} variant='info' className='btn btn-small'>
                Login with Google
        </Button>
    </Form>
        </div>
    );
};

export default Login;