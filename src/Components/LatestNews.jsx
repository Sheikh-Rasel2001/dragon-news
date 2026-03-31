import React from 'react';
import { default as Marquee } from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center bg-primary px-3 py-2 gap-3 rounded-lg'>
            <p className='bg-secondary px-6 py-2 text-white font-semibold rounded-lg'>Latest</p>
            <Marquee.default pauseOnHover={true} className='flex gap-3 font-bold'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, neque!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, neque!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, neque!</p>
            </Marquee.default>
        </div>
    );
};

export default LatestNews;