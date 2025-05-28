import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { BiMoon, BiSun } from "react-icons/bi";
import useCategory from "../../Hooks/useCategory";
import useTheme from "../../Hooks/useTheme";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const menuRef = useRef(null);
  const [dropdown, setDropdown] = useState(false);
  const [theme, toggleTheme] = useTheme();
  // console.log(open)

  const categoryes = useCategory();

  const categories = [
    "Clothing",
    "Electronics",
    "Sports",
    "Kitchen",
    "Beauty",
    "Toys",
    "Kitchen",
  ];
  const location = useLocation();
  const path = location.pathname.split("/")[1]; // e.g. '/fashion' → 'fashion'
  // console.log(path)

  // Check if current path is a category
  const isCategoryActive = categories.includes(path);
  const currentCategory = isCategoryActive
    ? path.charAt(0).toUpperCase() + path.slice(1)
    : "";

  const handleCategoryChange = () => {
    setOpen(false);
    setDropdown(false); // Close the dropdown after selection
  };

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  const handleProfileToggle = () => {
    setOpenProfile((prev) => !prev);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logged Out");
        console.log("Logged out");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => {
            setOpen(false);
          }}
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 text-base lg:px-3 lg:py-1.5 py-1 xl:px-5"
              : "text-white text-base lg:px-3 lg:py-1.5 py-1 xl:px-5"
          }
        >
          <h2 className="flex justify-between items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-black bg-opacity-40 shadow-md lg:shadow-none lg:py-0 py-1 ">
            <span>Home </span>
            {/* <span> <IoIosArrowDown /></span> */}
          </h2>
        </NavLink>
      </li>
      <li className="lg:my-0 my-1">
        <NavLink
          to="/product"
          onClick={() => {
            setOpen(false);
          }}
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 text-base lg:px-3 lg:py-1.5 py-1 xl:px-5"
              : "text-white text-base lg:px-3 lg:py-1.5 py-1 xl:px-5"
          }
        >
          <h2 className="flex justify-between items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-black bg-opacity-40 shadow-md lg:shadow-none lg:py-0 py-1 ">
            <span>Shop </span>
            {/* <span> <IoIosArrowDown /></span> */}
          </h2>
        </NavLink>
      </li>

      <li className="lg:my-0 my-1">
        <NavLink
          to="/cart"
          onClick={() => {
            setOpen(false);
          }}
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 text-base lg:px-3 px- xl:px-5 lg:py-1.5 py-1 "
              : "text-white text-base lg:px-3 lg:py-1.5 py-1  xl:px-5"
          }
        >
          <h2 className="flex justify-between items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-black bg-opacity-40 shadow-md lg:shadow-none lg:py-0 py-1 ">
            <span>Cart </span>
            {/* <span> <IoIosArrowDown /></span> */}
          </h2>
        </NavLink>
      </li>
      {/* <li>
            <NavLink to='/wishlist' className={({ isActive }) => isActive ? 'text-orange-400 text-base lg:px-3 px-2 xl:px-5' : 'text-white text-base lg:px-3 px-2 xl:px-5'}>Wishlist</NavLink>
        </li> */}
      <li
        className="relative cursor-pointer lg:my-0 my-1"
        onMouseEnter={() => {
          if (window.innerWidth >= 1024) setDropdown(true); // lg breakpoint
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 1024) setDropdown(false);
        }}
      >
        <div
          onClick={() => setDropdown((prev) => !prev)}
          className={`group select-none ${
            isCategoryActive
              ? "text-orange-400 text-base lg:px-3 xl:px-5 lg:py-1.5"
              : "text-white text-base lg:px-3 xl:px-5 lg:py-1.5"
          }`}
        >
          <h2 className="group flex justify-between items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-black bg-opacity-40 shadow-md lg:shadow-none lg:py-0 py-1">
            <span>{currentCategory || "Categories"}</span>

            {/* Icon hidden by default and shown on lg:hover */}
            <span className="lg:hidden lg:group-hover:inline">
              <IoIosArrowDown />
            </span>
          </h2>
        </div>

        {dropdown && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:absolute bg-black backdrop-blur-[30px] bg-opacity-40 text-white mt-0 lg:mt-9 lg:-left-[28px] p-2 w-full lg:w-[140px] rounded rounded-t-none shadow-lg lg:shadow-none lg:z-40"
          >
            {categoryes.map((category) => (
              <li key={category}>
                <NavLink
                  to={`/orders/${category.toLowerCase()}`}
                  onClick={() => handleCategoryChange(category)}
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 hover:bg-white hover:text-black text-orange-400"
                      : "block px-4 py-2 hover:bg-white hover:text-black"
                  }
                >
                  {category}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </li>

      <li className="lg:my-0 my-1">
        <NavLink
          to="/orders"
          onClick={() => {
            setOpen(false);
          }}
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 text-base lg:px-3 lg:py-1.5 py-1 xl:px-5"
              : "text-white text-base lg:px-3 lg:py-1.5 py-1 xl:px-5"
          }
        >
          <h2 className="flex justify-between items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-black bg-opacity-40 lg:shadow-none shadow-md lg:py-0 py-1 ">
            <span>Orders </span>
            {/* <span> <IoIosArrowDown /></span> */}
          </h2>
        </NavLink>
      </li>

      {user ? (
        <>
          <li
            className="bottom-20 right-0 w-full lg:w-auto text-center pr-2 bg-black bg-opacity-40 shadow-md
                                    fixed lg:my-0 my-1 lg:bg-transparent lg:shadow-none lg:block"
          >
            <button
              onClick={handleLogout}
              className="text-white  text-base lg:px-3 lg:py-1.5 py-1 xl:px-5 w-full"
            >
              <h2 className="flex justify-center items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-opacity-40 shadow-md lg:shadow-none lg:py-0 py-1 w-full">
                <span>Logout</span>
              </h2>
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="lg:my-0 my-1">
            <NavLink
              to="/login"
              onClick={() => {
                setOpen(false);
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 text-base lg:px-3 lg:py-1.5 py-1 xl:px-5"
                  : "text-white text-base lg:px-3 lg:py-1.5 py-1 xl:px-5"
              }
            >
              <h2 className="flex justify-between items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-black bg-opacity-40 lg:shadow-none shadow-md lg:py-0 py-1 ">
                <span>Login </span>
                {/* <span> <IoIosArrowDown /></span> */}
              </h2>
            </NavLink>
          </li>
          <li className="lg:my-0 my-1 lg:hidden ">
            <NavLink
              to="/register"
              onClick={() => {
                setOpen(false);
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 text-base lg:px-3 lg:py-1.5 py-1 xl:px-5"
                  : "text-white text-base lg:px-3 lg:py-1.5 py-1 xl:px-5"
              }
            >
              <h2 className="flex justify-between items-center gap-1 pl-2 lg:pl-0 lg:bg-transparent bg-black bg-opacity-40 lg:shadow-none shadow-md lg:py-0 py-1 ">
                <span>Register </span>
                {/* <span> <IoIosArrowDown /></span> */}
              </h2>
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div
      ref={menuRef}
      className="navbar bg-black shadow-sm fixed z-30 bg-opacity-40 text-white max-w-screen- backdrop-blur-[6px]"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            onClick={handleToggle}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            {open ? (
              <AiOutlineClose className="h-4 w-4" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            )}
          </div>
          <ul
            className={
              open
                ? "bg-black/40  shadow-sm backdrop-blur-[30px]  h-screen mt-3 w-56 p-2 z-40 fixed left-0 lg:hidden xl:hidden text-white"
                : "hidden -left-80 text-white "
            }
          >
            {navLink}
          </ul>

          {/* <ul
                        className={open ? 'bg-black shadow-sm backdrop-blur-[30px] rounded-lg rounded-l-none h-screen opacity-40 mt-3 w-56 p-2 z-40 fixed left-0 ' : 'hidden -left-80 text-white'}>
                        {navLink}
                    </ul> */}
        </div>
        <NavLink to="/" className="btn btn-ghost px-4 py-6">
          <div className="flex flex-col items-center w-fit text-center">
            <span className="lg:text-xl text-base text-orange-400 uppercase">
              Britto Shop
            </span>
            <span className="font-normal text-white uppercase lg:text-[12px] text-[10px] tracking-widest">
              E C O M M E R C E
            </span>
          </div>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end ">
        <ul className="menu menu-horizontal lg:px-1 px-0 hidden lg:flex  ">
          {navLink}
        </ul>
        <div
          onClick={handleProfileToggle}
          className=" ml-2 mr-2 cursor-pointer flex"
        >
          {/* Profile Button */}
          <button>
            <img
              className="rounded-full   p-1 w-12 h-12"
              src={user?.photoURL || "/shopping.png"}
              alt="Profile"
            />
          </button>

          {/* Dropdown Panel */}
          {openProfile && (
            <div className="absolute right-0 top-[60px] mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
              <div className="flex flex-col items-center p-4">
                <img
                  className="w-20 h-20 rounded-full border-2 border-pink-400"
                  src={user?.photoURL || "/shopping.png"}
                  alt="User"
                />
                <h3 className="mt-3 font-semibold text-gray-800">
                  {user?.displayName || "Guest User"}
                </h3>
                <p className="text-sm text-gray-600">
                  {user?.email || "guest@example.com"}
                </p>
              </div>

              <div className="border-t">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full text-center text-red-600 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                ) : (
                  <div className="flex flex-col p-2">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        `py-2 px-4 rounded text-center ${
                          isActive ? "text-orange-400" : "text-gray-800"
                        } hover:bg-gray-100`
                      }
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        `py-2 px-4 rounded text-center ${
                          isActive ? "text-orange-400" : "text-gray-800"
                        } hover:bg-gray-100`
                      }
                    >
                      Register
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={toggleTheme}
            className="text-3xl flex items-center pl-2 pr-1 text-white  dark:text-"
          >
            {theme === 'dark' ? <BiSun /> : <BiMoon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
