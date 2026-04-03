import React from 'react';
import { FaEye, FaRegBookmark, FaStar } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
    const { id, title, rating, total_view, author, details } = news;
    return (
        <div className='mb-4 border rounded-lg overflow-hidden shadow-md border-gray-200'>
            <div className='px-4 py-2 bg-primary flex justify-between items-center mb-4'>
                {/* author */}
                <div className='flex items-center gap-2'>
                    <img src={author.img} alt={author.name} className='w-10 h-10 rounded-full' />
                    <div>
                        <h4 className='font-bold text-[#001931]'>{author.name}</h4>
                        <p className='text-sm font-semibold'>{author?.published_date ? new Date(author.published_date).toLocaleDateString() : "No Date"}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <FaRegBookmark className='cursor-pointer' />
                    <IoShareSocialOutline className='cursor-pointer' />
                </div>

            </div>
            <div>
                <h3 className='text-lg text-[#001931] font-bold mb-3 px-3'>{title}</h3>
                <img src={news.thumbnail_url} alt={title} className='w-full h-auto' />
            </div>
            <div className='px-3 py-4 mb-4 border-b border-gray-200'>
                <p className='text-accent mt-3 px-3 '>{details.length > 200 ? details.slice(0, 200) + '...' : details}
                    <Link to={`/newsDetails/${id}`} className='text-[#F75B5F] hover:underline cursor-pointer'>Read More</Link>
                </p>
            </div>

            <div className='my-6 flex justify-between items-center px-6'>
                <div className=' flex items-center gap-2'>
                    <div className='flex items-center gap-2 text-orange-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <span className='text-sm text-accent font-semibold'>{rating?.number || 0}/5</span>
                </div>
                <div className='flex items-center gap-1'>
                    <FaEye />
                    <span className='text-sm text-accent font-semibold'>{total_view || 0} views</span>
                </div>

            </div>

        </div>
    );
};

export default NewsCard;