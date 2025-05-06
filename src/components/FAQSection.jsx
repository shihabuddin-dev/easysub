import React, { useState } from 'react';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi'; // Import react-icon

const faqData = [
    {
        question: 'What exactly is EasySub?',
        answer:
            'EasySub is a service designed to help you effortlessly manage all your online subscriptions in one place. We help you track spending, discover services, and ensure you\'re only paying for what you use.',
    },
    {
        question: 'How does EasySub work?',
        answer:
            'You can securely link your bank accounts or manually add your subscriptions. EasySub then identifies recurring payments, categorizes them, and presents you with a clear overview on your dashboard. We also provide insights and alerts for upcoming renewals or price changes.',
    },
    {
        question: 'Is EasySub free to use?',
        answer:
            'We offer different subscription plans, including a basic free tier with core features. Our premium plans unlock advanced capabilities like automated cancellation assistance (where possible), custom alerts, and detailed spending reports. You can find details on our Pricing page.',
    },
    {
        question: 'How is my financial information kept secure?',
        answer:
            'Security is our top priority. When linking accounts, we use bank-level encryption (like Plaid) and read-only access. We never store your bank login credentials. All personal data is encrypted both in transit and at rest. Please see our Security page for more details.',
    },
    {
        question: 'Can EasySub cancel unwanted subscriptions for me?',
        answer:
            'While we can\'t directly log in and cancel subscriptions on your behalf due to security reasons, our premium plans provide guides, contact information, and sometimes direct links to cancellation pages to make the process as smooth as possible for you.',
    },
    {
        question: 'How do I sign up for EasySub?',
        answer:
            'Signing up is simple! Just click the "Sign Up" button on our homepage, enter your email address, create a password, and you can start exploring EasySub right away. You can choose a plan later.',
    },
    {
        question: 'How do I cancel my EasySub subscription?',
        answer:
            'You can cancel your EasySub subscription at any time from your account settings. Go to the "Billing" or "Subscription" section in your profile, and you\'ll find the option to cancel. Your access will continue until the end of your current billing period.',
    },
    {
        question: 'What payment methods do you accept for premium plans?',
        answer:
            'We accept major credit cards (Visa, Mastercard, American Express) and potentially other payment methods depending on your region. All payments are processed securely through our payment partner (e.g., Stripe).',
    },
];

const FAQItem = ({ faq, index, openIndex, toggleFAQ }) => {
    const isOpen = index === openIndex;

    return (
        <div className="border-2 border-indigo-300 rounded-lg overflow-hidden shadow-sm">
            <h2>
                <button
                    type="button"
                    className={`flex justify-between items-center w-full p-5 font-medium text-left text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${isOpen ? 'bg-gray-50' : 'bg-white'
                        }`}
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${index}`}
                >
                    <span>{faq.question}</span>
                    <FiChevronDown
                        className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                    />
                </button>
            </h2>
            <div
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                aria-labelledby={`faq-heading-${index}`}
            >
                <div className="p-5 bg-white border-t border-gray-200 text-gray-600 leading-relaxed">
                    {faq.answer}
                </div>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-10 lg:py-14 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-semibold text-center text-indigo-700 mb-10">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            index={index}
                            openIndex={openIndex}
                            toggleFAQ={toggleFAQ}
                        />
                    ))}
                </div>

                <div className="mt-8 text-center text-gray-600">
                    <p>Can't find the answer you're looking for?</p>
                    <p
                        className="mt-2 flex justify-center items-center gap-2 text-indigo-600 font-medium"
                    >
                        Contact our support team <FaRegArrowAltCircleDown />

                    </p>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;