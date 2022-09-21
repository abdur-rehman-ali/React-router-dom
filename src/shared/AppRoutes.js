import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About } from '../components/shared/About'
import { Home } from '../components/shared/Home'


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  )
}
