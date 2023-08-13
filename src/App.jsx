import './index.css'
import { Route, Routes } from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './pages/Home'
import Gallery from './pages/Gallery'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  )
}

export default App
