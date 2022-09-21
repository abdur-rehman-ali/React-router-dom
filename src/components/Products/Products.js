import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const Products = () => {
  return (
    <>
      <div>
        <h1>Best products shop in the town</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum sapiente facilis qui eum dolorem, non asperiores deleniti iure natus odio in. Impedit, sit? Maxime provident deserunt quisquam necessitatibus voluptatum dolorum et suscipit, quia reiciendis accusantium nesciunt fugit omnis corporis?</p>
      </div>

      <h1>List of all products</h1>
      <ul>
        <li>
          <Link to={`/products/1`}>Product 1</Link>
        </li>
        <li>
          <Link to={`/products/2`}>Product 1</Link>
        </li>
      </ul>
      <nav>
        <Link to='new'> New</Link>
        <Link to='featured'>Featured</Link>
      </nav>
      <Outlet />
    </>
  )
}
