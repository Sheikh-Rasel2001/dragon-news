import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside/RightAside';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Root = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <Navbar></Navbar>
            </header>
            <button onClick={() => setIsOpen(true)}
                className='lg:hidden text-lg font-bold'
                >
               <FaBars />
            </button>
            <main className='grid grid-cols-1 lg:grid-cols-12 mt-6 gap-4'>
                <aside className={`
                    fixed top-0 left-0 h-full w-64 bg-white z-50 p-4
                    transform transition-transform duration-300
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:static md:translate-x-0 md:col-span-3`}>
                        <div className='flex justify-end mb-4 lg:hidden'>
                            <button onClick={() => setIsOpen(false)} className='text-xl font-bold'>
                                <IoClose />
                            </button>
                        </div>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-1 lg:col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Root;