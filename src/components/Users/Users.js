import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUser = searchParams.get('filter') === 'active'
  return (
    <div>
      <h1>List of all users</h1>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
      <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
      <button onClick={() => setSearchParams({})}>Reset fiters</button>
      {
        showActiveUser ? <h1>List of active user</h1> : <div> <h1>All users </h1> </div>
      }
    </div>
  )
}
