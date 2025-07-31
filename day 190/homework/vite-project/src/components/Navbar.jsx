import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
      <Link to="/parameters" className="hover:underline">Parameters</Link>
      <Link to="/users" className="hover:underline">Users</Link>
    </nav>
  )
}
