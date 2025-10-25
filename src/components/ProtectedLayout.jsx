import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import ProtectedNavbar from './ProtectedNavbar'
import ScrollToTop from './ScrollToTop';

const ProtectedLayout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      navigate('/auth/login')
    }
  }, [navigate])

  return (
    <div className="min-h-screen bg-gray-900">
      <ScrollToTop />
      <ProtectedNavbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default ProtectedLayout