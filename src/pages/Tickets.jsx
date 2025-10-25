import {
  PlusCircle,
  Pencil,
  Trash2,
  LayoutGrid,
  Table,
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Link } from "react-router";
import TicketModal from "../components/TicketModal";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);
  const [view, setView] = useState("card"); // "card" | "table"

  // Load tickets from localStorage
  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets") || "[]");
    setTickets(storedTickets);
  }, []);

  const handleAddTicket = () => {
    setEditingTicket(null);
    setIsModalOpen(true);
  };

  const handleEditTicket = (ticket) => {
    setEditingTicket(ticket);
    setIsModalOpen(true);
  };

  const handleSaveTicket = (data) => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets") || "[]");
    let updatedTickets;

    if (data.id) {
      updatedTickets = storedTickets.map((t) =>
        t.id === data.id ? { ...t, ...data } : t
      );
    } else {
      const newTicket = {
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      updatedTickets = [newTicket, ...storedTickets];
    }

    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
    setTickets(updatedTickets);
    setIsModalOpen(false);
  };

  const handleDeleteTicket = async (id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this ticket?"
      );

      if (!confirmed) return;

      toast.promise(
        new Promise((resolve) => {
          const storedTickets = JSON.parse(
            localStorage.getItem("tickets") || "[]"
          );
          const updatedTickets = storedTickets.filter((t) => t.id !== id);
          localStorage.setItem("tickets", JSON.stringify(updatedTickets));
          setTickets(updatedTickets);
          setTimeout(resolve, 500);
        }),
        {
          loading: "Deleting ticket...",
          success: "Ticket deleted successfully!",
          error: "Failed to delete ticket",
        }
      );
    } catch (error) {
      console.error("Error deleting ticket:", error);
      toast.error("Failed to delete ticket");
    }
  };

  return (
    <section className="text-gray-200 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold">
            Wassup{" "}
            <span className="bg-linear-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Oluwatobi,
            </span>
          </h1>
          <p className="text-lg text-gray-400">
            View and manage all tickets from here!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setView(view === "card" ? "table" : "card")}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            title="Toggle View"
          >
            {view === "card" ? (
              <Table className="w-5 h-5 text-gray-300" />
            ) : (
              <LayoutGrid className="w-5 h-5 text-gray-300" />
            )}
          </button>

          <button
            onClick={handleAddTicket}
            className="flex items-center gap-2 bg-linear-to-r from-cyan-500 to-indigo-600 px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Add Ticket</span>
          </button>
        </div>
      </div>

      {/* Tickets Display */}
      <div className="mt-10">
        {tickets.length === 0 ? (
          <div className="border border-gray-700 rounded-xl p-6 text-center text-gray-400">
            <p>No tickets yet. Click "Add Ticket" to create one.</p>
          </div>
        ) : view === "card" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-gray-900/40 hover:bg-gray-800/60 transition-colors border border-gray-700 rounded-xl p-4 flex flex-col justify-between"
              >
                <Link
                  to={`/app/tickets/${ticket.id}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  <h3 className="text-lg font-semibold">{ticket.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {ticket.description?.slice(0, 80) || "No description"}
                    {ticket.description?.length > 80 && "..."}
                  </p>
                </Link>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full capitalize ${
                        ticket.status === "open"
                          ? "bg-emerald-400/20 text-emerald-300"
                          : ticket.status === "in_progress"
                          ? "bg-amber-400/20 text-amber-300"
                          : "bg-gray-700/20 text-gray-300"
                      }`}
                    >
                      {ticket.status.replace("_", " ")}
                    </span>
                    <span className="px-3 py-1 rounded-full capitalize border border-gray-600 text-gray-300">
                      {ticket.priority}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditTicket(ticket)}
                      className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                    >
                      <Pencil className="w-4 h-4 text-gray-400" />
                    </button>
                    <button
                      onClick={() => handleDeleteTicket(ticket.id)}
                      className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // TABLE VIEW
          <div className="overflow-x-auto border border-gray-800 rounded-xl">
            <table className="min-w-full divide-y divide-gray-800">
              <thead>
                <tr className="bg-gray-900/60">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                    Title
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                    Priority
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                    Created
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {tickets.map((ticket) => (
                  <tr
                    key={ticket.id}
                    className="hover:bg-gray-800/40 transition-colors"
                  >
                    <td className="px-4 py-3 text-sm">
                      <Link
                        to={`/app/tickets/${ticket.id}`}
                        className="hover:text-cyan-400 transition-colors font-medium"
                      >
                        {ticket.title}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-sm capitalize">
                      {ticket.status}
                    </td>
                    <td className="px-4 py-3 text-sm capitalize">
                      {ticket.priority}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-400">
                      {new Date(ticket.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleEditTicket(ticket)}
                          className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                        >
                          <Pencil className="w-4 h-4 text-gray-400" />
                        </button>
                        <button
                          onClick={() => handleDeleteTicket(ticket.id)}
                          className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Ticket Modal */}
      <TicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTicket}
        initialData={editingTicket}
      />
    </section>
  );
};

export default Tickets;
