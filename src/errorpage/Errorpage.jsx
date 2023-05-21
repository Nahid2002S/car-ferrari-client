import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-[100vh]'>
        <div id="error-page">
            <div>
                <img src='https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=740&t=st=1684625580~exp=1684626180~hmac=c2cc34a823eeafdfc9b6709db19fd7f315a1bc3eca584a3fd720b2b9e24ef680' className='w-96 lg:w-[100vh] lg:-mt-16'></img>
            </div>
      <Link to="/">
      <button className="cursor-pointer px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-pink-500 to-indigo-600 border-0 flex justify-center mx-auto">Back To Homepage</button>
      </Link>
       </div>
    </div>
        </div>
    );
};

export default Errorpage;