import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    // console.log('news details', news);
    const {title, image_url, details, category_id} = news;
    return (
        <div className='space-y-6'>
            <img src={image_url} alt={title} className='w-full'/>
            <h2 className='text-2xl font-bold text-[#001931]'>{title}</h2>
            <p className='text-xl text-accent text-justify'>{details}</p>
            <Link to={`/category/${category_id}`} className='flex items-center gap-2 text-blue-500 hover:text-blue-700'>
                <FaArrowLeft />
                All news in this category
            </Link>
        </div>
    );
};

export default NewsDetailsCard;