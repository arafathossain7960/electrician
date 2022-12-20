import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const Blogs = () => {
   
   
    return (
        <div className='m-5 p-5 text-center bg-info '>
            <h3>This is a blog page</h3>
            <h6>this function from context api {}</h6>
        </div>
    );
};

export default Blogs;