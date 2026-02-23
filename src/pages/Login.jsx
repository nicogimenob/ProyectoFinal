import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext) 
  
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const fakeUser = {
      name: formData.email.split('@')[0],
      email: formData.email
    }

    login(fakeUser) 
    navigate('/dashboard')
  }

  return (
    <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px 20px' }}>
      <div style={{ backgroundColor: 'var(--surface-dark)', padding: '40px', borderRadius: '16px', border: '1px solid var(--neon-purple)', boxShadow: '0 0 30px rgba(176, 38, 255, 0.15)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '10px', marginTop: 0 }}>
          Acceso <span style={{ color: 'var(--neon-purple)' }}>VIP</span>
        </h2>
        <p style={{ color: '#aaa', marginBottom: '30px' }}>Introduce tus credenciales para entrar.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', color: '#ccc', marginBottom: '8px', fontSize: '0.9rem' }}>Email</label>
            <input 
              type="email" 
              name="email" 
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', backgroundColor: 'var(--bg-black)', color: 'white', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', color: '#ccc', marginBottom: '8px', fontSize: '0.9rem' }}>Contraseña</label>
            <input 
              type="password" 
              name="password" 
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', backgroundColor: 'var(--bg-black)', color: 'white', boxSizing: 'border-box' }}
            />
          </div>

          <button type="submit" className="neon-button" style={{ padding: '15px', marginTop: '10px', fontSize: '1.1rem', fontWeight: 'bold' }}>
            Entrar
          </button>
        </form>

        <p style={{ color: '#888', marginTop: '25px', fontSize: '0.9rem' }}>
          ¿No tienes cuenta? <Link to="/register" style={{ color: 'var(--neon-purple)', textDecoration: 'none', fontWeight: 'bold' }}>Regístrate aquí</Link>
        </p>
      </div>
    </div>
  )
}