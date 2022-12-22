import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const Blogs = () => {
   
   
    return (
        <div className='container blog-container py-5  '>
        <div className='blog-header text-center'>
         <h1>Welcome to <span className='blog-title'><b>Fast Electro</b></span>  blog</h1>
         <p>We make sure fast and quality electric service.   </p>

        </div>
        <div className="blog">
         <h4> Difference between SQL and NoSQL?</h4>
         <p><b>Answer : </b> The five critical differences between SQL vs NoSQL are:</p>
         <ol>
            <li>SQL databases are relational, NoSQL databases are non-relational.</li>
            <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
            <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
            <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
            <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
         </ol>
        </div>
        <div className="blog">
         <h4>What is JWT, and how does it work??</h4>
         <p><b>Answer : </b>JSON Web Token (JWT) is an open standard security system, that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. <br /> Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.
          </p>
        </div>
        <div className="blog">
         <h4>What is the difference between javascript and NodeJS?</h4>
         <p><b>Answer : </b> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
        </div>
        <div className="blog">
         <h4>How does NodeJS handle multiple requests at the same time?</h4>
         <p><b>Answer : </b>ultiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded.
         <br />
         it is highly scalable, lightweight, fast, and data-intensive.
          </p>
        </div>

     </div>
    );
};

export default Blogs;