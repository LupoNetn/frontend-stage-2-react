import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import HowWeWork from '../components/HowWeWork'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <section id="home">

      {/* Navigation Menu! */}
      <div>
        <Navbar />
      </div>

      {/* Hero Section */}
      <div>
        <Hero />
      </div>

      {/* Services */}
      <div>
        <Services />
      </div>

      {/* How it Works */}
      <div>
        <HowWeWork />
      </div>

      {/* Testimonials */}
      <div>
        <Testimonials />
      </div>
    </section>
  )
}

export default Home
