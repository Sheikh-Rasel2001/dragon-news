import React, { use } from 'react';
import { default as Marquee } from 'react-fast-marquee';

const newsPromise = fetch('/news.json').then(res => res.json())

const LatestNews = () => {
    const allNews = use(newsPromise);
    const latestNews = allNews.slice(0, 10);
    return (
        <div className='flex items-center bg-primary px-3 py-2 gap-3 rounded-lg'>
            <p className='bg-secondary px-6 py-2 text-white font-semibold rounded-lg'>Latest</p>
            <Marquee.default pauseOnHover={true} className='flex gap-3 font-bold'>
                {
                    latestNews.map(news => <p key={news.id} className='font-bold ml-4'>{news.title}</p>)
                }
            </Marquee.default>
        </div>
    );
};

export default LatestNews;