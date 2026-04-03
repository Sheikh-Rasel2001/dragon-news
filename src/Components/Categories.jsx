import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res=> res.json());

const Categories = () => {
    const categories = use(categoryPromise);
    // console.log(categories);
    return (
        <div className=''>
            <h2 className='font-bold mb-4'>All Categories ({categories.length})</h2>
            <div className='grid grid-cols-1 gap-2'>
                {
                    categories.map(category => (
                        <NavLink key={category.id} to={`/category/${category.id}`} className={'btn border-0 bg-white hover:bg-primary text-accent font-semibold'}>
                            {category.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;