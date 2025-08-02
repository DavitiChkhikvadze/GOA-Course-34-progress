import { Link } from 'react-router-dom'

const UserCard = ({ user }) => (
  <Link to={`/user/${user.name}`} className="border p-4 rounded hover:bg-gray-100">
    <h3 className="font-bold">{user.name}</h3>
    <p>{user.gender}</p>
    <p className="text-sm text-gray-600">{user.description}</p>
  </Link>
)

export default UserCard
