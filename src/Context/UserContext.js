import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword ,signInWithPopup,signOut, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { postUserInfoToDb } from '../Utilitis/userInfo';

// create context
export const AuthContext = createContext({});
// call auth and provider from firebase
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);


const UserContext = ({children}) => {
    const [user, setUser]=useState({});
    const [loading, setLoading]=useState(true);
    const [serviceUniqueId, setServiceUniqueId]=useState(null);
    
    // Sing up with google 
const signUpUserGoogle =()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
    .then(result =>{
      
    })
    .catch(error =>{
        console.log(error)
    })
 }
 // Sign up user with email and password
 const signUpUserWithEmailPassword =(email, password)=>{
    setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password)
 }
 
 // Login user with email and password
 const loginUserEmailPassword = (email, password)=>{
    setLoading(true);
     return signInWithEmailAndPassword(auth, email ,password);
 }
 
 // Login out user 
 const loginOutUser =()=>{
    setLoading(true);
     return signOut(auth);
 }
 
 // currently signed in user 
 useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
         setUser(currentUser)
         setLoading(false);
     })
     return()=>{
        unSubscribe();
     }
 },[])
 
 const userAuthInfo ={user, loading, serviceUniqueId,setServiceUniqueId, signUpUserGoogle, signUpUserWithEmailPassword, loginUserEmailPassword, loginOutUser };
    return (
        <AuthContext.Provider value={userAuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;