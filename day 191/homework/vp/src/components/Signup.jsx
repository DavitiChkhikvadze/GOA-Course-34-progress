import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveUser, setLoggedInUser } from '../utils/storage'

const Signup = () => {
  const [form, setForm] = useState({ gender: '', name: '', description: '', password: '' })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    saveUser(form)
    setLoggedInUser(form.name)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <input className="w-full p-2 border" placeholder="Gender" required onChange={e => setForm({ ...form, gender: e.target.value })} />
      <input className="w-full p-2 border" placeholder="Name" required onChange={e => setForm({ ...form, name: e.target.value })} />
      <textarea className="w-full p-2 border" placeholder="Description" required onChange={e => setForm({ ...form, description: e.target.value })} />
      <input className="w-full p-2 border" type="password" placeholder="Password" required onChange={e => setForm({ ...form, password: e.target.value })} />
      <button className="bg-blue-600 text-white px-4 py-2 w-full">Register</button>
    </form>
  )
}

export default Signup
