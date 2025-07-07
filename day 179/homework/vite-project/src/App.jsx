import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import Counter from './components/Counter'
import UserPanel from './components/UserPanel'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider, useAuth } from './contexts/AuthContext'

function AppContent() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen p-4" id="main">
      <ThemeToggle />
      {!user ? <LoginForm /> : (
        <>
          <Counter />
          <UserPanel />
        </>
      )}
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
