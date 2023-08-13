import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div className="container mx-auto flex flex-1 justify-around">
                <div className="flex flex-col">
                    <span className="footer-title">Services</span> 
                    <a className="link link-hover">Gallery</a> 
                    <a className="link link-hover">Shop</a> 
                    <a className="link link-hover">Online Payment</a> 
                    <a className="link link-hover">Delivery</a>
                </div> 
                <div className="flex flex-col">
                    <span className="footer-title">Links</span> 
                    <a className="link link-hover">Cart</a>
                    <a className="link link-hover">Search</a> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                </div> 
                <div className="flex flex-col">
                    <span className="footer-title">Legal</span> 
                    <a className="link link-hover">Terms of use</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
        </footer> 
        <footer className="footer footer-center p-4 bg-neutral text-neutral-content">
            <div>
                <p>Copyright © 2023 - Racing Car </p>
            </div>
        </footer>
    </>
  )
}

export default Footer
