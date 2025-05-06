import React, { useState } from "react";
import { FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaPhone, FaGlobe, FaClock, FaStore, FaStar, FaBoxOpen, FaShippingFast, FaGift } from "react-icons/fa";
import { MdLocalOffer, MdOutlineSupportAgent, MdPayment } from "react-icons/md";
import Button from '../components/Button'; 
import { Link } from "react-router";

const LocalBusinesses = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [activeTab, setActiveTab] = useState("all");

    const subscriptionPartners = [
        {
            id: 1,
            name: "Dhaka Curated Box",
            location: "Gulshan, Dhaka",
            description: "Premium subscription service delivering handpicked lifestyle products from Dhaka's best local creators. Each box contains 5-7 surprise items tailored to your preferences.",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.971453183109!2d90.41251807510725!3d23.750885678675733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c23c2a8cb%3A0x8dc9997d20739f06!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1683380245717",
            contact: "+880123456789",
            website: "https://dhakacurated.example.com",
            hours: "Mon-Fri: 9AM-6PM",
            category: "lifestyle",
            rating: 4.8,
            features: [
                "Personalized product selection",
                "Eco-friendly packaging",
                "Exclusive member discounts",
                "Flexible delivery schedules"
            ],
            subscriptionOptions: [
                { name: "Basic Box", price: "৳2500/month", items: "5 items" },
                { name: "Premium Box", price: "৳4500/month", items: "8-10 premium items" }
            ]
        },
        {
            id: 2,
            name: "Chittagong Artisan Collective",
            location: "Agrabad, Chattogram",
            description: "Monthly subscription showcasing Chattogram's finest handmade crafts. Support local artisans while receiving unique, culturally rich products every month.",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.399216115456!2d91.82362417509008!3d22.336023542223382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd88942a2314d%3A0x82e2f94a8f3f3f5e!2sAgrabad%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1683381246711",
            contact: "+880987654321",
            website: "https://chittagongartisan.example.com",
            hours: "Mon-Sat: 10AM-7PM",
            category: "artisan",
            rating: 4.9,
            features: [
                "Authentic handmade products",
                "Artisan spotlight in each box",
                "Sustainable materials",
                "Cultural heritage items"
            ],
            subscriptionOptions: [
                { name: "Craft Lover", price: "৳2000/month", items: "3-4 artisan pieces" },
                { name: "Collector's Edition", price: "৳5000/month", items: "6-8 premium crafts" }
            ]
        },
        {
            id: 3,
            name: "Sylhet Tea Club",
            location: "Zindabazar, Sylhet",
            description: "Curated tea subscription featuring exclusive blends from Sylhet's finest gardens. Discover new flavors and rare tea varieties delivered monthly.",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.086740872515!2d91.87054437510805!3d24.8916618479259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750557dcf6b7a6d%3A0xb91a93403c118ba1!2sZindabazar%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1683381324515",
            contact: "+8801122334455",
            website: "https://sylhettea.example.com",
            hours: "Sun-Thu: 8AM-8PM",
            category: "beverage",
            rating: 4.7,
            features: [
                "Single-estate premium teas",
                "Brewing guide included",
                "Seasonal special editions",
                "Member-only tea tasting events"
            ],
            subscriptionOptions: [
                { name: "Tea Explorer", price: "৳1800/month", items: "3 tea varieties" },
                { name: "Connoisseur's Selection", price: "৳3500/month", items: "5 premium teas + accessories" }
            ]
        },
        {
            id: 4,
            name: "Khulna Eco Essentials",
            location: "Khalishpur, Khulna",
            description: "Sustainable living subscription featuring eco-friendly products from Khulna region. Reduce your environmental impact with our thoughtfully curated boxes.",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14769.179075223886!2d89.53404096977541!3d22.326244600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0026e4ae74b2a9%3A0x862a3a6a1c5c2475!2sKhalishpur%2C%20Khulna!5e0!3m2!1sen!2sbd!4v1683381400000",
            contact: "+8805566778899",
            website: "https://khulnaeco.example.com",
            hours: "Sun-Wed: 9AM-5PM",
            category: "eco",
            rating: 4.6,
            features: [
                "100% biodegradable products",
                "Carbon-neutral shipping",
                "Zero-waste alternatives",
                "Educational materials included"
            ],
            subscriptionOptions: [
                { name: "Eco Starter", price: "৳1500/month", items: "4-5 essentials" },
                { name: "Green Living", price: "৳3000/month", items: "7-8 premium eco products" }
            ]
        },
        {
            id: 5,
            name: "Bogura Book Box",
            location: "Bogura Sadar",
            description: "Monthly literary subscription featuring works by Bangladeshi authors and locally published books. Includes exclusive author notes and bookish merchandise.",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14477.038062665504!2d89.3696629697754!3d24.8467633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e7e81df441%3A0x27d1b3f8b4d3b3e5!2sBogra%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1683381400000",
            contact: "+8807788990011",
            website: "https://bogurabook.example.com",
            hours: "Sat-Thu: 10AM-6PM",
            category: "literary",
            rating: 4.5,
            features: [
                "New releases + classics",
                "Author-signed copies",
                "Reading companion items",
                "Online book club access"
            ],
            subscriptionOptions: [
                { name: "Reader's Choice", price: "৳1200/month", items: "1 book + 2 accessories" },
                { name: "Bibliophile's Bundle", price: "৳2500/month", items: "2 books + premium gifts" }
            ]
        },
        {
            id: 6,
            name: "Rajshahi Silk Subscription",
            location: "Shaheb Bazar, Rajshahi",
            description: "Luxury silk subscription featuring authentic Rajshahi silk products. Receive seasonal collections of premium fabrics and silk accessories.",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14477.038062665504!2d88.5944062697754!3d24.3635683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa96a38d031%3A0x10f93a950ed6f410!2sShaheb%20Bazar%20Rd%2C%20Rajshahi!5e0!3m2!1sen!2sbd!4v1683381400000",
            contact: "+8804455667788",
            website: "https://rajshahisilk.example.com",
            hours: "Sun-Fri: 10AM-7PM",
            category: "luxury",
            rating: 4.9,
            features: [
                "Handwoven premium silk",
                "Limited edition designs",
                "Custom color options",
                "Complementary care kit"
            ],
            subscriptionOptions: [
                { name: "Silk Essentials", price: "৳3500/month", items: "2 silk items" },
                { name: "Royal Collection", price: "৳7500/month", items: "4-5 premium pieces" }
            ]
        }
    ];
    const categories = [
        { id: "all", name: "All Subscriptions" },
        { id: "lifestyle", name: "Lifestyle" },
        { id: "artisan", name: "Artisan" },
        { id: "beverage", name: "Beverage" },
        { id: "eco", name: "Eco-Friendly" },
        { id: "literary", name: "Literary" },
        { id: "luxury", name: "Luxury" }
    ];

    const filteredShops = activeTab === "all"
        ? subscriptionPartners
        : subscriptionPartners.filter(shop => shop.category === activeTab);

    const toggleDetails = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="rounded-2xl bg-gradient-to-t from-purple-700 via-indigo-700 to-indigo-600 py-12 px-4 sm:px-6 lg:px-8 mx-2 sm:mx-4 my-8 shadow-xl">
            <title>Local Business || EasySub</title>
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full mb-4">
                        <FaBoxOpen className="text-white mr-2 text-lg sm:text-xl" />
                        <span className="text-white font-medium text-sm sm:text-base">Easy Sub Partners</span>
                    </div>
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
                        Discover Curated Subscription Boxes
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-indigo-100">
                        Supporting local businesses while delivering joy to your doorstep
                    </p>
                </div>

                {/* About Easy Sub */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-10 text-white border border-white/20">
                    <div className="flex flex-col sm:flex-row items-start">
                        <div className="flex-shrink-0 bg-indigo-500 p-3 rounded-lg mr-0 mb-4 sm:mr-4 sm:mb-0">
                            <FaGift className="text-white text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">About Easy Sub</h3>
                            <p className="mb-4 text-sm sm:text-base">
                                Easy Sub is a subscription box platform designed to deliver joy and convenience to your doorstep.
                                We bring personalized boxes full of your favorite products from local businesses, just for you!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 text-sm sm:text-base">
                                <div className="flex items-center">
                                    <MdLocalOffer className="text-indigo-300 mr-2 text-lg sm:text-xl" />
                                    <span>100+ Curated Products</span>
                                </div>
                                <div className="flex items-center">
                                    <FaShippingFast className="text-indigo-300 mr-2 text-lg sm:text-xl" />
                                    <span>Fast and Secured</span>
                                </div>
                                <div className="flex items-center">
                                    <MdOutlineSupportAgent className="text-indigo-300 mr-2 text-lg sm:text-xl" />
                                    <span>24/7 Customer Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
                        <nav className="mt-2 flex flex-wrap gap-2 items-center" aria-label="Tabs">
                            {categories.map((category) => (
                                <Button
                                    key={category.id}
                                    onClick={() => setActiveTab(category.id)}
                                    // Use 'secondary' for active, custom style for inactive
                                    variant={activeTab === category.id ? 'secondary' : ''} // Use undefined to get the default gray button
                                    className={`
                                    rounded-full text-sm !px-4 !py-2 
                                    ${activeTab === category.id
                                            ? 'shadow-md focus:ring-indigo-400' // Active: secondary styles + shadow
                                            : 'bg-transparent !text-white hover:bg-white/20 border-1' // Inactive: custom transparent/white style
                                        }
                                `}
                                >
                                    {category.name}
                                </Button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Subscription Cards */}
                <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {filteredShops.map((shop, index) => (
                        <div
                            key={shop.id}
                            className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col ${openIndex === index ? 'ring-2 ring-indigo-300 ring-offset-2' : ''
                                }`}
                        >
                            {/* Map Embed */}
                            <div className="w-full h-48 relative flex-shrink-0">
                                <iframe
                                    src={shop.mapEmbed}
                                    title={`Map of ${shop.name}`}
                                    width="100%"
                                    height="100%"
                                    allowFullScreen
                                    loading="lazy"
                                    className="border-b border-gray-200"
                                ></iframe>
                                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full shadow-sm text-xs font-medium flex items-center">
                                    <FaStar className="text-yellow-400 mr-1" />
                                    {shop.rating}
                                </div>
                            </div>

                            {/* Shop Info */}
                            <div className="p-4 sm:p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{shop.name}</h3>
                                        <p className="flex items-center text-xs sm:text-sm text-indigo-600 mt-1">
                                            <FaMapMarkerAlt className="mr-1 flex-shrink-0" />
                                            {shop.location}
                                        </p>
                                    </div>
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ml-2 flex-shrink-0 ${shop.category === 'lifestyle' ? 'bg-purple-100 text-purple-800' :
                                        shop.category === 'artisan' ? 'bg-amber-100 text-amber-800' :
                                            shop.category === 'beverage' ? 'bg-blue-100 text-blue-800' :
                                                shop.category === 'eco' ? 'bg-green-100 text-green-800' :
                                                    shop.category === 'literary' ? 'bg-red-100 text-red-800' :
                                                        'bg-indigo-100 text-indigo-800'
                                        }`}>
                                        {shop.category.charAt(0).toUpperCase() + shop.category.slice(1)}
                                    </span>
                                </div>

                                {/* Basic Info */}
                                <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                                    <p className="flex items-center">
                                        <FaClock className="mr-2 text-indigo-500 flex-shrink-0" />
                                        <span>{shop.hours}</span>
                                    </p>
                                    <p className="flex items-center">
                                        <FaPhone className="mr-2 text-indigo-500 flex-shrink-0" />
                                        <span>{shop.contact}</span>
                                    </p>
                                    <p className="flex items-center">
                                        <FaGlobe className="mr-2 text-indigo-500 flex-shrink-0" />
                                        <a
                                            href={shop.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-indigo-600 hover:underline truncate"
                                        >
                                            Visit website
                                        </a>
                                    </p>
                                </div>

                                {/* Spacer */}
                                <div className="flex-grow"></div>

                                {/* Expanded Details */}
                                {openIndex === index && (
                                    <div className="mt-4 pt-4 border-t border-gray-200 text-sm">
                                        <p className="text-gray-700 mb-4">{shop.description}</p>
                                        {/* ... rest of expanded details content ... */}
                                        <div className="mb-4">
                                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                                <MdLocalOffer className="mr-2 text-indigo-500" />
                                                Key Features
                                            </h4>
                                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                                {shop.features.map((feature, i) => (
                                                    <li key={i}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                                <MdPayment className="mr-2 text-indigo-500" />
                                                Subscription Plans
                                            </h4>
                                            <div className="space-y-2">
                                                {shop.subscriptionOptions.map((option, i) => (
                                                    <div key={i} className="flex flex-col sm:flex-row sm:justify-between bg-indigo-50 p-3 rounded-lg text-xs sm:text-sm">
                                                        <div>
                                                            <span className="font-medium text-indigo-700">{option.name}</span>
                                                            <span className="block text-indigo-500">{option.items}</span>
                                                        </div>
                                                        <span className="font-bold text-indigo-800 mt-1 sm:mt-0 sm:self-center">{option.price}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {/* Toggle Button - Using 'outline' and overriding some styles */}
                                <Button
                                    onClick={() => toggleDetails(index)}
                                    variant="outline" // Base styles from outline
                                    className="mt-4 w-full !py-2 !text-sm !rounded-lg border-0 hover:!bg-indigo-50 hover:!text-indigo-800 flex items-center justify-center focus:ring-2 focus:ring-indigo-400" // Override border, padding, hover bg/text, add flex for icons
                                    aria-expanded={openIndex === index}
                                    aria-controls={`details-${shop.id}`}
                                >
                                    {openIndex === index ? (
                                        <>
                                            Show Less <FaChevronUp className="ml-2" />
                                        </>
                                    ) : (
                                        <>
                                            View Plans <FaChevronDown className="ml-2" />
                                        </>
                                    )}
                                </Button>
                            </div>
                            {/* Accessibility div */}
                            {openIndex === index && <div id={`details-${shop.id}`} className="sr-only">Details are shown</div>}
                        </div>
                    ))}
                </div>
                {/* CTA Section - Using 'secondary' with overrides */}
                <div className="mt-16 text-center bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Join Easy Sub?</h3>
                    <p className="text-base sm:text-lg text-indigo-100 mb-6 max-w-2xl mx-auto">
                        Subscribe today and experience the convenience of curated local products delivered to your door
                    </p>
                    <Link to='/'> <Button
                        variant="secondary"
                        className="text-sm md:text-md"
                    >
                        Browse All Subscriptions
                    </Button></Link>
                </div>
            </div>
        </div>
    );
};

export default LocalBusinesses;