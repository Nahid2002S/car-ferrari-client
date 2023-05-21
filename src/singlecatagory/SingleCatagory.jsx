import React from 'react';
import { Link } from 'react-router-dom';

const SingleCatagory = ({toys}) => {
    const {picture, name, price, rating, _id} = toys;
    return (
        <div>
            <div className='lg:px-8 px-2 rounded-md lg:gap-8 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-400 to-fuchsia-400 py-8 mb-2 lg:mb-0'>
                <div>
                <img className='w-[25rem] h-[15rem] mb-4 border-4 border-pink-500' src={picture} alt="" />
                </div>
            <div>
            <h2 className='font-bold text-sky-300'>Toy Name: {name}</h2>
            <h4 className='font-bold text-sky-300'>Price: {price}</h4>
            <h4 className='font-bold text-sky-300'>Rating: {rating}</h4>
            </div>
            <Link to={`/toy/${_id}`}><button className='bg-indigo-600 mt-4 px-4 py-2 rounded-md text-white'>View Details</button></Link>
            </div>
        </div>
    );
};

export default SingleCatagory;