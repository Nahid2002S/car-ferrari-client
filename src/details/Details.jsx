import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const loadedData = useLoaderData();
    console.log(loadedData)
    const {picture, name, sellerName, sellerEmail, price, rating, quantity, details} = loadedData;

    return (
        <div className='px-40'>
            <h1 className='text-3xl font-extrabold text-center my-4'>Toy Details</h1>
            <div className='flex justify-center items-center gap-8 bg-indigo-200 py-8'>
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