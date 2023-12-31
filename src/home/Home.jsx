import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import { ToastContainer } from 'react-toastify';
import useTitle from '../hook/UseTitle';

const Home = () => {

    useTitle('Home');

    return (
        <div className='bg-indigo-300'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;