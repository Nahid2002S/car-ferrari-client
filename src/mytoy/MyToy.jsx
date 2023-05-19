import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../authprovider/AuthProvider';
import MySingleToy from '../mySingletoy/MySingleToy';

const MyToy = () => {
    const {user} = useContext(AuthContext);

    const [mytoys, setMytoys] = useState([]);

    useEffect(() =>{
        fetch(`https://assignment-11-server-nahid2002s.vercel.app/mytoy/${user?.email}`)
        .then(res => res.json())
        .then(data => setMytoys(data))
    },[user])
    return (
        <div className='px-16'>
            <h1 className='text-3xl font-extrabold text-center mb-4'>My Toys</h1>
  
            {
                mytoys.map(mytoy => <MySingleToy key={mytoy._id} mytoy={mytoy}></MySingleToy>)
            }

            </div>
    );
};

export default MyToy;