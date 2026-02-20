import { Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Explore from './pages/Explore'
import Detail from './pages/Detail'
import Login from './pages/Login'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
          <CartProvider>
            <>
              <Navbar />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/product/:id" element={<Detail />} />
                <Route path="/login" element={<Login />} />
            {/*    <Route path="/favorites" element={<Favorites />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/dashboard" element={<Dashboard />} />*/}
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Route>
              </Routes>
            </>
          </CartProvider>
      </FavoritesProvider>
    </AuthProvider>
  )
}

export default App
