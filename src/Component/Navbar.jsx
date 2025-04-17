import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLink = (<>

        <li>
            <NavLink to='/home' className={({isActive}) => isActive ? 'text-blue-600' : 'text-white'}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({isActive}) => isActive ? 'text-blue-600' : 'text-white'}>About</NavLink>
        </li>
        <li>
            <NavLink to='/order' className={({isActive}) => isActive ? 'text-blue-600' : 'text-white'}>Order</NavLink>
        </li>
        <li>
            <NavLink to='/card' className={({isActive}) => isActive ? 'text-blue-600' : 'text-white'}>Card</NavLink>
        </li>
      
    </>)
    return (
        <div className="navbar bg-base-100 shadow-sm">
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
                <a className="btn btn-ghost text-xl">Britto Boss</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </div>

    );
};

export default Navbar;