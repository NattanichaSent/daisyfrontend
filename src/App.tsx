import { useState } from 'react'
import './App.css'
import "../node_modules/daisyui/dist/full.css"
import Navbar from './layout/Navbar'
import "@tailwindcss/typography"
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddUser from './users/AddUser'

function App() {


  return (

    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/adduser' element={<AddUser/>}/>
          
        </Routes>
      </Router>

    </div>
  )
}

export default App
