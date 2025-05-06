import React from 'react';
import { useLoaderData } from 'react-router';

const Sponsored = () => {
    const sponsors = useLoaderData()
    return (

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-center text-indigo-700 mb-6">
                Our Valued Partners
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {sponsors.map((sponsor) => (
                    <div key={sponsor.name} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col">
                        <div className="w-full h-24 md:h-32 mb-4 flex items-center justify-center">
                            <img
                                src={sponsor.logo}
                                alt={`${sponsor.name} logo`}
                                className="max-w-full max-h-full h-24 object-contain rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{sponsor.name}</h3>
                            <p className="text-gray-600 text-sm mb-4 flex-grow">{sponsor.description}</p>
                            <a
                                href={sponsor.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-auto text-indigo-600 hover:text-indigo-800 hover:underline font-medium transition-colors duration-200"
                            >
                                Visit Site →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Sponsored;