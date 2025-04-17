import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex h-screen justify-center items-center flex-col gap-4'>
            <h1 className='text-6xl text-red-500 '>Page Not Found | 502</h1>
            <NavLink to='/'><p className='btn btn-info text-lg'>go to home</p></NavLink>
        </div>
    );
};

export default Error;