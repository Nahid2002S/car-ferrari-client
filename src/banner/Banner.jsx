import React from 'react';
import Gallary from '../gallary/gallary';
import ShopByCatagory from '../shopbycatagory/ShopByCatagory';
import HeroProduct from '../heroProduct/HeroProduct';

const Banner = () => {
    return (
        <div className='px-16'>
            <div className='flex justify-center items-center mt-6 bg-indigo-200 px-8 py-12 rounded-md'>
            <div className='w-[80%]'>
                <h1 className='text-7xl'>Kids Ferrari</h1>
                <p></p>
            </div>
            <div>
                <img className='w-[90%]' src="https://img.freepik.com/free-vector/different-kind-toys_1308-74241.jpg?w=740&t=st=1684341440~exp=1684342040~hmac=df5fa17d33e14ec6a25d2233ed4a2a8e419b9ac3c834acad1e59d41777249f88" alt="Toys" />
            </div>
        </div>
        <Gallary></Gallary>
        <ShopByCatagory></ShopByCatagory>
        <HeroProduct></HeroProduct>
        </div>
    );
};

export default Banner;