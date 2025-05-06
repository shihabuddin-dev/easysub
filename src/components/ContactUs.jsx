import React, { useState } from 'react';

import contactImg from '../assets/contact.svg'
import Spinner from './Spinner';
import Button from './Button';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('idle');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setFeedbackMessage('');

        console.log('Submitting data:', formData);
        await new Promise(resolve => setTimeout(resolve, 2000));

        const isSuccess = Math.random() > 0.2;

        if (isSuccess) {
            setStatus('success');
            setFeedbackMessage('Thank you! Your message has been sent successfully.');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } else {
            setStatus('error');
            setFeedbackMessage('Oops! Something went wrong. Please try again later.');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };


    return (

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="md:flex">


                    <div className="md:w-1/2 p-8 lg:p-12 flex items-center justify-center bg-gray-50 md:bg-transparent">

                        <img
                            src={contactImg}
                            alt="Contact illustration"
                            className="w-full max-w-sm h-auto object-contain"
                        />
                    </div>

                    <div className="md:w-1/2 p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-6 text-center md:text-left">
                            Get in Touch
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={status === 'submitting'}
                                    className="w-full border border-gray-300 px-4 py-2 pr-10 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                                    placeholder="Enter Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={status === 'submitting'}
                                    className="w-full border border-gray-300 px-4 py-2 pr-10 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                                    placeholder="Enter Your Email"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    disabled={status === 'submitting'}
                                    className="w-full border border-gray-300 px-4 py-2 pr-10 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                                    placeholder="Question about service"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    disabled={status === 'submitting'}
                                    className="w-full border border-gray-300 px-4 py-2 pr-10 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            {feedbackMessage && (
                                <div className={`p-4 rounded-md text-sm ${status === 'success' ? 'bg-green-100 text-green-700' : ''
                                    } ${status === 'error' ? 'bg-red-100 text-red-700' : ''
                                    }`}>
                                    {feedbackMessage}
                                </div>
                            )}
                            {status === 'submitting' &&
                                <Spinner />}

                            <div>
                                <Button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className={`w-full py-2 ${status === 'submitting'
                                        ? 'bg-indigo-400 cursor-not-allowed'
                                        : 'hover:bg-indigo-700'
                                        }`}
                                >
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ContactUs;