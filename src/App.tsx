import { useState } from 'react'
import './App.css'
import "../node_modules/daisyui/dist/full.css"

import Navbar from './layout/Navbar'
import "@tailwindcss/typography"
import Home from './pages/Home'


function App() {


  return (

    <div className='App'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
