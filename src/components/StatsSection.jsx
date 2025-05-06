import React from 'react';
import CountUp from 'react-countup';
import {
    RiUserStarFill,
    RiMedalFill,
    RiToolsFill,
    RiUserHeartFill
} from 'react-icons/ri';

const StatsSection = ({
    title = "We Power Modern Subscriptions",
    description = "Trusted by tech users and developers worldwide. We simplify how you manage your tools.",
    backgroundColor = "bg-gradient-to-r from-indigo-50 to-purple-50",
    textColor = "text-indigo-700",
    stats = [
        {
            icon: <RiUserStarFill className="w-full h-full" />,
            count: 7000,
            label: "Active Subscriptions",
            iconColor: "text-indigo-600",
            animationDuration: 5
        },
        {
            icon: <RiMedalFill className="w-full h-full" />,
            count: 52802,
            label: "5-Star Reviews",
            iconColor: "text-yellow-500",
            animationDuration: 4
        },
        {
            icon: <RiToolsFill className="w-full h-full" />,
            count: 21000,
            label: "Tools Supported",
            iconColor: "text-green-500",
            animationDuration: 3
        },
        {
            icon: <RiUserHeartFill className="w-full h-full" />,
            count: 102100,
            label: "Happy Users",
            iconColor: "text-pink-500",
            animationDuration: 6
        }
    ],
    columns = "md:grid-cols-4 sm:grid-cols-2",
    enablePlusSign = true,
    enableScrollSpy = true,
    cardBackground = "bg-white",
    cardHoverEffect = "hover:shadow-xl hover:-translate-y-1"
}) => {
    return (
        <div className={`${backgroundColor} py-16 px-4 sm:px-6 lg:px-8 rounded-2xl mx-4`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className={`text-3xl md:text-4xl font-semibold ${textColor} mb-4`}>
                        {title}
                    </h2>
                    {description && (
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>

                <div className={`grid gap-5 ${columns}`}>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`${cardBackground} rounded-2xl p-8 shadow-lg transition-all duration-700 ${cardHoverEffect} flex flex-col items-center text-center`}
                        >
                            <div className={`${stat.iconColor} mb-4 w-12 h-12 flex items-center justify-center`}>
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                <CountUp
                                    end={stat.count}
                                    enableScrollSpy={enableScrollSpy}
                                    duration={stat.animationDuration || 3}
                                />
                                {enablePlusSign && "+"}
                            </h3>
                            <p className="text-lg text-gray-600">{stat.label}</p>
                            {stat.additionalInfo && (
                                <p className="text-sm text-gray-500 mt-2">{stat.additionalInfo}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsSection;