import { use, useState } from 'react';
import { FaBars, FaTimes, FaSearch, FaUser } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import Button from './Button';
import { Link, NavLink, useNavigate } from 'react-router';
import { FirebaseAuthContext } from '../provider/FirebaseAuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOutUser } = use(FirebaseAuthContext)
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const navigate = useNavigate()

    const handleLogOutUser = () => {
        logOutUser()
            .then(() => {
                toast('Logout Success')
            }).catch((error) => {
                console.log(error)
            });
    }
    // all nav links 
    const myLinks = <>
        <li className="hover:text-indigo-200 transition"><NavLink to='/'>Home</NavLink></li>
        <li className="hover:text-indigo-200 transition"><NavLink to='/my-profile'>My Profile</NavLink></li>
        {user && <li className="hover:text-indigo-200 transition"><NavLink to='/local-business'>Local Businesses</NavLink></li>}
        <li className="hover:text-indigo-200 transition"><NavLink to='/about'>About</NavLink></li>
        <li className="hover:text-indigo-200 transition"><NavLink to='/connect'>Connect</NavLink></li>
    </>

    // all buttons
    const myButtons = <>
        {user ?
            <Button onClick={handleLogOutUser} variant="danger">Log Out</Button> :
            <Link to='/login'><Button variant="secondary">Login</Button></Link>

        }

    </>

    const photoInfo = (
        <div onClick={() => navigate('/my-profile')} className="relative group">
            {user && (user.photoURL ? (
                <img
                    src={user.photoURL}
                    alt={user.displayName || 'User profile'}
                    className='w-10 h-10 object-cover border-2 border-indigo-300 rounded-full cursor-pointer'
                />
            ) : (
                <FaUser
                    className='w-10 h-10 object-cover border-2 border-indigo-200 rounded-full p-1 text-gray-300 cursor-pointer'
                />
            ))}

            {/* --- Tooltip Added Here --- */}
            {user && (
                <div className={`
                top-6 absolute left-1/2 transform -translate-x-1/2 mb-2 
                w-max whitespace-nowrap px-2 py-1
                 text-white rounded 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-opacity duration-200 
                z-10 
            `}>
                    {user.displayName || 'User'}
                </div>
            )}

        </div>
    );



    return (
        <nav className="bg-gradient-to-tl from-purple-700 via-indigo-700 to-indigo-600 text-white sticky top-0 z-50 shadow cursor-pointer">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div onClick={() => navigate('/')} className="flex items-center space-x-2">
                        <MdDashboard className="text-2xl text-indigo-200" />
                        <h1 className="text-2xl md:text-[26px] font-bold">
                            <span className="text-white">Easy</span>
                            <span className="text-indigo-200">Sub</span>
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-7 font-medium">
                        {myLinks}

                    </ul>
                    <ul className='hidden md:flex items-center space-x-3 font-medium'>

                        {!user && <li className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-indigo-800 text-white px-4 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 w-40"
                            />
                            <FaSearch className="absolute right-3 top-2.5 text-indigo-300" />
                        </li>}
                        {photoInfo}
                        <li className='space-x-3'> {myButtons}</li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="md:hidden bg-indigo-800 px-4 py-4 space-y-3 font-medium">
                    {myLinks}
                    {!user && <li className="flex items-center space-x-2 bg-indigo-700 px-3 py-2 rounded">
                        <FaSearch className="text-indigo-300" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-indigo-700 text-white flex-1 focus:outline-none"
                        />
                    </li>}
                    <li className="flex space-x-2">
                        {photoInfo}
                        {myButtons}
                    </li>
                </ul>
            )}

        </nav>
    );
};

export default Navbar;
