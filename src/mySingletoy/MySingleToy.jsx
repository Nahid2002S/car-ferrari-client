import React from 'react';
import { Link } from 'react-router-dom';

const MySingleToy = ({mytoy, handleDelete}) => {
    const {_id, sellerName, name, catagory, price, quantity, details} = mytoy;

    return (
        <div>
          <div className="overflow-x-auto w-full mb-2">
          <table className="table w-full">
          <thead>
      <tr>
        <th>Seller Name</th>
        <th>Toy Name</th>
        <th>Catagory</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Details</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{sellerName}</div>
            </div>
          </div>
        </td>
        <td>
          {name}
          <br/>
        </td>
        <td>{catagory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{details}</td>
        <th>
          <div className='flex flex-col gap-2'>
          <Link to={`/toy/${_id}`}><button className="px-4 py-2 w-[8rem] bg-indigo-500 rounded-md">View details</button></Link>
          <Link to={`update/${_id}`}><button className="px-4 py-2 w-[8rem] bg-indigo-500 rounded-md">Update</button></Link>
          <Link><button onClick={()=> handleDelete(_id)} className="px-4 py-2  w-[8rem] bg-indigo-500 rounded-md">Delete</button></Link>
          </div>
        </th>
      </tr>
      </tbody>
      </table>
      </div>
</div>
    );
};

export default MySingleToy;