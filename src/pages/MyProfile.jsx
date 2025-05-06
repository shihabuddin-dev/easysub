import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FirebaseAuthContext } from '../provider/FirebaseAuthContext';
import { FaUser, FaEdit } from 'react-icons/fa';
import Button from '../components/Button';

const MyProfile = () => {
    const { user, updateUser } = useContext(FirebaseAuthContext);
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [loading, setLoading] = useState(false);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (user) {
            setName(user.displayName || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!name.trim()) {
            toast.error('Name cannot be empty.');
            return;
        }

        try {
            setLoading(true);
            await updateUser({ displayName: name, photoURL });
            toast.success('Profile updated successfully!');
            setEditMode(false);
        } catch (error) {
            toast.error('Update failed.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return (
            <div className="text-center text-red-500 mt-10">
                Please log in to view your profile.
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
            <title>My Profile || EasySub</title>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">My Profile</h2>

            <div className="flex flex-col items-center mb-6 relative group">
                {
                    photoURL ? (
                        <img
                            src={photoURL}
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-4 border-indigo-500 mb-3"
                        />
                    ) : (
                        <FaUser className="w-24 h-24 rounded-full border-4 border-indigo-500 mb-3 p-2 text-gray-400" />
                    )
                }

                {!editMode && (
                    <button
                        onClick={() => setEditMode(true)}
                        title="Edit Profile"
                        className="absolute top-0 right-0 bg-indigo-600 hover:bg-indigo-700 text-white p-1 rounded-full text-xs hidden group-hover:block"
                    >
                        <FaEdit />
                    </button>
                )}
                <p className="text-lg font-medium text-gray-800">{user.displayName || 'No Name'}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-500">Created: {new Date(user.metadata.creationTime).toLocaleDateString('en-US', {
                    weekday: 'short',
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                })}</p>
            </div>

            {!editMode ? (
                <div className="text-center">
                    <Button
                        onClick={() => setEditMode(true)}
                        className='py-2'
                    >
                        Edit Profile
                    </Button>
                </div>
            ) : (
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Photo URL</label>
                        <input
                            type="text"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter new photo URL"
                        />
                    </div>

                    <div className="flex justify-between gap-3">
                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full"
                        >
                            {loading ? 'Saving...' : 'Save'}
                        </Button>
                        <Button
                            variant='danger'
                            onClick={() => setEditMode(false)}
                            className="w-full"
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default MyProfile;
