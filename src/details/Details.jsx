import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hook/UseTitle';

const Details = () => {
    const loadedData = useLoaderData();
    const {picture, name, sellerName, sellerEmail, price, rating, quantity, details} = loadedData;

    useTitle('Toy Details');
    return (
        <div className='lg:px-52 px-2'>
            <h1 className='text-3xl font-extrabold text-center my-4'>Toy Details</h1>
            <div className='flex justify-center items-center gap-12 px-12 text-sky-200 font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-sky-950 py-8 mb-4'>
                <div>
                <img className='border-4 border-sky-500' src={picture} alt="" />
                </div>
            <div>
            <h2>Toy Name: {name}</h2>
            <h3>Seller Name: {sellerName}</h3>
            <h3>Seller Email: {sellerEmail}</h3>
            <h4>Price: {price}</h4>
            <h4>Rating: {rating}</h4>
            <h4>Available Quantity: {quantity}</h4>
            <p>Details Description: {details}</p>
            </div>
            </div>
        </div>
    );
};

export default Details;