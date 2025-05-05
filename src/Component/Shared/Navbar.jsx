import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { Result } from 'postcss';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => {
                alert('Logged Out')
                console.log("Logged out")
            })
            .catch(err => console.error(err));
    }
    const navLink = (<>

        <li>
            <NavLink to='/home' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-white'}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-white'}>About</NavLink>
        </li>
        <li>
            <NavLink to='/order' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-white'}>Order</NavLink>
        </li>
        <li>
            <NavLink to='/card' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-white'}>Card</NavLink>
        </li>
        {
            user ? (
                <>
                    <li>
                        <button onClick={handleLogout} className="text-white hover:text-blue-600">
                            Logout
                        </button>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <NavLink to='/login' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-white'}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to='/register' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-white'}>Register</NavLink>
                    </li>
                </>
            )
        }


    </>)
    return (
        <div className="navbar bg-black shadow-sm fixed z-40 bg-opacity-50 text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLink}
                    </ul>
                </div>
                <NavLink
                    to="/"
                    className="btn btn-ghost px-4 py-6"
                >
                    <div className="flex flex-col items-center w-fit text-center">
                        <span className="text-xl text-orange-500 uppercase">Britto Shop</span>
                        <span className="font-normal text-white uppercase text-[12px] tracking-widest">
                            E C O M M E R C E
                        </span>
                    </div>
                </NavLink>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end ">
                <div className='gap-4 flex'>
                    <button className=''><img className='rounded-full  p-0.5  w-12 h-12  ' src={user ? user?.photoURL : '/public/shopping.png'} alt="" /></button>
                </div>
            </div>
        </div>

    );
};

export default Navbar;