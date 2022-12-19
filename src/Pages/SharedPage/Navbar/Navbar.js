import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/allServices'>Service</Link>
            <Link to='/reviews'>Review</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Navbar;