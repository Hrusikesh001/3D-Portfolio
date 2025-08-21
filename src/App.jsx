import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      {/* navbar */}
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
