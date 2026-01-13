import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Login from './pages/Login'
import Sign from './pages/Sign'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/sign-in' element={<Sign />} />
      </Routes>

      <Toaster position='top-right'/>
    </>
  )
}

export default App