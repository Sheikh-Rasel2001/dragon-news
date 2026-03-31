import React from 'react';
import NewsCard from '../../Pages/NewsCard';

const Home = ({allNews}) => {
    return (
        <div>
            {
                allNews.map(news => <NewsCard key={news.id} news={news} />)
            }
        </div>
    );
};

export default Home;