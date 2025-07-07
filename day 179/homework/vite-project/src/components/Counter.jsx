import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Counter() {
  const { user } = useAuth()
  const [score, setScore] = useState(0)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(user.username))
    if (data) setScore(data.score || 0)
  }, [user])

  const increment = () => {
    const newScore = score + 1
    setScore(newScore)
    const data = JSON.parse(localStorage.getItem(user.username))
    localStorage.setItem(user.username, JSON.stringify({ ...data, score: newScore }))
  }

  return (
    <div className="my-4 text-center">
      <h2 className="text-2xl mb-2">Counter: {score}</h2>
      <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={increment}>
        Increment
      </button>
    </div>
  )
}
