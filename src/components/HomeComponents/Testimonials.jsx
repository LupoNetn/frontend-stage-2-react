import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager, NovaTech",
    text: "This ticketing system completely changed how our team handles support. The real-time updates and analytics keep us aligned and productive every day.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Kim",
    role: "Team Lead, CloudSync",
    text: "Finally, a platform that’s both intuitive and powerful. The workflow feels effortless — tracking tickets has never been smoother!",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "Amelia Wright",
    role: "Operations Head, FlowDesk",
    text: "Our resolution rate skyrocketed after switching. The dashboard is clean, fast, and simply brilliant.",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[index];

  return (
    <section className="relative py-24 bg-linear-to-b from-black via-gray-950 to-black text-white overflow-hidden">
      {/* glowing background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-40 w-80 h-80 bg-indigo-600/20 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* heading */}
        <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-400 mb-12">
          Trusted by teams across the globe to simplify ticket management and
          deliver outstanding results.
        </p>

        {/* testimonial carousel */}
        <div className="relative h-[380px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative bg-linear-to-b from-gray-900/60 to-black p-10 rounded-3xl border border-gray-800 shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] backdrop-blur-lg hover:border-cyan-400/40 transition-all max-w-2xl mx-auto"
            >
              {/* glowing quote mark */}
              <div className="absolute top-4 left-8 text-cyan-400 text-5xl opacity-20 select-none">
                “
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 mt-6 italic">
                {t.text}
              </p>

              {/* rating */}
              <div className="flex justify-center gap-1 mb-6">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
              </div>

              {/* user info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border border-cyan-400/40"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-white text-lg">
                    {t.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* navigation dots */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-cyan-400 w-6"
                    : "bg-gray-600 hover:bg-cyan-500/50"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* bottom subtle glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-cyan-500/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;
