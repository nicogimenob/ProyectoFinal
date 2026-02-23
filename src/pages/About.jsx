import { useState, useEffect } from 'react'

export default function About() {
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const roles = ["Director del Festival", "Jefa de Sonido", "Coordinador VIP", "Responsable de Seguridad"]

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=4')
        
        if (!response.ok) {
          throw new Error('Hubo un problema al contactar con el servidor')
        }

        const data = await response.json()
        setTeam(data.results)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTeam()
  }, [])

  return (
    <div style={{ padding: '40px 20px', color: 'white', maxWidth: '1000px', margin: '0 auto' }}>
      
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Sobre <span style={{ color: 'var(--neon-purple)' }}>Urban Fest</span>
        </h1>
        <p style={{ color: '#aaa', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
          Nacimos en las calles en 2024 con un solo propósito: traer los mejores ritmos urbanos, el streetwear más exclusivo y la energía más pura a un solo lugar. 
          Urban Fest no es solo un evento musical, es una experiencia donde la música y la moda colisionan.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '2rem', borderBottom: '2px solid var(--neon-purple)', paddingBottom: '10px', marginBottom: '30px' }}>
          Conoce a nuestro equipo
        </h2>

        {loading && <p style={{ color: 'var(--neon-purple)', fontSize: '1.2rem', textAlign: 'center' }}>Cargando personal del festival...</p>}
        {error && <p style={{ color: '#ff4d4d', textAlign: 'center' }}>Error: {error}</p>}

        {!loading && !error && (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '15px' 
          }}>
            {team.map((person, index) => (
              <div 
                key={person.login.uuid} 
                className="festival-card"
                style={{
                  padding: '15px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  minWidth: 0
                }}
              >
                <img 
                  src={person.picture.large} 
                  alt={`${person.name.first} ${person.name.last}`} 
                  style={{
                    width: '100%',
                    maxWidth: '100px',
                    aspectRatio: '1 / 1',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid var(--neon-purple)',
                    boxShadow: '0 0 15px rgba(176, 38, 255, 0.4)'
                  }}
                />
                
                <div style={{ width: '100%', wordBreak: 'break-word' }}>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)' }}>
                    {person.name.first} {person.name.last}
                  </h3>
                  <p style={{ margin: '0', color: 'var(--neon-purple)', fontWeight: 'bold', fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)', textTransform: 'uppercase' }}>
                    {roles[index]}
                  </p>
                  <p style={{ margin: '8px 0 0 0', color: '#888', fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)' }}>
                    📍 {person.location.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  )
}