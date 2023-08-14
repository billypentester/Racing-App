import './index.css'
import { Route, Routes } from 'react-router-dom'
import { useState, createContext } from 'react'
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripe'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Cart from './pages/Cart'

const AppContext = createContext()

function App() {

  const [cart, setCart] = useState([])

  return (
    <AppContext.Provider value={{ cart, setCart }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cart" element={ <Elements stripe={stripePromise}> <Cart /> </Elements> } />
      </Routes>
    </AppContext.Provider>
  )
}

export default App
export { AppContext }
