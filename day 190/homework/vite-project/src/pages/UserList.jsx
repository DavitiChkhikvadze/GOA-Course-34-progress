import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const users = [
  { id: 1, name: 'Daviti Chxikva', age: 15 },
  { id: 2, name: 'Batoni Lasha', age: 16 },
  { id: 3, name: 'Andria Araa', age: 14 }
]

export default function UserList() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = users.find(user => user.name.toLowerCase().includes(search.toLowerCase()))
    if (found) navigate(`/users/${found.id}`)
    else alert('User not found')
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-1 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">Search</button>
      </form>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`} className="text-blue-700 hover:underline">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
