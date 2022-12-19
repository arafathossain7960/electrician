import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

import Home from "../Pages/Home/Home";
import AllServices from "../Pages/Home/Services/Services&Reviews/AllServices/AllServices";

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
                   return fetch('http://localhost:5000/allServices')
                } ,
                element:<AllServices></AllServices>
            }
        ]
    }





])
   