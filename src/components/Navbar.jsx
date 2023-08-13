import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
        <div className="container mx-auto px-10">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>Gallery</a></li>
                    <li><a>About us</a></li>
                    <li><a>Contact</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Racing Car</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    <li><Link to="/" className='hover:bg-neutral-200 hover:text-neutral-800'>Home</Link></li>
                    <li><Link to="/gallery" className='hover:bg-neutral-200 hover:text-neutral-800'>Gallery</Link></li>
                    <li><a className='hover:bg-neutral-200 hover:text-neutral-800'>About us</a></li>
                    <li><a href="#contact" className='hover:bg-neutral-200 hover:text-neutral-800'>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end text-end">
                <a className="btn">Cart</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
