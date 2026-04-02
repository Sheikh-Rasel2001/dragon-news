import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png';
import AuthContext from '../provider/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
        .then(() => {
            toast('User Logout Successfully');
        })
        .catch(error => {
            toast.error(error.message);
        })
    }

    return (
        <div className='flex  justify-between items-center'>
            <div>{user?.displayName}</div>
            <div className='flex gap-2 lg:gap-5 font-semibold text-lg text-accent nav'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                {
                    user?.photoURL ? <img className='lg:w-8 lg:h-8 w-6 h-6 rounded-full' src={user?.photoURL} alt="User" /> : <img className='lg:w-8 lg:h-8 w-6 h-6 rounded-full' src={userImg} alt="User" />
                }
                {
                    user ? <button onClick={handleLogout} className='bg-base-300 lg:px-6 lg:py-2 px-4 py-1 rounded-sm text-white'>Logout</button> :
                        <Link className='bg-base-300 lg:px-6 lg:py-2 px-4 py-1 rounded-sm text-white' to="/auth/login">
                            Login
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;