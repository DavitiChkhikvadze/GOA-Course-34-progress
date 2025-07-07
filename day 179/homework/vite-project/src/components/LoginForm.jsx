import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, register } = useAuth()

  return (
    <div className="max-w-sm mx-auto p-4 border rounded bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-2 text-center">Login or Register</h2>
      <input className="w-full p-2 mb-2 border" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input className="w-full p-2 mb-2 border" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <div className="flex gap-2">
        <button className="flex-1 bg-blue-500 text-white p-2 rounded" onClick={() => login(username, password)}>Login</button>
        <button className="flex-1 bg-green-500 text-white p-2 rounded" onClick={() => register(username, password)}>Register</button>
      </div>
    </div>
  )
}
