import React from 'react';
import Sponsored from '../components/Sponsored';
import ContactUs from '../components/ContactUs';
import FAQSection from '../components/FAQSection';

const Connect = () => {
    return (
        <div className='space-y-10 md:space-y-14'>
            <title>Connect Pages || EasySub</title>
            <Sponsored />
            <FAQSection />
            <ContactUs />
        </div>
    );
};

export default Connect;
