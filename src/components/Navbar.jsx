import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from './../App'

const Navbar = () => {

    const { cart, setCart } = useContext(AppContext)

    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="container mx-auto px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" className='hover:bg-neutral-200 hover:text-neutral-800'>Home</Link></li>
                        <li><Link to="/gallery" className='hover:bg-neutral-200 hover:text-neutral-800'>Gallery</Link></li>
                        <li><a href="/#aboutus" className='hover:bg-neutral-200 hover:text-neutral-800'>About us</a></li>
                        <li><a href="#contact" className='hover:bg-neutral-200 hover:text-neutral-800'>Contact</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Racing Car</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        <li><Link to="/" className='hover:bg-neutral-200 hover:text-neutral-800 active:text-yellow-500'>Home</Link></li>
                        <li><Link to="/gallery" className='hover:bg-neutral-200 hover:text-neutral-800'>Gallery</Link></li>
                        <li><a href="/#aboutus" className='hover:bg-neutral-200 hover:text-neutral-800'>About us</a></li>
                        <li><a href="#contact" className='hover:bg-neutral-200 hover:text-neutral-800'>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end text-end">
                    <Link to="/cart" className="btn">
                        {
                            cart && cart.length > 0 ? <span className="p-2 rounded-md bg-neutral text-neutral-200">{cart.length}</span> : ''
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Navbar
