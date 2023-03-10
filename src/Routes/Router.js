import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Authication/Login/Login";
import PrivetRoute from "../Pages/Authication/PrivetRoute/PrivetRoute";
import Register from "../Pages/Authication/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";

import Home from "../Pages/Home/Home";
import AddService from "../Pages/Home/Services/AddService/AddService";
import AllServices from "../Pages/Home/Services/Services&Reviews/AllServices/AllServices";
import ServiceDetails from "../Pages/Home/Services/Services&Reviews/ServiceDetails/ServiceDetails";
import NotFound from "../Pages/NotFound/NotFound";
import AddReviews from "../Pages/Reviews/AddReviews/AddReviews";
import MyReviews from "../Pages/Reviews/MyReviews";

export const router =createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/allServices',
                loader:()=>{
                   return fetch('https://fast-electro-server-side.vercel.app/allServices')
                } ,
                element:<AllServices></AllServices>
            },
            {
                path:'/serviceDetails/:serviceId',
                loader:({params})=>{
                    return fetch(`https://fast-electro-server-side.vercel.app/serviceDetails/${params.serviceId}`)
                },
                element:<ServiceDetails></ServiceDetails>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addService',
                element:<PrivetRoute>
                    <AddService></AddService>
                </PrivetRoute> 
            },
            {
                path:'/addReviews',
                element:<PrivetRoute>
                    <AddReviews></AddReviews>
                </PrivetRoute>
            },
            {
                path:'/myReviews',
                element:<PrivetRoute>
                    <MyReviews></MyReviews>
                </PrivetRoute>
            },
            {
                path:'*',
                element:<NotFound></NotFound>
            }

        ]
    }





])
   