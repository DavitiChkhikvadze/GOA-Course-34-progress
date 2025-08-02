import { useParams } from 'react-router-dom'
import { getUsers } from '../utils/storage'

const User = () => {
  const { username } = useParams()
  const users = getUsers()
  const user = users.find(u => u.name === username)

  if (!user) return <p>User not found.</p>

  return (
    <div className="max-w-lg mx-auto space-y-3">
      <h2 className="text-3xl font-bold">{user.name}</h2>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Description:</strong> {user.description}</p>
    </div>
  )
}

export default User
