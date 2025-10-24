import { Link } from "react-router";
import wave from "../../assets/wave.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* ===== HEADLINE ===== */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          Manage Your <span className="block mt-2">Tickets Effortlessly</span>
        </h1>

        {/* ===== SUBTEXT ===== */}
        <p className="text-gray-300 text-md md:text-2xl mb-8 max-w-2xl mx-auto">
          Stay organized, track issues, and resolve tickets all in one place —
          simple, fast, and efficient.
        </p>

        {/* ===== BUTTONS ===== */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
           <Link to="/auth/signup"> Get Started </Link>
          </button>
           <button className="w-full sm:w-auto px-8 py-3 border border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-950 transition-all duration-300">
           <a href="#how-we-work"> How We Work </a>
          </button>
        </div>

        {/* ===== DECORATIVE BACKGROUND ===== */}
        <div className="absolute -top-10 left-20 w-96 h-96 bg-indigo-500/30 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[150px] -z-10" />
      </div>

      {/* ===== WAVE SVG ===== */}
      <img
        src={wave}
        alt="decorative wave"
        className="absolute bottom-0 left-0 w-full h-auto z-0 opacity-[0.1]"
      />
    </section>
  );
};

export default Hero;
