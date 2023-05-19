import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';
import Banner from '../banner/Banner';
import Register from '../register/Register';
import AddToys from '../addtoys/AddToys';
import Alltoys from '../alltoys/Alltoys';
import MyToy from '../mytoy/MyToy';
import Details from '../details/Details';
import Update from '../update/Update';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Banner></Banner>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'alltoys',
                element: <Alltoys></Alltoys>,
                loader: () => fetch('https://assignment-11-server-nahid2002s.vercel.app/toy')
            },
            {
                path: 'addtoys',
                element: <AddToys></AddToys>
            },
            {
                path: 'mytoys',
                element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
            },
            {
                path: 'details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-11-server-nahid2002s.vercel.app/toy/${params.id}`)
            },
            {
                path: 'mytoys/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`https://assignment-11-server-nahid2002s.vercel.app/toy/${params.id}`)
            }
        ]
    }
])

export default router;