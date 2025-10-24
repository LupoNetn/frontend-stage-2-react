import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/HomeComponents/Hero'
import Services from '../components/HomeComponents/Services'
import HowWeWork from '../components/HomeComponents/HowWeWork'
import Testimonials from '../components/HomeComponents/Testimonials'

const Home = () => {
  return (
    <section id="home">

      {/* Navigation Menu!
      <div>
        <Navbar />
      </div> */}

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
