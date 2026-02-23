import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center',
      padding: '20px',
      background: 'radial-gradient(circle at center, #1a0f2e 0%, var(--bg-black) 100%)'
    }}>
      
      <h1 style={{ 
        fontSize: 'clamp(6rem, 15vw, 10rem)', 
        margin: '0', 
        color: 'transparent',
        WebkitTextStroke: '2px var(--neon-purple)',
        textShadow: '0 0 20px rgba(176, 38, 255, 0.5), 0 0 40px rgba(176, 38, 255, 0.2)',
        fontFamily: 'monospace',
        letterSpacing: '-5px'
      }}>
        404
      </h1>

      <h2 style={{ 
        color: 'white', 
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
        textTransform: 'uppercase', 
        marginTop: '-10px',
        marginBottom: '20px',
        letterSpacing: '3px'
      }}>
        ¡Escenario Equivocado! 🚫
      </h2>

      <p style={{ 
        color: '#aaa', 
        fontSize: '1.2rem', 
        maxWidth: '500px', 
        lineHeight: '1.6',
        marginBottom: '40px'
      }}>
        Parece que te has perdido en el moshpit. La carpa que buscas ya cerró o nunca existió en este festival.
      </p>

      <Link to="/" className="neon-button" style={{ 
        textDecoration: 'none', 
        padding: '15px 40px', 
        fontSize: '1.2rem', 
        textTransform: 'uppercase', 
        fontWeight: 'bold',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <span>🏠</span> Volver al Main Stage
      </Link>
      
    </div>
  )
}