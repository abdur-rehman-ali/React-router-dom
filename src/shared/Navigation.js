import React from 'react'
import { Link } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import './Navigation.css'

export const Navigation = () => {
  return (
    <>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
      <Link to='products'>Products</Link>
      <Link to='users'>Users</Link>
    </nav>
    <AppRoutes/>
    </>
  )
}
