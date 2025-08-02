import { Link } from 'react-router-dom'

const ErrorPage = () => (
  <div className="text-center mt-20">
    <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    <p className="mt-4">The page you're looking for doesn't exist.</p>
    <Link to="/" className="text-blue-500 underline mt-4 block">Go Home</Link>
  </div>
)

export default ErrorPage
