import { useAuth } from '../contexts/AuthContext'

export default function UserPanel() {
  const { user, logout } = useAuth()

  return (
    <div className="mt-4 p-4 border rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white">
      <h3 className="text-lg font-bold mb-2">User Panel</h3>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Password:</strong> {user.password}</p>
      <p><strong>Login Time:</strong> {user.loginTime}</p>
      <button className="mt-3 bg-red-500 text-white px-3 py-1 rounded" onClick={logout}>
        Logout
      </button>
    </div>
  )
}
