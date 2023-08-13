import React from 'react'

import Hero from '../components/Hero'
import Contact from '../components/Contact'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Hero />
        <div className="bg-neutral">
          <About />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default Home
