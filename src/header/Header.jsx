import React, { useContext } from 'react';
import Banner from '../banner/Banner';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authprovider/AuthProvider';
import logo from '../assets/logo.png'

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user)
  const handleLogOut = () => {
    logOut()
        .then()
        .catch(error => console.log(error));
}
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content text-pink-500 font-bold mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/alltoys'>All Toys</Link></li>
      <li><Link to='/mytoys'>My Toys</Link></li>
      <li><Link to='/addtoys'>Add A Toy</Link></li>
      <li><Link to='/blogs'>Blogs</Link></li>
      </ul>
    </div>
    <div className='flex items-center'>
      <img src={logo} className='w-[4rem]' alt="" />
    <a className="btn btn-ghost normal-case text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-fuchsia-300 -ml-4">Kids Ferrari</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/alltoys'>All Toys</Link></li>
      <li><Link to='/mytoys'>My Toys</Link></li>
      <li><Link to='/addtoys'>Add A Toy</Link></li>
      <li><Link to='/blogs'>Blogs</Link></li>
      <li><Link to='register'>Register</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  {
    user ? <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2 tooltip tooltip-info tooltip-bottom" data-tip={user?.displayName}>
    <div className="w-10 rounded-full">
      <img src={user?.photoURL} />
    </div>
  </label> : ""
  }
  </div>
  {user ? <div>
    <button onClick={handleLogOut}  className='bg-indigo-500 px-4 py-2 rounded-md text-white'>Logout</button>
  </div> : <div>
    <Link to='/login'><button className='bg-indigo-500 px-4 py-2 rounded-md text-white'>Login</button></Link>
  </div>}
</div>
</div>
    );
};

export default Header;