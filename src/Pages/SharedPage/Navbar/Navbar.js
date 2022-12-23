import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import   NavigationBar  from 'react-bootstrap/Navbar';
import './Navbar.css';
const Navbar = () => {
    const {loginOutUser, user}=useContext(AuthContext);
    console.log(user)
    
    return (
        <div>
           
            <>
      <NavigationBar bg="dark" variant="dark">
        <Container className=''>
          <NavigationBar.Brand >Fast-Electro</NavigationBar.Brand>
          <Container className='nav-link'>
          <Nav className="me-auto">
            <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
            <Nav.Link> <Link to='/allServices'>Service</Link></Nav.Link>
            <Nav.Link> <Link to='/blogs'>Blogs</Link></Nav.Link> 
           
             
            {
                user?.uid && user?.email?<>
                <Nav.Link> <Link to='/myReviews'>My Review</Link></Nav.Link> 
                <Nav.Link><Link to='/addService'>Add service</Link></Nav.Link> 
                
            <Nav.Link><Link  onClick={loginOutUser} >Logout</Link></Nav.Link> 
            <Nav.Link><Link >{user?.displayName}</Link></Nav.Link> 
            <img src={user?.photoURL} alt="" /> 
                </>:<>
                <Nav.Link> <Link to='/register'>Register</Link></Nav.Link>
                <Nav.Link> <Link to='/login'>Login</Link></Nav.Link> 
                </>
            }
            
          </Nav>
          </Container>
        </Container>
      </NavigationBar>
      

    
      
    </>
        </div>
    );
};

export default Navbar;