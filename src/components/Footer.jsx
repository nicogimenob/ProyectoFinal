import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: 'var(--surface-dark)', 
      borderTop: '2px solid var(--neon-purple)',
      color: '#aaa',
      padding: '60px 20px 20px 20px',
      marginTop: 'auto' // Esto ayuda a empujarlo siempre hacia abajo
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '40px',
        marginBottom: '40px'
      }}>
        
        {/* Columna 1: Marca y descripción */}
        <div>
          <h3 style={{ color: 'white', fontSize: '1.8rem', margin: '0 0 15px 0', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Urban Fest <span style={{ color: 'var(--neon-purple)' }}>'26</span>
          </h3>
          <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
            El mayor festival de música urbana, pop y electrónica de España. Tres días de locura, música y experiencias inolvidables.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '20px', textTransform: 'uppercase' }}>Explorar</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link to="/" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--neon-purple)'} onMouseOut={(e) => e.target.style.color = '#aaa'}>Inicio</Link></li>
            <li><Link to="/explore" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--neon-purple)'} onMouseOut={(e) => e.target.style.color = '#aaa'}>Cartel y Entradas</Link></li>
            <li><Link to="/about" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--neon-purple)'} onMouseOut={(e) => e.target.style.color = '#aaa'}>Info del Festival</Link></li>
          </ul>
        </div>

        {/* Columna 3: Usuario */}
        <div>
          <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '20px', textTransform: 'uppercase' }}>Tu Cuenta</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link to="/dashboard" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--neon-purple)'} onMouseOut={(e) => e.target.style.color = '#aaa'}>Mi Dashboard</Link></li>
            <li><Link to="/cart" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--neon-purple)'} onMouseOut={(e) => e.target.style.color = '#aaa'}>Carrito</Link></li>
            <li><Link to="/favorites" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--neon-purple)'} onMouseOut={(e) => e.target.style.color = '#aaa'}>Mis Favoritos</Link></li>
          </ul>
        </div>

        {/* Columna 4: Redes Sociales */}
        <div>
          <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '20px', textTransform: 'uppercase' }}>Síguenos</h4>
          <div style={{ display: 'flex', gap: '15px', fontSize: '1.5rem' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>📸</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>🐦</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>🎵</a>
          </div>
          <p style={{ marginTop: '20px', fontSize: '0.9rem' }}>📍 Recinto Ferial Valdespartera, Zaragoza</p>
        </div>

      </div>

      {/* Derechos de autor */}
      <div style={{ 
        borderTop: '1px solid #333', 
        paddingTop: '20px', 
        textAlign: 'center', 
        fontSize: '0.85rem' 
      }}>
        <p>&copy; {new Date().getFullYear()} Urban Fest. Todos los derechos reservados. Proyecto Final React.</p>
      </div>
    </footer>
  )
}