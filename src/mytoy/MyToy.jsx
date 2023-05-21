import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../authprovider/AuthProvider';
import MySingleToy from '../mySingletoy/MySingleToy';
import useTitle from '../hook/UseTitle';
import Swal from 'sweetalert2'

const MyToy = () => {
    const {user} = useContext(AuthContext);

    const [mytoys, setMytoys] = useState([]);

    useEffect(() =>{
        fetch(`https://assignment-11-server-nahid2002s.vercel.app/mytoy/${user?.email}`)
        .then(res => res.json())
        .then(data => setMytoys(data))
    },[user]);

    const handleDelete = _id =>{
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
  
            fetch(`https://assignment-11-server-nahid2002s.vercel.app/toy/${_id}`, {
              method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
              if(data.deletedCount > 0){
                 Swal.fire(
              'Deleted!',
              'Your toy has been deleted.',
              'success'
            )
            const remaining = mytoys.filter(mytoy => mytoy._id !== _id);
            setMytoys(remaining)
              }
            });
          }
        })
      }

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
                <button onClick={handleAscending} className='px-4 py-2 bg-indigo-500'>Price Low To High</button>
                <button onClick={handleDescending} className='px-4 py-2 bg-indigo-500'>Price High To Low</button>
            </div>
            <div className="overflow-x-auto w-full mb-2">
            <table className='table w-full'>
            <thead>
      <tr>
        <th>Seller Name</th>
        <th>Toy Name</th>
        <th>Sub Catagory</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
           {
                mytoys.map(mytoy => <MySingleToy key={mytoy._id} mytoy={mytoy} handleDelete={handleDelete}></MySingleToy>)
            }
    </tbody>
    </table>
    </div>
        </div>
    );
};

export default MyToy;