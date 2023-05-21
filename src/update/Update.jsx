import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../hook/UseTitle';

const Update = () => {

    const selectedUpdateToy = useLoaderData();
    const {_id, name, price, quantity, details} = selectedUpdateToy;

    const handleUpdateToys = event =>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const UpdatedToy = {price, quantity, details};

        fetch(`https://assignment-11-server-nahid2002s.vercel.app/toy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(UpdatedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        });
    }

    useTitle('Update');

    return (
        <div className='lg:px-48 mb-4'>
            <h1 className='text-3xl font-extrabold text-center my-4'>Update Toy</h1>
            <form onSubmit={handleUpdateToys} className='bg-gradient-to-r from-indigo-600 to-sky-950 py-12 rounded-md'>
                <h3 className='text-2xl font-bold text-center mb-4 text-sky-200'>Product Name: {name}</h3>
                <div className='flex justify-center gap-16'>
                <div className='w-[40%]'>
                <label htmlFor="">
                        Price: <br />
                        <input type="text" name='price' className='w-[100%] px-4 py-2 rounded-md mb-2' required defaultValue={price} />
                </label> <br />
                <label htmlFor="">
                        Available Quantity: <br />
                        <input type="text" name='quantity' className='w-[100%] px-4 py-2 rounded-md mb-2' required defaultValue={quantity} />
                </label> <br />
                <label htmlFor="">
                        Detail Description: <br />
                        <input type="text" name='details' className='w-[100%] px-4 py-2 rounded-md mb-2' required defaultValue={details} />
                </label>
                </div>
                </div>
                <div className='px-16 mt-2 flex justify-center'>
                    <button className='px-4 py-2 bg-indigo-500 w-[30%] rounded-md'>Update Toy</button>
                </div>
            </form>
        </div>
    );
};

export default Update;