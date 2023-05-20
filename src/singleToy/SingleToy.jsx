import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../authprovider/AuthProvider';

const SingleToy = ({toy}) => {
  const {user} = useContext(AuthContext)
    const {sellerName, name, catagory, price, quantity, details, _id} = toy;
    const notify = () =>  !user && toast("You have to log in first to view details!");

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
        <th>View More</th>
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
          <Link to={`/details/${_id}`}><button onClick={notify} className="px-4 py-2 bg-indigo-500 rounded-md">View details</button></Link>
        </th>
      </tr>
      </tbody>
  </table>
</div>
        </div>
    );
};

export default SingleToy;