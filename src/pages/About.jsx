import React from "react";
import { FaUsers, FaRegLightbulb, FaTrophy } from "react-icons/fa";
import Button from "../components/Button";
import { Link } from "react-router";

const About = () => {
    return (
        <div className="bg-gradient-to-l from-indigo-700 via-indigo-700 to-purple-800 min-h-screen rounded-2xl text-white">
            <title>About || EasySub</title>
            {/* Hero Section */}
            <section className="text-center py-20 px-6 md:px-12">
                <h1 className="text-4xl md:text-5xl font-semibold mb-4">About Easy Sub</h1>
                <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
                    Easy Sub is a subscription box platform designed to deliver joy and convenience to your doorstep. We bring personalized boxes full of your favorite products from local businesses, just for you!
                </p>
                <Link to='/'>
                    <Button variant='secondary'>
                        Get Started
                    </Button>
                </Link>
            </section>

            {/* Mission & Vision */}
            <section className="bg-white text-gray-800 py-16">
                <div className="max-w-screen-xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-semibold mb-8">Our Mission & Vision</h2>
                    <div className="md:flex md:space-x-6">
                        <div className="md:w-1/3 mb-8 md:mb-0">
                            <FaRegLightbulb className="text-4xl text-indigo-600 mb-4 mx-auto" />
                            <h3 className="text-2xl font-medium mb-4">Innovative Solutions</h3>
                            <p>
                                Our mission is to innovate the subscription box experience, offering custom-tailored packages that excite and inspire.
                            </p>
                        </div>
                        <div className="md:w-1/3 mb-8 md:mb-0">
                            <FaUsers className="text-4xl text-indigo-600 mb-4 mx-auto" />
                            <h3 className="text-2xl font-medium mb-4">Community-Focused</h3>
                            <p>
                                We’re all about community, supporting local businesses and creating a marketplace where customers and vendors thrive together.
                            </p>
                        </div>
                        <div className="md:w-1/3">
                            <FaTrophy className="text-4xl text-indigo-600 mb-4 mx-auto" />
                            <h3 className="text-2xl font-medium mb-4">Top Quality</h3>
                            <p>
                                We curate only the best products, ensuring that every box offers premium quality, satisfaction, and excitement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-indigo-900 py-16">
                <div className="max-w-screen-xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-semibold text-white mb-8">Meet Our Team</h2>
                    <div className="md:flex md:space-x-6">
                        <div className="mb-6 md:w-1/3">
                            <img src="https://i.ibb.co.com/DHqBvmwD/2.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white">Md. Rashedul Islam</h3>
                            <p className="text-indigo-400">CEO & Founder</p>
                        </div>
                        <div className="mb-6 md:w-1/3">
                            <img src="https://i.ibb.co.com/zTzrH5pr/7.png" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white">Tahsin Ahmed</h3>
                            <p className="text-indigo-400">Chief Operations Officer</p>
                        </div>
                        <div className="mb-6 md:w-1/3">
                            <img src="https://i.ibb.co.com/sJQ1sgp5/12.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white">Shahina Begum</h3>
                            <p className="text-indigo-400">Product Manager</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="text-center py-16 px-6 bg-indigo-700 rounded-2xl">
                <h2 className="text-3xl font-semibold text-white mb-4">Join the Easy Sub Family</h2>
                <p className="text-lg text-white mb-6 max-w-3xl mx-auto">
                    Ready to experience the joy of subscription boxes? Join us today and get started with Easy Sub!
                </p>
                <Link to='/'>
                    <Button variant='danger'>
                        Get Started
                    </Button>
                </Link>
            </section>
        </div>
    );
};

export default About;
