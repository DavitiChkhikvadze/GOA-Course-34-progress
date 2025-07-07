import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (username, password) => {
    const data = JSON.parse(localStorage.getItem(username))
    if (data && data.password === password) {
      const loginTime = new Date().toLocaleString()
      setUser({ username, password, loginTime })
    } else {
      alert("Incorrect username or password")
    }
  }

  const register = (username, password) => {
    if (localStorage.getItem(username)) {
      alert("User already exists!")
      return
    }
    localStorage.setItem(username, JSON.stringify({ password, score: 0 }))
    login(username, password)
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
