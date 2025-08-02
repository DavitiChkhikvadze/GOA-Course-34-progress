import { Link } from 'react-router-dom'

const Navbar = () => {
  const user = localStorage.getItem('loggedInUser')

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">MySite</Link>
      {user && <span>Welcome, {user}</span>}
    </nav>
  )
}

export default Navbar
