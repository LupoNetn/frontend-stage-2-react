import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'

const AppLayout = () => {
  return (
    <div className='min-h-screen max-w-[1440px] mx-auto'>
      <div>
        <Navbar />
      </div>
      <ScrollToTop />
      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default AppLayout
