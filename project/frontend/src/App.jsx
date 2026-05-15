import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import './App.css'

import Home from './pages/home/Home'
import Menu from './pages/menupage/Menu'
import Register from './pages/register/register'
import Dashboard from './pages/dashboard/dashboard'

function App(){
  return(
    <>
      <Navbar />
        <img/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App