import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Subscription from './Subscription';
import Button from '../Button';

const Subscriptions = () => {
    const data = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showAll, setShowAll] = useState(false);

    // Unique categories
    const categories = [...new Set(data.map(item => item.tech_category))];

    // Filter by category
    const handleCategoryClick = (category) => {
        setSelectedCategory(prev => prev === category ? null : category);
        setShowAll(false); // Reset when switching category
    };

    const filteredData = selectedCategory
        ? data.filter(item => item.tech_category === selectedCategory)
        : data;

    const visibleData = showAll ? filteredData : filteredData.slice(0, 6);

    return (
        <div className='max-w-7xl mx-auto md:px-4'>
            {/* Category filter buttons */}
            <div className='flex justify-center flex-wrap gap-2 mb-6'>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategoryClick(category)}
                        className={`px-4 py-2 rounded-full transition-all text-sm
                            ${selectedCategory === category
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-indigo-600 hover:text-white'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Subscription cards */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {visibleData.map(packages => (
                    <Subscription key={packages.id} packages={packages} />
                ))}
            </div>

            {/* Toggle Button Always Visible */}
            {filteredData.length > 6 && (
                <div className='flex justify-center mt-6'>
                    <Button
                        onClick={() => {
                            setShowAll(prev => !prev)
                            showAll && window.scrollTo(0, 580)
                        }}
                        className='rounded-4xl py-2 px-6 cursor-pointer'
                    >
                        {showAll ? 'Show Less' : 'Show All'}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Subscriptions;
