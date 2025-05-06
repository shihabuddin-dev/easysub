import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-indigo-50 flex flex-col items-center justify-center text-center px-4">
            <title>Error Page || EasySub</title>
            <img
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzV1cjVndWs1Yncyd3gzMWRybWxvZmZpMmVianV5dHVnYnNteGxkYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JsE9qckiYyVClQ5bY2/giphy.gif"
                alt="404 Animation"
                className="rounded-xl object-cover w-80 h-60 mb-6"
            />

            <h1 className="text-5xl font-bold text-indigo-700 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-2">Page Not Found</p>
            <p className="text-gray-500 mb-6">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>

            <Link to="/">
                <Button variant="primary">Go to Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;
