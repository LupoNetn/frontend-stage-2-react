import React from "react";
import { ClipboardList, Clock, BarChart3, Users } from "lucide-react";

const Services = () => {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* soft gradient glow background */}
      <div className="absolute inset-0 bg-linear-to-b from-indigo-950/40 via-black to-black pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* section heading */}
        <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          Streamline Your Workflow
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Our ticket management system helps you stay organized, resolve issues
          faster, and keep your team in perfect sync — all in one place.
        </p>

        {/* service cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Efficient Ticketing",
              desc: "Create, assign, and track tickets effortlessly. Stay on top of every task without chaos.",
              icon: <ClipboardList size={36} className="text-cyan-400" />,
            },
            {
              title: "Real-Time Updates",
              desc: "Monitor ticket progress with live status tracking and instant notifications.",
              icon: <Clock size={36} className="text-indigo-400" />,
            },
            {
              title: "Analytics & Insights",
              desc: "Get visual reports on ticket trends, team performance, and workload balance.",
              icon: <BarChart3 size={36} className="text-cyan-300" />,
            },
            {
              title: "Team Collaboration",
              desc: "Empower your team with transparent workflows, shared dashboards, and smooth communication.",
              icon: <Users size={36} className="text-indigo-300" />,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group bg-linear-to-b from-gray-900/60 to-black border border-gray-800 hover:border-cyan-400/40 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.3)]"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* bottom accent gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-cyan-500/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Services;
