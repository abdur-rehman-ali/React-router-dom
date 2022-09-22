import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { FeaturedProducts } from '../components/Products/FeaturedProducts'
import { NewProducts } from '../components/Products/NewProducts'
import { Product } from '../components/Products/Product'
import { Products } from '../components/Products/Products'
// import { About } from '../components/shared/About'
import { Home } from '../components/shared/Home'
import Loading from '../components/shared/Loading'
import { Users } from '../components/Users/Users'
import { PageNotFound } from './PageNotFound'
const LazyAbout = React.lazy((() => import('../components/shared/About.js')))


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='about' element={<About />} /> */}
      <Route
        path='about'
        element={
          <React.Suspense fallback={<Loading/>}>
            <LazyAbout />
          </React.Suspense>
        }
      />
      <Route path='users' element={<Users />} />
      <Route path='products' element={<Products />}>
        <Route index element={<NewProducts />} />
        <Route path='new' element={<NewProducts />} />
        <Route path='featured' element={<FeaturedProducts />} />
      </Route>
      <Route path='products/:id' element={<Product />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
