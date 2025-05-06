import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart, FaArrowRight } from 'react-icons/fa';
import Button from '../Button';

const Subscription = ({ packages }) => {
    const { id, name, thumbnail, tech_category, price, frequency, ratings, number_of_reviews } = packages || {};
    const [love, setLove] = useState(false)

    return (
        <div className=" relative bg-white rounded-xl shadow-xl  overflow-hidden border border-gray-100 ">
            {/* Favorite Button */}
            <button onClick={() => setLove(!love)} className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full shadow-md hover:bg-red-100 transition-colors">
                {
                    love ? <FaHeart className="text-red-500 group-hover:text-red-400" /> : <FaHeart className="text-gray-400 group-hover:text-red-400" />
                }
            </button>

            {/* Image with Gradient Overlay */}
            <div className="group relative overflow-hidden h-60">
                <img
                    src={thumbnail}
                    alt={name}
                    className="w-full h-full object-fit transition-transform ease-in-out duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-2">
                {/* Category Tag */}
                <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full">
                    {tech_category}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={`text-sm ${i < Math.floor(ratings || 4) ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-500">
                        ({number_of_reviews || 0} reviews)
                    </span>
                </div>

                {/* Price */}
                <div className="flex items-end space-x-2">
                    <p className="text-xl md:text-2xl font-semibold text-indigo-600">${price}</p>
                    <span className="text-gray-500 text-sm">/ {frequency}</span>
                </div>

                {/* View More Button */}
                <Link to={`/service/${id}`} className="group block mt-4">
                    <Button variant="primary" className="w-full cursor-pointer group-hover:bg-indigo-700 transition-colors">
                        <span className="flex items-center justify-center">
                            View Details
                            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                    </Button>
                </Link>
            </div>

            {/* Ribbon for Popular Items */}
            {ratings > 4.5 && (
                <div className="absolute top-0 left-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg">
                    Popular
                </div>
            )}
        </div>
    );
};

export default Subscription;