import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToy from '../singleToy/SingleToy';

const Alltoys = () => {

  const [searchText, setSearchText] = useState("");

  const [toys, setToys] = useState([]);

    useEffect(()=>{
      fetch('https://assignment-11-server-nahid2002s.vercel.app/toy')
      .then(res => res.json())
      .then(data => setToys(data))
    },[])

    return (
        <div className='px-16 mt-6'>
          <h1 className='text-3xl font-extrabold text-center mb-4'>All Toys</h1>
            <input onChange={(e) => setSearchText(e.target.value)} type="text" className='mb-4 px-4 py-2 mr-2' />
            <button className='px-4 py-2 bg-indigo-500'>Search</button>
          <div>
          </div>
          {
            toys.map(toy => <SingleToy key={toy._id} toy={toy}></SingleToy>)
          }
  
       </div>
    );
};

export default Alltoys;