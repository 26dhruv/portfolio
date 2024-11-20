import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../store/slices/slicer";
import InputField from "../common/inputField";

export default function SignInForm() {
  const [InputFieldUserName, setInputFieldUserName] = useState('');
  const [InputFieldPassword, setInputFieldPassword] = useState('');
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.userProfile);
  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    try {
      await dispatch(loginUser({ username, password }));
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to home page once authenticated
      navigate('/');
    }
  }, [isAuthenticated, navigate]); // This will run when isAuthenticated changes

  return (
    <div className="flex flex-row bg-white h-screen items-center px-6">
        <div className="px-6 py-12 mx-auto max-w-lg">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <div className="text-left">
              <h1 className="text-4xl font-bold text-black" style={{ fontFamily: "Playfair Display, serif" }}>
                Sign In
              </h1>
              <p className="mt-2 text-black/80 text-sm">Welcome back! Please enter your details.</p>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <InputField
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    placeholder="Enter your userName"
                    value={InputFieldUserName}
                    onChange={(e) => setInputFieldUserName(e.target.value)}
                    required
                    className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 transition-all duration-200"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <InputField
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={InputFieldPassword}
                    onChange={(e) => setInputFieldPassword(e.target.value)}
                    required
                    className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Error Handling */}
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex gap-4">
                <button
                  onClick={() => handleLogin(InputFieldUserName, InputFieldPassword)}
                  className="flex sm:flex-none rounded-lg bg-black px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all duration-200 justify-center"
                >
                  Sign In
                </button>
              </div>
              <div className="text-center text-sm text-black">
                Don&apos;t have an account?{" "}
                <Link to="/sign-up" className="font-semibold hover:text-orange-200 transition-colors">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
