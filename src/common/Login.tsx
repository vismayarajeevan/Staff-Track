import React from 'react';
import image from '../assets/login.png';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-[#484c7f] to-[#422b72] p-5">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-5 lg:px-20 py-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-[#484c7f] font-bold text-4xl mb-2">Sign In</h1>
          <p className="text-[#484c7f] text-lg mb-8">
            Enter your email and password to sign in
          </p>

          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  className="w-full p-4 border border-[#ccc] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#484c7f] focus:border-transparent"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  className="w-full p-4 border border-[#ccc] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#484c7f] focus:border-transparent pr-12"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-4 flex items-center text-[#484c7f] hover:text-[#422b72]"
                >
                  👁️
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#484c7f] text-white font-bold text-lg py-3 rounded-lg hover:bg-[#422b72] transition duration-300"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-right">
            <button className="text-[#484c7f] hover:text-[#422b72] font-semibold">
              Forgot password?
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-center p-5">
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={image}
            alt="Computer login"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;