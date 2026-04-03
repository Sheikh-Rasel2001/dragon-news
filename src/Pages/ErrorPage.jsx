import React from 'react';
import errorImg from '../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center gap-4'>
            <div>
                <img src={errorImg} alt="Error 404" />
                <div className='text-center mt-5'>
                    <h2 className='text-3xl font-bold text-[#001931]'>Page Not Found</h2>
                    <p className='text-sm text-gray-500 mb-5'>The page you are looking for does not exist.</p>
                </div>
                <div className='text-center'>
                    <Link to="/" className='mt-4 px-4 py-2 bg-secondary text-white rounded'>Go Back Home</Link>
                </div>
            </div>
            
        </div>
    );
};

export default ErrorPage;