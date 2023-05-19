import React from 'react';

const SingleToy = ({toy}) => {
    const {sellerName, name, catagory, price, quantity, details} = toy;
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
          <button className="px-4 py-2 bg-indigo-500 rounded-md">View details</button>
        </th>
      </tr>
      </tbody>
  </table>
</div>
        </div>
    );
};

export default SingleToy;