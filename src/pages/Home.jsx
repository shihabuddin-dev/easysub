import React from 'react';
import Subscriptions from '../components/subscription/Subscriptions';
import WhyChooseUs from '../components/WhyChooseUs';
import LatestBlogs from '../components/LatestBlogs';
import StatsSection from '../components/StatsSection';
import HeaderSlider from '../components/HeaderSlider';
import Testimonials from '../components/Testimonials';
const Home = () => {
    return (
        <div className='space-y-10 md:space-y-14'>
            <HeaderSlider />
            <h1 className="text-3xl md:text-4xl font-semibold text-center text-indigo-700 mb-6">Explore Subscriptions</h1>
            <Subscriptions />
            <WhyChooseUs />
            <StatsSection />
            <LatestBlogs />
            <Testimonials/>
        </div>
    );
};

export default Home;