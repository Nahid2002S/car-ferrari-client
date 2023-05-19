import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToy from '../singleToy/SingleToy';

const Alltoys = () => {

    const toys = useLoaderData();
    console.log(toys)

    return (
        <div className='px-16 mt-6'>
          <h1 className='text-3xl font-extrabold text-center mb-4'>All Toys</h1>
          <div>
          </div>
          {
            toys.map(toy => <SingleToy key={toy._id} toy={toy}></SingleToy>)
          }
  
       </div>
    );
};

export default Alltoys;