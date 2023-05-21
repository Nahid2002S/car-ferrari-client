import React from 'react';

const SingleCatagory = ({toys}) => {
    const {picture, name, sellerName, sellerEmail, price, rating, quantity, details} = toys;
    return (
        <div>
            <div className='lg:px-8 px-2 rounded-md lg:gap-8 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-400 to-fuchsia-400 py-8 mb-2 lg:mb-0'>
                <div>
                <img className='w-[25rem] border-4 border-pink-500' src={picture} alt="" />
                </div>
            <div>
            <h2>Toy Name: {name}</h2>
            <h4>Price: {price}</h4>
            <h4>Rating: {rating}</h4>
            <p>Details: {details}</p>
            </div>
            </div>
        </div>
    );
};

export default SingleCatagory;