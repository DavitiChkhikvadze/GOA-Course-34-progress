import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-700 underline mt-4 block">Go Back Home</Link>
    </div>
  )
}
