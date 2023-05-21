import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../authprovider/AuthProvider';

const SingleToy = ({toy}) => {
  const {user} = useContext(AuthContext)
    const {sellerName, name, catagory, price, quantity, _id} = toy;
    const notify = () =>  !user && toast("You have to log in first to view details!");

    return (
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
        <th>
          <Link to={`/toy/${_id}`}><button onClick={notify} className="px-4 py-2 bg-indigo-500 rounded-md">View details</button></Link>
        </th>
      </tr>
    );
};

export default SingleToy;