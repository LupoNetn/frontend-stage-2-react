import { LogInIcon } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex justify-between items-center backdrop-blur-md bg-gray-800/80 shadow-lg rounded-2xl px-4 md:px-6 py-3 border border-white/20'>
          <div>
            <h3 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Ticketr.
          </h3>
          </div>
          <div>
            <button className='flex gap-2 items-center px-4 py-2 rounded-lg bg-black/80 shadow-lg text-white hover:bg-gray-700/90 transition-all duration-300'>
              <LogInIcon className='w-4 h-4' />
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar