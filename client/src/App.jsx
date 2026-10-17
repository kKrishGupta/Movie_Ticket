import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Movies from './components/Movies';
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <Banner />
      <Movies />
      <main className="flex-1 pt-28 sm:pt-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
