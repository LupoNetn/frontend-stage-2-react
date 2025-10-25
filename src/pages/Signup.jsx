import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import Spinner from "../components/Spinner";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const existingUser = localStorage.getItem('user')

      if (existingUser) {
        toast.error("A User already exists, please login to your account!");
        return;
      }

      toast.success("Account created successfully!");
      reset();

      // Navigate after successful signup
      navigate("/auth/login");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pt-20 relative min-h-screen bg-linear-to-b from-black via-gray-950 to-black flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* glowing background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 sm:left-32 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-20 right-10 sm:right-32 w-56 sm:w-80 h-56 sm:h-80 bg-indigo-600/20 rounded-full blur-[150px]" />
      </div>

      <div className="w-full max-w-2xl mx-4 bg-linear-to-b from-gray-900/80 to-black/80 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-[0_0_50px_-15px_rgba(6,182,212,0.4)] backdrop-blur-lg border border-gray-800/60 relative z-10">
        {/* header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-3 text-xs sm:text-sm">
            Start managing your tickets with ease.
          </p>
        </div>

        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-300 mb-2 tracking-wide"
            >
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/60 text-white border border-gray-700 focus:outline-none focus:border-cyan-400 transition-all duration-300 placeholder-gray-500"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-300 mb-2 tracking-wide"
            >
              Your Name
            </label>
            <input
              {...register("name", { required: "Name is Required" })}
              type="name"
              id="name"
              placeholder="Gilmore Ogunmekpon"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/60 text-white border border-gray-700 focus:outline-none focus:border-cyan-400 transition-all duration-300 placeholder-gray-500"
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-300 mb-2 tracking-wide"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/60 text-white border border-gray-700 focus:outline-none focus:border-cyan-400 transition-all duration-300 placeholder-gray-500"
            />
            {errors.password && (
              <p className="text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-linear-to-r from-cyan-500 to-indigo-600 rounded-lg font-semibold text-white hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.6)] hover:-translate-y-1"
          >
            {isLoading ? <Spinner /> : "Sign Up"}
          </button>
        </form>

        {/* bottom text */}
        <Link to="/auth/login">
          <p className="text-gray-500 text-center text-xs sm:text-sm mt-6 sm:mt-8">
            Already have an account?{" "}
            <span className="text-cyan-400 hover:text-cyan-300 cursor-pointer">
              Log In
            </span>
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Signup;
