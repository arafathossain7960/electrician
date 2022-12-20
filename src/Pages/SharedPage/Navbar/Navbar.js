import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import   NavigationBar  from 'react-bootstrap/Navbar';
const Navbar = () => {
    const {loginOutUser, user}=useContext(AuthContext);
    
    return (
        <div>
            {/* <Link to='/home'>Home</Link>
            <Link to='/allServices'>Service</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/reviews'>Review</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link  onClick={loginOutUser} >Logout</Link>
            <Link   >{user?.email}</Link> */}
            <>
      <NavigationBar bg="dark" variant="dark">
        <Container>
          <NavigationBar.Brand >Fast-Electro</NavigationBar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
            <Nav.Link> <Link to='/allServices'>Service</Link></Nav.Link>
            <Nav.Link> <Link to='/blogs'>Blogs</Link></Nav.Link> 
           
             
            {
                user?.uid && user?.email?<>
                <Nav.Link> <Link to='/myReviews'>My Review</Link></Nav.Link> 
            <Nav.Link><Link  onClick={loginOutUser} >Logout</Link></Nav.Link> 
            <Nav.Link><Link   >{user?.email}</Link></Nav.Link> 
                </>:<>
                <Nav.Link> <Link to='/register'>Register</Link></Nav.Link>
                <Nav.Link> <Link to='/login'>Login</Link></Nav.Link> 
                </>
            }
            
          </Nav>
        </Container>
      </NavigationBar>
      

    
      
    </>
        </div>
    );
};

export default Navbar;