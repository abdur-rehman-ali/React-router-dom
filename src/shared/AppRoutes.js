import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { FeaturedProducts } from '../components/Products/FeaturedProducts'
import { NewProducts } from '../components/Products/NewProducts'
import { Products } from '../components/Products/Products'
import { About } from '../components/shared/About'
import { Home } from '../components/shared/Home'


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='products' element={<Products />}>
        <Route path='new' element={<NewProducts />} />
        <Route path='featured' element={<FeaturedProducts />} />
      </Route>
    </Routes>
  )
}
