import { getUsers } from '../utils/storage'
import UserCard from '../components/UserCard'

const Home = () => {
  const users = getUsers()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {users.map(user => <UserCard key={user.name} user={user} />)}
    </div>
  )
}

export default Home
