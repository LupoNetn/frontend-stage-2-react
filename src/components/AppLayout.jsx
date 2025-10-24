import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'

const AppLayout = () => {
  return (
    <div className='min-h-screen max-w-[1440px] mx-auto'>
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
