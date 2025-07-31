import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Parameters from './pages/Parameters'
import UserList from './pages/UserList'
import UserDetails from './pages/UserDetails'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/parameters" element={<Parameters />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
