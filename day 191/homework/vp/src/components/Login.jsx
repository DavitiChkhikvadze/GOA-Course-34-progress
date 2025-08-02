import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUsers, setLoggedInUser } from '../utils/storage'

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const users = getUsers()
    const user = users.find(u => u.name === name && u.password === password)
    if (user) {
      setLoggedInUser(name)
      navigate('/')
    } else {
      alert('Incorrect credentials')
    }
  }

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
      <input className="w-full p-2 border" placeholder="Name" onChange={e => setName(e.target.value)} required />
      <input className="w-full p-2 border" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
      <button className="bg-green-600 text-white px-4 py-2 w-full">Log In</button>
    </form>
  )
}

export default Login
