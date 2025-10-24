import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <section className="pt-20 lg:pt-0 relative min-h-screen bg-linear-to-b from-black via-gray-950 to-black flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* glowing background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-10 sm:left-28 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-16 right-10 sm:right-28 w-56 sm:w-80 h-56 sm:h-80 bg-indigo-600/20 rounded-full blur-[150px]" />
      </div>

      <div className="w-full max-w-2xl mx-4 bg-linear-to-b from-gray-900/80 to-black/80 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-[0_0_50px_-15px_rgba(6,182,212,0.4)] backdrop-blur-lg border border-gray-800/60 relative z-10">
        {/* header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-3 text-xs sm:text-sm">
            Log in to continue managing your tickets effortlessly.
          </p>
        </div>

        {/* form */}
        <form className="space-y-4 sm:space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-300 mb-2 tracking-wide"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/60 text-white border border-gray-700 focus:outline-none focus:border-cyan-400 transition-all duration-300 placeholder-gray-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-300 mb-2 tracking-wide"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/60 text-white border border-gray-700 focus:outline-none focus:border-cyan-400 transition-all duration-300 placeholder-gray-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-cyan-500 border-gray-700 rounded focus:ring-cyan-400"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <span className="text-cyan-400 hover:text-cyan-300 cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-linear-to-r from-cyan-500 to-indigo-600 rounded-lg font-semibold text-white hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.6)] hover:-translate-y-1"
          >
            Log In
          </button>
        </form>

        {/* bottom text */}
        <Link to='/auth/signup'>
          <p className="text-gray-500 text-center text-xs sm:text-sm mt-6 sm:mt-8">
            Don't have an account?{" "}
            <span className="text-cyan-400 hover:text-cyan-300 cursor-pointer">
              Sign Up
            </span>
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Login;
