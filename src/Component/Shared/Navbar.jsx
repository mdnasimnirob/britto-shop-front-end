import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null);
    const [dropdown, setDropdown] = useState(false);
    console.log(open)

    const categories = ['Fashion', 'Electronics'];
    const location = useLocation();
    const path = location.pathname.split('/')[1]; // e.g. '/fashion' → 'fashion'
    console.log(path)

    // Check if current path is a category
    const isCategoryActive = categories.includes(path);
    const currentCategory = isCategoryActive
        ? path.charAt(0).toUpperCase() + path.slice(1)
        : '';

    const handleCategoryChange = (category) => {
        setDropdown(false); // Close the dropdown after selection
    };

    const handleToggle = () => {
        setOpen((prev) => !prev)
    }

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert('Logged Out')
                console.log("Logged out")
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const navLink = (<>


        <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-400 text-base lg:px-3 lg:py-1.5 py-1 xl:px-5' : 'text-white text-base lg:px-3 lg:py-1.5 py-1 xl:px-5'}>

                <h2
                    className='flex justify-between items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-black bg-opacity-40 shadow-md lg:shadow-none lg:py-0 py-1 '>
                    <span>Home </span>
                    {/* <span> <IoIosArrowDown /></span> */}
                </h2>
            </NavLink>
        </li>
        <li className='lg:my-0 my-1'>
            <NavLink to='/product' className={({ isActive }) => isActive ? 'text-orange-400 text-base lg:px-3 lg:py-1.5 py-1 xl:px-5' : 'text-white text-base lg:px-3 lg:py-1.5 py-1 xl:px-5'}>

                <h2
                    className='flex justify-between items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-black bg-opacity-40 shadow-md lg:shadow-none lg:py-0 py-1 '>
                    <span>Shop </span>
                    {/* <span> <IoIosArrowDown /></span> */}
                </h2>
            </NavLink>
        </li>


        <li className='lg:my-0 my-1'>
            <NavLink to='/cart' className={({ isActive }) => isActive ? 'text-orange-400 text-base lg:px-3 px- xl:px-5 lg:py-1.5 py-1 ' : 'text-white text-base lg:px-3 lg:py-1.5 py-1  xl:px-5'}>

                <h2
                    className='flex justify-between items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-black bg-opacity-40 shadow-md lg:shadow-none lg:py-0 py-1 '>
                    <span>Cart </span>
                    {/* <span> <IoIosArrowDown /></span> */}
                </h2>
            </NavLink>
        </li>
        {/* <li>
            <NavLink to='/wishlist' className={({ isActive }) => isActive ? 'text-orange-400 text-base lg:px-3 px-2 xl:px-5' : 'text-white text-base lg:px-3 px-2 xl:px-5'}>Wishlist</NavLink>
        </li> */}
        <li className="relative cursor-pointer lg:my-0 my-1" onMouseEnter={() => {
            if (window.innerWidth >= 1024) setDropdown(true); // lg breakpoint
        }}
            onMouseLeave={() => {
                if (window.innerWidth >= 1024) setDropdown(false);
            }}>

            <h1
                onClick={() => setDropdown((prev) => !prev)}
                className={`select-none ${isCategoryActive ? 'text-orange-400 text-base lg:px-3 px- xl:px-5 lg:py-1.5 py-' : 'text-white text-base lg:px-3 px- lg:py-1.5 py- xl:px-5'}`}
            >
                <h2
                    className='flex justify-between items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-black bg-opacity-40 shadow-md lg:shadow-none lg:py-0 py-1 '>
                    <span>{currentCategory || 'Categories'} </span>
                    <span className='lg:hidden'> <IoIosArrowDown /></span>
                </h2>

            </h1>



            {dropdown && (
                <ul className="lg:absolute bg-black backdrop-blur-[30px] bg-opacity-40 text-white mt-0 lg:mt-9 lg:-left-4 p-2 w-full lg:w-[140px] rounded rounded-t-none shadow-lg lg:shadow-none lg:z-50">
                    {/* Render dynamic category links */}
                    {categories.map((category) => (
                        <li key={category}>
                            <NavLink
                                to={`/${category}`}
                                onClick={() => handleCategoryChange(category)}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'block px-4 py-2 hover:bg-white hover:text-black text-orange-400'
                                        : 'block px-4 py-2 hover:bg-white hover:text-black'
                                }

                            >
                                {category}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </li>


        <li className='lg:my-0 my-1'>
            <NavLink to='/orders' className={({ isActive }) => isActive ? 'text-orange-400 text-base lg:px-3 lg:py-1.5 py-1 xl:px-5' : 'text-white text-base lg:px-3 lg:py-1.5 py-1 xl:px-5'}>

                <h2
                    className='flex justify-between items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-black bg-opacity-40 lg:shadow-none shadow-md lg:py-0 py-1 '>
                    <span>Orders </span>
                    {/* <span> <IoIosArrowDown /></span> */}
                </h2>
            </NavLink>
        </li>

        {
            user ? (
                <>
                    <li className="bottom-16 right-0 w-full lg:w-auto text-center pr-2 bg-black bg-opacity-40 shadow-md
                                   fixed lg:static lg:my-0 my-1 lg:bg-transparent lg:shadow-none lg:block">
                        <button
                            onClick={handleLogout}
                            className="text-white text-base lg:px-3 lg:py-1.5 py-1 xl:px-5 w-full"
                        >
                            <h2 className="flex justify-center items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-opacity-40 shadow-md lg:shadow-none lg:py-0 py-1 w-full">
                                <span>Logout</span>
                            </h2>
                        </button>
                    </li>

                </>
            ) : (
                <>

                    <li className='lg:my-0 my-1'>
                        <NavLink to='/login' className={({ isActive }) => isActive ? 'text-orange-400 text-base lg:px-3 lg:py-1.5 py-1 xl:px-5' : 'text-white text-base lg:px-3 lg:py-1.5 py-1 xl:px-5'}>

                            <h2
                                className='flex justify-between items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-black bg-opacity-40 lg:shadow-none shadow-md lg:py-0 py-1 '>
                                <span>Login </span>
                                {/* <span> <IoIosArrowDown /></span> */}
                            </h2>
                        </NavLink>
                    </li>
                    <li className='lg:my-0 my-1 lg:hidden'>
                        <NavLink to='/register' className={({ isActive }) => isActive ? 'text-orange-400 text-base lg:px-3 lg:py-1.5 py-1 xl:px-5' : 'text-white text-base lg:px-3 lg:py-1.5 py-1 xl:px-5'}>

                            <h2
                                className='flex justify-between items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-black bg-opacity-40 lg:shadow-none shadow-md lg:py-0 py-1 '>
                                <span>Register </span>
                                {/* <span> <IoIosArrowDown /></span> */}
                            </h2>
                        </NavLink>
                    </li>

                </>
            )
        }


    </>)
    return (
        <div ref={menuRef} className="navbar bg-black shadow-sm fixed z-30 bg-opacity-40 text-white max-w-screen-xl backdrop-blur-[8px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div onClick={handleToggle} role="button" className="btn btn-ghost lg:hidden">
                        {
                            open ? <AiOutlineClose className="h-4 w-4" /> : <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        }
                    </div>
                    <ul
                        className={open
                            ? 'bg-black/40  shadow-sm backdrop-blur-[30px]  h-screen mt-3 w-56 p-2 z-40 fixed left-0 lg:hidden xl:hidden text-white'
                            : 'hidden -left-80 text-white '}>
                        {navLink}
                    </ul>



                    {/* <ul
                        className={open ? 'bg-black shadow-sm backdrop-blur-[30px] rounded-lg rounded-l-none h-screen opacity-40 mt-3 w-56 p-2 z-40 fixed left-0 ' : 'hidden -left-80 text-white'}>
                        {navLink}
                    </ul> */}
                </div>
                <NavLink
                    to="/"
                    className="btn btn-ghost px-4 py-6"
                >
                    <div className="flex flex-col items-center w-fit text-center">
                        <span className="lg:text-xl text-base text-orange-400 uppercase">Britto Shop</span>
                        <span className="font-normal text-white uppercase lg:text-[12px] text-[10px] tracking-widest">
                            E C O M M E R C E
                        </span>
                    </div>
                </NavLink>

            </div>
            <div className="navbar-center hidden lg:flex">

            </div>
            <div className="navbar-end ">
                <ul className="menu menu-horizontal lg:px-1 px-0 hidden lg:flex  ">
                    {navLink}
                </ul>
                <div className='gap-4 ml-2 mr-2 flex'>
                    <button className=''><img className='rounded-full border border-r-pink-400 border-l-pink-400 border-b-sky-400 border-t-0 border-b-0 p-0.4  w-12 h-12  ' src={user ? user?.photoURL : '/public/shopping.png'} alt="" /></button>
                </div>
            </div>
        </div>

    );
};

export default Navbar;