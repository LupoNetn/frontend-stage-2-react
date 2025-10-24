import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-400 py-14 overflow-hidden border-t border-gray-900">
      {/* background accent */}{" "}
      <div className="absolute inset-0 -z-10">
        {" "}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[180px]" />{" "}
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[160px]" />{" "}
      </div>
      ```
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* logo + tagline */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Ticketr.
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Simplifying support, one ticket at a time.
          </p>
        </div>

        {/* nav links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <li className="hover:text-cyan-400 transition-colors cursor-pointer">
            Home
          </li>
          <li className="hover:text-cyan-400 transition-colors cursor-pointer">
            Features
          </li>
          <li className="hover:text-cyan-400 transition-colors cursor-pointer">
            How It Works
          </li>
          <li className="hover:text-cyan-400 transition-colors cursor-pointer">
            Pricing
          </li>
          <li className="hover:text-cyan-400 transition-colors cursor-pointer">
            Contact
          </li>
        </ul>

        {/* socials */}
        <div className="flex gap-5 text-gray-400">
          <a
            href="#"
            className="hover:text-cyan-400 transition-all hover:-translate-y-1"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="hover:text-cyan-400 transition-all hover:-translate-y-1"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="hover:text-cyan-400 transition-all hover:-translate-y-1"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="hover:text-cyan-400 transition-all hover:-translate-y-1"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      {/* bottom border + copyright */}
      <div className="mt-12 text-center text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} Ticketr. All rights reserved.{" "}
          <span className="text-cyan-400">Built with passion by Lupo.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
