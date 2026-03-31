import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const allNews = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(() => {
        if(!allNews) return;
        if (id == '0') {
            setCategoryNews(allNews);
        }
        else if (id == '1') {
            const filteredNews = allNews.filter(news => news.others?.is_today_pick === true);
            setCategoryNews(filteredNews);
        }
        else {
            const filteredNews = allNews.filter(news => news.category_id == id);
            setCategoryNews(filteredNews);
        }

    }, [allNews, id]);
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