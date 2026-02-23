import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/') 
  }

  if (!user) return null

  return (
    <div style={{ padding: '40px 20px', color: 'white', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
        ¡Bienvenido a tu Zona VIP, <span style={{ color: 'var(--neon-purple)' }}>{user.name}</span>! 🎸
      </h1>
      
      <p style={{ color: '#aaa', marginBottom: '40px', fontSize: '1.1rem' }}>
        Registrado con: {user.email}
      </p>

      <div style={{ 
        backgroundColor: 'var(--surface-dark)', 
        padding: '40px', 
        borderRadius: '12px', 
        border: '1px solid var(--border-color)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        alignItems: 'center'
      }}>
        
        <h2>¿Qué quieres hacer hoy?</h2>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="neon-button" onClick={() => navigate('/cart')}>
            Ver mi Carrito 🛒
          </button>
          
          <button className="outline-button" onClick={() => navigate('/favorites')}>
            Mis Favoritos 🤍
          </button>
        </div>
        
        <div style={{ width: '100%', height: '1px', backgroundColor: '#333', margin: '10px 0' }}></div>

        <button 
          onClick={handleLogout}
          style={{ 
            padding: '10px 25px', 
            backgroundColor: 'transparent', 
            color: '#ff4d4d', 
            border: '1px solid #ff4d4d', 
            borderRadius: '6px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 77, 77, 0.1)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Cerrar Sesión
        </button>

      </div>
    </div>
  )
}