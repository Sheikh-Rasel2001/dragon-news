import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const data = useLoaderData();
    const { id } = useParams();
    // console.log('category news ', data);

    if (!data) {
        return <p>Loading...</p>;
    }

    let categoryNews = [];

    if (id == '0') {
        categoryNews = data;
    }
    else if (id == '1') {
        categoryNews = data.filter(news => news.others?.is_today_pick === true);
    }
    else {
        categoryNews = data.filter(news => news.category_id === Number(id));
    }

    return (
        <div>
            <h2 className='text-lg text-[#001931] font-bold mb-5'>Dragon News</h2>
            <div>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;