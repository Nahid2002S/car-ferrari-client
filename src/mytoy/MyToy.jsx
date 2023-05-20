import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../authprovider/AuthProvider';
import MySingleToy from '../mySingletoy/MySingleToy';
import useTitle from '../hook/UseTitle';

const MyToy = () => {
    const {user} = useContext(AuthContext);

    const [mytoys, setMytoys] = useState([]);

    useEffect(() =>{
        fetch(`https://assignment-11-server-nahid2002s.vercel.app/mytoy/${user?.email}`)
        .then(res => res.json())
        .then(data => setMytoys(data))
    },[user]);

    const handleAscending = () =>{
        fetch(`https://assignment-11-server-nahid2002s.vercel.app/ascending/${user?.email}`)
        .then(res => res.json())
        .then(data => setMytoys(data))
    }
  
    const handleDescending = () =>{
            fetch(`https://assignment-11-server-nahid2002s.vercel.app/descending/${user?.email}`)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }

    useTitle('My Toys');

    return (
        <div className='px-16'>
            <h1 className='text-3xl font-extrabold text-center mb-4'>My Toys</h1>
            <div className='mb-4 flex gap-2'>
                <button onClick={handleAscending} className='px-4 py-2 bg-indigo-500'>Ascending</button>
                <button onClick={handleDescending} className='px-4 py-2 bg-indigo-500'>Descending</button>
            </div>
            {
                mytoys.map(mytoy => <MySingleToy key={mytoy._id} mytoy={mytoy}></MySingleToy>)
            }
            </div>
    );
};

export default MyToy;