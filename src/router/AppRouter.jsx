import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Explore from '../pages/Explore'
import Detail from '../pages/Detail'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Favorites from '../pages/Favorites'
import Cart from '../pages/Cart'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import ProtectedRoute from '../components/ProtectedRoute'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/product/:id" element={<Detail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
