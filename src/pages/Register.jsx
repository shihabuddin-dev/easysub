import { FaEye, FaEyeSlash } from "react-icons/fa";
import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { FirebaseAuthContext } from "../provider/FirebaseAuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { createUserWithGoogle, setUser, createUser, updateUser } = use(FirebaseAuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoURL.value;
    const password = form.password.value;
    console.log(name, photo)

    // Password validation
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...currentUser, displayName: name, photoURL: photo })
            navigate('/')
            toast.success("Account created successfully!");
          }).catch((error) => {
            console.log(error)
            setUser(currentUser)
          });

      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage || "Something went wrong.");
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
      <title>Register || EasySub</title>
      <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-700 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Your Name"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Your Email"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
            <input
              type="url"
              name="photoURL"
              placeholder="https://example.com/your-photo.jpg"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            required
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
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full mt-2">
            Register
          </Button>
        </form>

        {/* Redirect to Login */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline font-medium">
            Login here
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

export default Register;
