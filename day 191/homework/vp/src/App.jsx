import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './pages/Home'
import User from './pages/User'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  const user = localStorage.getItem('loggedInUser')

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 p-4">
        <Routes>
          {!user && (
            <>
              <Route path="/" element={<Navigate to="/signup" />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
          {user && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/user/:username" element={<User />} />
            </>
          )}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
