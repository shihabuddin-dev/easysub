import { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FirebaseAuthContext } from "../provider/FirebaseAuthContext";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { Navigate } from "react-router";

const Login = () => {
    const { createUserWithGoogle, user, setUser, loginUser } = use(FirebaseAuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()
    const togglePassword = () => setShowPassword(!showPassword);
    if (user) {
        return <>
        <Spinner />
         <Navigate to='/' />
        </>
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        loginUser(email, password)
            .then((userCredential) => {
                const currentUser = userCredential.user;
                toast.success(`Welcome back ${currentUser.displayName}`)
                // when user come from another pages that time after complete login redirect this pages 
                navigate(`${location?.state ? location.state : '/'}`)
            })
            .catch((error) => {
                const errorCode = error.code;
                toast.warning(errorCode)
            });

    };

    const handleGoogleLogin = () => {
        createUserWithGoogle()
            .then((result) => {
                const currentUser = result.user;
                setUser(currentUser)
                toast.success(`Welcome back ${currentUser.displayName}`)
                navigate(`${location?.state ? location.state : '/'}`)
            }).catch((error) => {
                toast.error("Google login failed.");
                console.log(error)
            });
    };


    return (
        <div className="flex items-center justify-center">
            <title>Login || EasySub</title>
            <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-700 mb-6">
                    Welcome Back
                </h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            required
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter Your Password"
                                required
                                className="w-full border border-gray-300 px-4 py-2 pr-10 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                            <span
                                onClick={togglePassword}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-500"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>
                    <div className="-mt-2 -mb-1">
                        <Link to="/reset-password" className="text-red-500 hover:underline text-sm">
                            Forget Password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full mt-2">
                        Login
                    </Button>
                </form>

                {/* Redirect to Register */}
                <div className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-indigo-600 hover:underline font-medium">
                        Register here
                    </Link>
                </div>

                {/* Google Login Button */}
                <div className="mt-4">
                    <Button variant='outline' onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2">
                        <FcGoogle className="text-xl" />
                        <span>Continue with Google</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
