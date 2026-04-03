import React from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();
    
    const news = data.find(singleNews => singleNews.id == id);

    if(!news) {
        return <p>loading...</p>
    }

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6'>
                <section className='lg:col-span-9'>
                    <h2 className='mt-10 text-xl font-bold text-[#001931] mb-6'>News Details Page</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-1 lg:col-span-3 lg:sticky lg:top-2 lg:h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;