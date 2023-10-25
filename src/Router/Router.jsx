import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layouts/Main';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Home from '../Home/Home/Home';
import FormRBS from '../Form-rbs/FormRBS';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
        {
          path:'/form',
          element:<FormRBS></FormRBS>
        }
      ]
    }
  ]);
  export default router