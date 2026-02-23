import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  
  // Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  // Estado para mostrar errores (ej: contraseñas no coinciden)
  const [error, setError] = useState('')

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Validación básica: comprobar que las contraseñas son iguales
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden. ¡Revisa bien! 🕵️‍♂️')
      return
    }

    // Aquí (en un futuro) enviarías los datos a una API real.
    // Por ahora, simulamos el registro con éxito y enviamos al usuario al Login.
    alert('¡Cuenta creada con éxito! Ahora puedes iniciar sesión.')
    navigate('/login')
  }

  return (
    <div style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: '40px 20px' 
    }}>
      <div style={{
        backgroundColor: 'var(--surface-dark)',
        padding: '40px',
        borderRadius: '16px',
        border: '1px solid var(--neon-purple)',
        boxShadow: '0 0 30px rgba(176, 38, 255, 0.15)',
        width: '100%',
        maxWidth: '450px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '10px', marginTop: 0 }}>
          Únete a la <span style={{ color: 'var(--neon-purple)' }}>Fiesta</span>
        </h2>
        <p style={{ color: '#aaa', marginBottom: '30px' }}>
          Crea tu cuenta para comprar entradas y guardar tus artistas favoritos.
        </p>

        {error && (
          <div style={{ backgroundColor: '#ff4d4d20', border: '1px solid #ff4d4d', color: '#ff4d4d', padding: '10px', borderRadius: '8px', marginBottom: '20px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
          
          <div>
            <label style={{ display: 'block', color: '#ccc', marginBottom: '8px', fontSize: '0.9rem' }}>Nombre Completo</label>
            <input 
              type="text" 
              name="name" 
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej. Rosalía Vila"
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', backgroundColor: 'var(--bg-black)', color: 'white', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', color: '#ccc', marginBottom: '8px', fontSize: '0.9rem' }}>Correo Electrónico</label>
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

          <div>
            <label style={{ display: 'block', color: '#ccc', marginBottom: '8px', fontSize: '0.9rem' }}>Confirmar Contraseña</label>
            <input 
              type="password" 
              name="confirmPassword" 
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', backgroundColor: 'var(--bg-black)', color: 'white', boxSizing: 'border-box' }}
            />
          </div>

          <button type="submit" className="neon-button" style={{ padding: '15px', marginTop: '10px', fontSize: '1.1rem', fontWeight: 'bold' }}>
            Crear Cuenta
          </button>
        </form>

        <p style={{ color: '#888', marginTop: '25px', fontSize: '0.9rem' }}>
          ¿Ya tienes cuenta? <Link to="/login" style={{ color: 'var(--neon-purple)', textDecoration: 'none', fontWeight: 'bold' }}>Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  )
}