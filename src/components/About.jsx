import React from 'react'
import Aboutus from './../assets/images/aboutus.png'

const About = () => {
  return (
    <div id="aboutus" className="container mx-auto px-5 py-16">
        <div className='my-10'>
            <h1 className="text-5xl text-center my-3 text-neutral-200">About Us</h1>
            <p className="text-center text-neutral-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around my-10">
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center gap-4">
                <p className="text-justify text-lg text-neutral-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </p>
            </div>
            <div className="w-full md:w-1/3">
                <img src={Aboutus} alt="" className="w-full" />
            </div>
        </div>
    </div>
  )
}

export default About
