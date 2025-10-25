import { useEffect, useState } from "react";
import { Ticket, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets") || "[]");
    setTickets(storedTickets);
  }, []);

  const totalTickets = tickets.length;
  const openTickets = tickets.filter((t) => t.status === "open").length;
  const inProgressTickets = tickets.filter(
    (t) => t.status === "in_progress"
  ).length;
  const closedTickets = tickets.filter((t) => t.status === "closed").length;

  return (
    <section className="max-w-5xl mx-auto text-gray-200 mt-6 space-y-10">
      {/* Header with Back Navigation */}
      <div className="mb-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Dashboard
        </h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-5 flex flex-col items-start hover:bg-gray-800/60 transition-all">
          <div className="flex items-center justify-between w-full">
            <Ticket className="text-cyan-400 w-8 h-8" />
            <span className="text-3xl font-bold">{totalTickets}</span>
          </div>
          <p className="text-gray-400 text-sm mt-2">Total Tickets</p>
        </div>

        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-5 flex flex-col items-start hover:bg-gray-800/60 transition-all">
          <div className="flex items-center justify-between w-full">
            <Clock className="text-amber-400 w-8 h-8" />
            <span className="text-3xl font-bold">{inProgressTickets}</span>
          </div>
          <p className="text-gray-400 text-sm mt-2">In Progress</p>
        </div>

        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-5 flex flex-col items-start hover:bg-gray-800/60 transition-all">
          <div className="flex items-center justify-between w-full">
            <AlertCircle className="text-emerald-400 w-8 h-8" />
            <span className="text-3xl font-bold">{openTickets}</span>
          </div>
          <p className="text-gray-400 text-sm mt-2">Open Tickets</p>
        </div>

        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-5 flex flex-col items-start hover:bg-gray-800/60 transition-all">
          <div className="flex items-center justify-between w-full">
            <CheckCircle className="text-indigo-400 w-8 h-8" />
            <span className="text-3xl font-bold">{closedTickets}</span>
          </div>
          <p className="text-gray-400 text-sm mt-2">Closed Tickets</p>
        </div>
      </div>

      {/* Recent Tickets Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Recent Tickets</h2>
        {tickets.length === 0 ? (
          <div className="border border-gray-700 rounded-xl p-6 text-center text-gray-400">
            No tickets created yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tickets.slice(0, 4).map((ticket) => (
              <div
                key={ticket.id}
                className="bg-gray-900/40 border border-gray-800 hover:bg-gray-800/60 transition-colors rounded-xl p-4"
              >
                <h3 className="text-lg font-semibold">{ticket.title}</h3>
                <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                  {ticket.description || "No description provided."}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-full capitalize ${
                      ticket.status === "open"
                        ? "bg-emerald-400/20 text-emerald-300"
                        : ticket.status === "in_progress"
                        ? "bg-amber-400/20 text-amber-300"
                        : "bg-gray-700/20 text-gray-300"
                    }`}
                  >
                    {ticket.status.replace("_", " ")}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(ticket.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
