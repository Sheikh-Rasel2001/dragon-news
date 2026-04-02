import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-primary'>
           <header className='w-11/12 mx-auto py-6'>
            <Navbar></Navbar>
           </header>
           <main>
            <Outlet></Outlet>
           </main>
        </div>
    );
};

export default AuthLayout;