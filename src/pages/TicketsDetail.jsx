import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { ArrowLeft, Clock, Flag, Tag } from 'lucide-react'
import { toast } from 'sonner'

const TicketsDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [ticket, setTicket] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTicket = () => {
      try {
        const tickets = JSON.parse(localStorage.getItem('tickets') || '[]')
        const foundTicket = tickets.find(t => t.id === id)
        
        if (foundTicket) {
          setTicket(foundTicket)
        } else {
          toast.error('Ticket not found')
          navigate('/app/tickets')
        }
      } catch (error) {
        toast.error('Error loading ticket')
      } finally {
        setLoading(false)
      }
    }

    fetchTicket()
  }, [id, navigate])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    )
  }

  if (!ticket) return null

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate('/app/tickets')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Tickets
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {ticket.title}
        </h1>
      </div>

      {/* Ticket Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-gray-900/40 border border-gray-700 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Description</h2>
            <p className="text-gray-300 whitespace-pre-wrap">
              {ticket.description || 'No description provided.'}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status Card */}
          <div className="bg-gray-900/40 border border-gray-700 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Details</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Tag className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Status</p>
                  <p className={`inline-flex px-3 py-1 rounded-full text-sm capitalize ${
                    ticket.status === "open"
                      ? "bg-emerald-400/20 text-emerald-300"
                      : ticket.status === "in_progress"
                      ? "bg-amber-400/20 text-amber-300"
                      : "bg-gray-700/20 text-gray-300"
                  }`}>
                    {ticket.status.replace("_", " ")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Flag className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Priority</p>
                  <p className="text-white capitalize">{ticket.priority}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Created</p>
                  <p className="text-white">
                    {new Date(ticket.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketsDetail