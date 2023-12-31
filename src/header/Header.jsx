import React, { useContext } from 'react';
import Banner from '../banner/Banner';
import { Link, NavLink } from 'react-router-dom';
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
            <div className="navbar bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-600 to-indigo-800  text-white lg:px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content text-pink-500 font-bold mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to='/' className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-200 to-fuchsia-300' : '')}>Home</NavLink></li>
      <li><NavLink to='/alltoys' className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-200 to-fuchsia-300' : '')}>All Toys</NavLink></li>
      <li><NavLink to='/mytoys' className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-200 to-fuchsia-300' : '')}>My Toys</NavLink></li>
      <li><NavLink to='/addtoys' className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-200 to-fuchsia-300' : '')}>Add A Toy</NavLink></li>
      <li><NavLink to='/blogs' className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-200 to-fuchsia-300' : '')}>Blogs</NavLink></li>
      {
        !user ? <li><Link to='register'>Register</Link></li> : ""
      }
      </ul>
    </div>
    <div className='flex items-center'>
      <img src={logo} className='w-[4rem] -ml-4 lg:ml-0 ' alt="" />
    <a className="btn btn-ghost normal-case text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-fuchsia-300 -ml-4">Kids Ferrari</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><NavLink to='/' className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-200 to-fuchsia-300' : '')}>Home</NavLink></li>
      <li><NavLink to='/alltoys' className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-200 to-fuchsia-300' : '')}>All Toys</NavLink></li>
      <li><NavLink to='/mytoys' className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-200 to-fuchsia-300' : '')}>My Toys</NavLink></li>
      <li><NavLink to='/addtoys' className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-200 to-fuchsia-300' : '')}>Add A Toy</NavLink></li>
      <li><NavLink to='/blogs' className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-200 to-fuchsia-300' : '')}>Blogs</NavLink></li>
      {
        user ? "" : <li><NavLink to='register' className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-200 to-fuchsia-300' : '')}>Register</NavLink></li>
      }
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
    <button onClick={handleLogOut}  className='bg-gradient-to-r from-violet-200 to-fuchsia-300 px-4 py-2 rounded-md text-black font-semibold'>Logout</button>
  </div> : <div>
    <Link to='/login'><button className='bg-gradient-to-r from-violet-200 to-fuchsia-300 px-4 py-2 rounded-md text-black font-semibold'>Login</button></Link>
  </div>}
</div>
</div>
    );
};

export default Header;