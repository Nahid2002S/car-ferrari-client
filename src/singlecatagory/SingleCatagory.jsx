import React from 'react';

const SingleCatagory = ({toys}) => {
    const {picture, name, sellerName, sellerEmail, price, rating, quantity, details} = toys;
    return (
        <div>
            <div className='flex justify-center items-center px-8 gap-8 bg-indigo-200 py-8'>
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

export default SingleCatagory;