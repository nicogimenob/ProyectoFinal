import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'

export default function Navbar() {
  const { user } = useContext(AuthContext)
  const { cart } = useContext(CartContext)

  // Calculamos cuántos artículos hay en total en el carrito
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  // Estilos reutilizables para los enlaces limpios
  const linkStyle = {
    color: 'var(--text-main)',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'color 0.3s ease'
  }

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '15px 40px', 
      backgroundColor: 'var(--surface-dark)', 
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky', // Hace que el menú se quede pegado arriba al hacer scroll
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
    }}>
      
      {/* LOGO */}
      <div style={{ fontSize: '1.8rem', fontWeight: '900', letterSpacing: '2px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          URBAN<span style={{ color: 'var(--neon-purple)' }}>FEST</span>
        </Link>
      </div>

      {/* ENLACES CENTRALES (Públicos) */}
      <div style={{ display: 'flex', gap: '30px' }}>
        <Link to="/" style={linkStyle}>Inicio</Link>
        <Link to="/explore" style={linkStyle}>Explorar</Link>
        <Link to="/about" style={linkStyle}>Info</Link>
      </div>

      {/* ZONA DERECHA (Usuario y Carrito) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {user ? (
          <>
            <Link to="/favorites" style={{ textDecoration: 'none', fontSize: '1.2rem' }}>
              🤍
            </Link>
            
            <Link to="/cart" style={{ textDecoration: 'none', fontSize: '1.2rem', position: 'relative' }}>
              🛒
              {/* Globito con el contador del carrito */}
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-10px',
                  backgroundColor: 'var(--neon-purple)',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  borderRadius: '50%',
                  padding: '2px 6px',
                  boxShadow: '0 0 5px rgba(176, 38, 255, 0.5)'
                }}>
                  {cartCount}
                </span>
              )}
            </Link>

            <Link to="/dashboard" className="outline-button" style={{ textDecoration: 'none', padding: '8px 15px' }}>
              Mi Perfil
            </Link>
          </>
        ) : (
          <Link to="/login" className="neon-button" style={{ textDecoration: 'none', padding: '8px 20px' }}>
            Iniciar Sesión
          </Link>
        )}
      </div>

    </nav>
  )
}