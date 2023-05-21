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
            <div className='flex justify-center items-center gap-12 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-950 py-8 mb-4'>
                <div>
                <img className='w-[25rem]' src={picture} alt="" />
                </div>
            <div>
            <h2>Toy Name: {name}</h2>
            <h3>Seller Name: {sellerName}</h3>
            <h3>Seller Email: {sellerEmail}</h3>
            <h4>Price: {price}</h4>
            <h4>Rating: {rating}</h4>
            <h4>Quantity: {quantity}</h4>
            <p>Details: {details}</p>
            </div>
            </div>
        </div>
    );
};

export default Details;