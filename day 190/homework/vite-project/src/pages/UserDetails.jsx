import { useParams } from 'react-router-dom'

const users = [
  { id: 1, name: 'Daviti Chxikva', age: 15, email: 'data@example.com' },
  { id: 2, name: 'Batoni Lasha', age: 16, email: 'lasha@example.com' },
  { id: 3, name: 'Andria Araa', age: 14, email: 'andria@example.com' }
]

export default function UserDetails() {
  const { id } = useParams()
  const user = users.find(u => u.id === parseInt(id))

  if (!user) return <p className="text-red-600 font-semibold">User not found.</p>

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  )
}
