import {  useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/slices/slicer";
import InputField from "../common/inputField";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate=useNavigate()
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser, // Keep the existing properties
      [name]: value, // Update only the changed field
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    const resultAction=await dispatch(registerUser(user))
    if (registerUser.fulfilled.match(resultAction)) {
      navigate('/log-in'); // Navigate after successful registration
    }
  };

  return (
    <div className="flex flex-row bg-white h-screen items-center px-6">
      <div id="Contact" className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <div className="px-6 py-12 mx-auto max-w-lg">
          <div className="text-left">
            <h1
              className="text-3xl font-bold text-black"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Create an Account
            </h1>
          </div>
          <form className="mt-8 text-black" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <InputField
                    required
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Enter your FirstName"
                    autoComplete="given-name"
                    value={user.firstname}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <InputField
                    required
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Enter your LastName"
                    autoComplete="family-name"
                    value={user.lastname}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  UserName
                </label>
                <div className="mt-2.5">
                  <InputField
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your username"
                    autoComplete="username"
                    required
                    value={user.username}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  Password
                </label>
                <div className="mt-2.5">
                  <InputField
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                    value={user.password}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 transition-all duration-200"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
