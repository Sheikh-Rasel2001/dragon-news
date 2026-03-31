import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <>
            <div className='flex justify-center flex-col items-center my-5'>
                <img src={logo} alt="" />
                <p className='text-accent font-semibold mt-2'>Journalism Without Fear or Favour</p>
                <p className='text-accent font-semibold'>{format(new Date(), 'EEEE, MMMM dd, yyyy')}</p>
            </div>
        </>
    );
};

export default Header;