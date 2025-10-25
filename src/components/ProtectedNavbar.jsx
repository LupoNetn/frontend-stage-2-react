import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { Menu, X, LayoutDashboard, Ticket, LogOut } from 'lucide-react'

const ProtectedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
    navigate('/auth/login')
  }

  const menuItems = [
    {
      path: '/app',
      name: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />
    },
    {
      path: '/app/tickets',
      name: 'Tickets',
      icon: <Ticket className="w-5 h-5" />
    }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/app" className="flex items-center">
            <span className="text-xl font-bold bg-linear-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              TicketPro
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'text-cyan-400 bg-gray-800/50'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/30'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-red-400 hover:bg-gray-800/30 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/30"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'text-cyan-400 bg-gray-800/50'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/30'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <button
              onClick={() => {
                handleLogout()
                setIsOpen(false)
              }}
              className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-300 hover:text-red-400 hover:bg-gray-800/30 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default ProtectedNavbar