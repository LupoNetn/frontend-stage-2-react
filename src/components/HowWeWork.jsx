import React from "react";
import { ClipboardCheck, Users, BarChart3, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Create & Assign Tickets",
    description:
      "Easily generate new tickets and assign them to the right person with clear priorities and deadlines.",
    icon: <ClipboardCheck className="text-cyan-400" size={30} />,
  },
  {
    id: 2,
    title: "Collaborate Seamlessly",
    description:
      "Keep every team member in sync with live status updates, comments, and instant notifications.",
    icon: <Users className="text-indigo-400" size={30} />,
  },
  {
    id: 3,
    title: "Track & Analyze Progress",
    description:
      "Gain insights from powerful analytics dashboards that help you identify bottlenecks and trends.",
    icon: <BarChart3 className="text-cyan-300" size={30} />,
  },
  {
    id: 4,
    title: "Deliver Results",
    description:
      "Resolve tickets efficiently and maintain smooth operations while keeping clients satisfied.",
    icon: <CheckCircle className="text-indigo-300" size={30} />,
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="relative bg-black text-white py-24 overflow-hidden">
      {/* soft background glow */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-indigo-950/30 to-black pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            How We Work
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            From ticket creation to resolution — our process is built to bring
            clarity, speed, and collaboration to your workflow.
          </p>
        </div>

        {/* timeline layout */}
        <div className="relative flex flex-col items-center">
          {/* glowing vertical line */}
          <div className="absolute w-1 bg-linear-to-b from-cyan-500 via-indigo-500 to-transparent rounded-full h-full"></div>

          {/* steps */}
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative flex flex-col md:flex-row items-center gap-8 mb-20 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* connector dot */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-black border border-cyan-400/40 rounded-full shadow-[0_0_25px_-5px_rgba(6,182,212,0.4)]">
                {step.icon}
              </div>

              {/* content card */}
              <div className="md:w-1/2 bg-linear-to-b from-gray-900/60 to-black border border-gray-800 p-8 rounded-2xl backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.3)]">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom gradient accent */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-cyan-500/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HowWeWork;
