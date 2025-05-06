import React from 'react';
import { useLoaderData, useParams, Link } from 'react-router-dom';
import {
    FiLayers,
    FiDollarSign,
    FiArrowLeft,
    FiTag,
    FiCheckCircle,
    FiStar,
    FiUsers,
    FiTarget,
    FiAward,
    FiZap
} from 'react-icons/fi';
import ReviewSection from './ReviewSection'; // Assuming this component exists

const ViewDetails = () => {
    const allPackages = useLoaderData();
    const { id } = useParams();

    // Ensure allPackages is an array before calling find
    const packageData = Array.isArray(allPackages)
        ? allPackages.find(pkg => pkg.id === parseInt(id))
        : null; // Handle cases where data might not be loaded correctly

    if (!packageData) {
        return <div className="text-center text-red-500 mt-10 p-4">Package not found or data failed to load!</div>;
    }

    // Destructure with defaults
    const {
        name = 'Unnamed Package',
        banner, // Keep as is, handle missing image with alt text
        tech_category = 'Uncategorized',
        price = 0.00,
        frequency = 'N/A',
        description = 'No description provided.',
        features = [],
        subscription_benefits = [],
        target_audience = 'N/A',
        use_cases = [],
        tags = [],
        ratings = 0,
        number_of_reviews = 0
    } = packageData;

    // Render star ratings (Added checks for ratings)
    const renderStars = () => {
        // Only render if ratings data exists and is a number
        if (typeof ratings !== 'number' || ratings < 0) {
            return <span className="text-sm text-gray-500">No rating available</span>;
        }

        const stars = [];
        const fullStars = Math.floor(ratings);
        // Ensure rating is capped at 5 for calculations
        const cappedRating = Math.min(ratings, 5);
        const hasHalfStar = cappedRating % 1 >= 0.4; // Use 0.4 threshold for half star

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FiStar key={i} className="text-yellow-400 fill-current" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                // Simple half-star approximation using opacity - more complex SVG needed for true half fill
                stars.push(<FiStar key={i} className="text-yellow-400 fill-current opacity-60" />);
            } else {
                stars.push(<FiStar key={i} className="text-gray-300" />);
            }
        }

        return (
            <div className="flex items-center mt-1 sm:mt-0"> {/* Added margin top for mobile */}
                <div className="flex mr-2">{stars}</div>
                <span className="text-sm sm:text-base text-gray-600">{ratings.toFixed(1)} ({number_of_reviews} reviews)</span>
            </div>
        );
    };

    return (
        // Added padding adjustments for different screens
        <div className="max-w-4xl mx-auto px-3 sm:px-6">
            <title>Subscription Details || EasySub</title>
            {/* Back Button */}
            <Link to="/" className="inline-flex items-center text-indigo-600 hover:underline mb-4 text-sm sm:text-base">
                <FiArrowLeft className="mr-1" />
                Back to Services
            </Link>

            {/* Card container */}
            <div className="bg-white shadow-lg rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden"> {/* Adjusted rounding */}
                {/* Banner Image - Adjusted height for different screens */}
                <img
                    src={banner || 'https://via.placeholder.com/1000x300?text=Banner+Not+Available'} // Fallback image
                    alt={`${name} banner`}
                    className="w-full h-48 sm:h-60 md:h-72 object-cover" // Responsive height
                />

                {/* Content Padding - Adjusted padding */}
                <div className="p-4 sm:p-6 space-y-4 md:space-y-6"> {/* Adjusted spacing */}

                    {/* Header Section: Title, Rating, Category Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                        {/* Title and Rating */}
                        <div>
                            {/* Adjusted title size */}
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 sm:text-indigo-700">{name}</h2>
                            {renderStars()} {/* Moved rating logic to function */}
                        </div>
                        {/* Category Badge */}
                        <div className="bg-indigo-100 text-indigo-800 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm font-medium self-start sm:self-center whitespace-nowrap"> {/* Adjusted padding & rounding */}
                            {tech_category}
                        </div>
                    </div>

                    {/* Category & Price Info Bar - Adjusted padding and flex behavior */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 bg-gray-50 p-3 sm:p-4 rounded-lg">
                        <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                            <FiLayers className="text-indigo-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> {/* Adjusted icon size */}
                            <span><span className="font-semibold">Category:</span> {tech_category}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                            <FiDollarSign className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> {/* Adjusted icon size */}
                            <span><span className="font-semibold">Price:</span> ${price.toFixed(2)} / {frequency}</span> {/* Ensure price formatting */}
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <FiZap className="text-indigo-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> {/* Adjusted icon size */}
                            Description
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Features Section */}
                    {features.length > 0 && (
                        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"> {/* Increased bottom margin */}
                                <FiCheckCircle className="text-indigo-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> {/* Adjusted icon size */}
                                Key Features
                            </h3>
                            {/* Grid stays responsive */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 sm:gap-y-3">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <FiCheckCircle className="text-green-500 mt-1 w-4 h-4 flex-shrink-0" /> {/* Adjusted icon size */}
                                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Subscription Benefits Section */}
                    {subscription_benefits.length > 0 && (
                        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"> {/* Increased bottom margin */}
                                <FiAward className="text-indigo-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> {/* Adjusted icon size */}
                                Subscription Benefits
                            </h3>
                            <ul className="space-y-2 sm:space-y-3">
                                {subscription_benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                                        {/* Simple dot instead of numbered circle for cleaner look */}
                                        <span className="text-indigo-500 mt-1.5 flex-shrink-0">•</span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Target Audience Section */}
                    {target_audience !== 'N/A' && target_audience && ( // Check if not default N/A
                        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                <FiUsers className="text-indigo-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> {/* Adjusted icon size */}
                                Perfect For
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600">{target_audience}</p>
                        </div>
                    )}

                    {/* Use Cases Section */}
                    {use_cases.length > 0 && (
                        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"> {/* Increased bottom margin */}
                                <FiTarget className="text-indigo-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> {/* Adjusted icon size */}
                                Common Use Cases
                            </h3>
                            <ul className="space-y-2 sm:space-y-3">
                                {use_cases.map((useCase, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                                        {/* Simple dot */}
                                        <span className="text-indigo-500 mt-1.5 flex-shrink-0">•</span>
                                        <span>{useCase}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tags Section */}
                    {tags.length > 0 && (
                        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                <FiTag className="text-indigo-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> {/* Adjusted icon size */}
                                Tags
                            </h3>
                            {/* Flex wrap handles responsiveness automatically */}
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs sm:text-sm" // Adjusted padding/size
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-6 md:mt-8">
                <ReviewSection packageId={id} />
            </div>
        </div>
    );
};

export default ViewDetails;