import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Component/Shared/Navbar';

const Error = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='flex h-screen justify-center items-center flex-col gap-4'>
                <h1 className='text-6xl text-red-500 '>Page Not Found | 404</h1>
                <NavLink to='/'><p className='btn btn-error text-lg'>go to home</p></NavLink>
            </div>
        </>
    );
};

export default Error;