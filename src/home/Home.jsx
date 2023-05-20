import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Gallary from '../gallary/gallary';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    return (
        <div className='bg-indigo-400 py-4'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;