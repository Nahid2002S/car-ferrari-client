import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../authprovider/AuthProvider';
import {Helmet} from "react-helmet";
import useTitle from '../hook/UseTitle';

const AddToys = () => {

    const {user} = useContext(AuthContext);
    const [catagory,setCatagory] = useState("Car");

    const handleAddToys = event =>{
        event.preventDefault();
        const form = event.target;
        const picture = form.picture.value;
        const name = form.name.value;
        const sellerName = form.sellername.value;
        const sellerEmail = form.selleremail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const newToy = {picture, name, sellerName, sellerEmail, catagory, price, rating, quantity, details};

        fetch('https://assignment-11-server-nahid2002s.vercel.app/toy', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        });
    }

    const handleCatagory = event =>{
            setCatagory(event.target.value);
     }

     useTitle('Add Toys');

    return (
        <div className='px-48 mt-4'>
            <h1 className='text-4xl font-extrabold text-center mb-6'>Add A Toys</h1>
            <form onSubmit={handleAddToys} className='bg-gradient-to-r from-indigo-600 to-sky-950 text-white py-12 rounded-md'>
                <div className='flex justify-center gap-16'>
                <div className='w-[40%]'>
                    <label>
                        Picture Url: <br />
                        <input type="url" name='picture' className='w-[100%] text-black px-4 py-2 rounded-md mb-2' />
                    </label> <br />
                    <label htmlFor="">
                        Toy Name: <br />
                        <input type="text" name='name' className='w-[100%] text-black px-4 py-2 rounded-md mb-2' />
                    </label> <br />
                    <label htmlFor="">
                        Seller Name: <br />
                        <input defaultValue={user?.displayName} type="text" name='sellername' className='w-[100%] text-black px-4 py-2 rounded-md mb-2' />
                    </label> <br />
                    <label htmlFor="">
                        Seller Email: <br />
                        <input defaultValue={user?.email} type="text" name='selleremail' className='w-[100%] text-black px-4 py-2 rounded-md mb-2' />
                    </label> <br />
                    <label htmlFor="">
                        Sub Catagory: <br />
                        <select onClick={handleCatagory} className="select text-black w-full max-w-xs">
                         <option>Car</option>
                         <option>Truck</option>
                         <option>Bus</option>
                     </select>
                    </label>
                </div>
                <div className='w-[40%]'>
                <label htmlFor="">
                        Price: <br />
                        <input type="text" name='price' className='w-[100%] text-black px-4 py-2 rounded-md mb-2' />
                </label> <br />
                <label htmlFor="">
                        Rating: <br />
                        <input type="text" name='rating' className='w-[100%] text-black px-4 py-2 rounded-md mb-2' />
                </label> <br />
                <label htmlFor="">
                        Available Quantity: <br />
                        <input type="text" name='quantity' className='w-[100%] text-black px-4 py-2 rounded-md mb-2' />
                </label> <br />
                <label htmlFor="">
                        Detail Description: <br />
                        <input type="text" name='details' className='w-[100%] text-black px-4 py-2 rounded-md mb-2' />
                </label>
                </div>
                </div>
                <div className='px-16 mt-2'>
                    <button className='px-4 py-2 bg-indigo-500 w-full rounded-md'>Add Toy</button>
                </div>
            </form>
        </div>
    );
};

export default AddToys;