import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='flex gap-5 font-semibold text-lg text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                <img className='w-8 h-8' src={user} alt="User" />
                <button className='bg-base-300 px-6 py-2 rounded-sm text-white'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;