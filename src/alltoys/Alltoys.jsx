import React, { useContext, useEffect, useState } from 'react';
import SingleToy from '../singleToy/SingleToy';
import { AuthContext } from '../authprovider/AuthProvider';

const Alltoys = () => {
  const {user} = useContext(AuthContext);

  const [toys, setToys] = useState([]);

    useEffect(()=>{
      fetch('https://assignment-11-server-nahid2002s.vercel.app/toy')
      .then(res => res.json())
      .then(data => setToys(data))
    },[])

    const handleSearch = event =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      console.log(name)
      const searchData = toys.filter(toy => toy.name === name);
      setToys(searchData)
    }

    const handleAscending = () =>{
      fetch(`https://assignment-11-server-nahid2002s.vercel.app/ascending/${user?.email}`)
      .then(res => res.json())
      .then(data => setToys(data))
  }

  const handleDescending = () =>{
          fetch(`https://assignment-11-server-nahid2002s.vercel.app/descending/${user?.email}`)
          .then(res => res.json())
          .then(data => setToys(data))
  }

    return (
        <div className='px-16 mt-6'>
          <h1 className='text-3xl font-extrabold text-center mb-4'>All Toys</h1>
          <div className='mb-4 flex gap-2'>
                <button onClick={handleAscending} className='px-4 py-2 bg-indigo-500'>Ascending</button>
                <button onClick={handleDescending} className='px-4 py-2 bg-indigo-500'>Descending</button>
            </div>
            <form onSubmit={handleSearch}>
            <input type="text" name='name' className='mb-4 px-4 py-2 mr-2' />
            <button className='px-4 py-2 bg-indigo-500'>Search</button>
            </form>
          <div>
          </div>
          {
            toys.map(toy => <SingleToy key={toy._id} toy={toy}></SingleToy>)
          }
       </div>
    );
};

export default Alltoys;