import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="heroBackground">
        <div className="overlay">
            <h1 className='text-5xl text-neutral-200 font-bold my-3'>Pics from your local photographers</h1>
            <h2 className='text-xl text-neutral-200 my-3'>Download your racing pictures from your favorite photographers for the cost of a coffee.</h2>
            <Link to="/gallery" className='btn btn-light my-4'>Shop Now</Link>
        </div>
    </div>
  )
}

export default Hero
