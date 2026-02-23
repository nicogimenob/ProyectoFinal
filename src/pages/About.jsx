import { useState, useEffect } from 'react'

export default function About() {
  // Estados para manejar los datos de la API, la carga y los posibles errores
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Roles ficticios para darle más realismo al festival
  const roles = ["Director del Festival", "Jefa de Sonido", "Coordinador VIP", "Responsable de Seguridad"]

  // useEffect se ejecuta automáticamente cuando el usuario entra en esta página
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        // Hacemos el fetch a la Random User API pidiendo 4 resultados
        const response = await fetch('https://randomuser.me/api/?results=4')
        
        if (!response.ok) {
          throw new Error('Hubo un problema al contactar con el servidor')
        }

        const data = await response.json()
        setTeam(data.results) // Guardamos los usuarios en el estado
      } catch (err) {
        setError(err.message) // Si hay error, lo guardamos
      } finally {
        setLoading(false) // Quitamos el estado de carga
      }
    }

    fetchTeam()
  }, []) // El array vacío asegura que esto solo se ejecute 1 vez al cargar la página

  return (
    <div style={{ padding: '40px 20px', color: 'white', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* SECCIÓN 1: HISTORIA DEL FESTIVAL */}
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Sobre <span style={{ color: 'var(--neon-purple)' }}>Urban Fest</span>
        </h1>
        <p style={{ color: '#aaa', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
          Nacimos en las calles en 2024 con un solo propósito: traer los mejores ritmos urbanos, el streetwear más exclusivo y la energía más pura a un solo lugar. 
          Urban Fest no es solo un evento musical, es una experiencia donde la música y la moda colisionan.
        </p>
      </section>

      {/* SECCIÓN 2: NUESTRO EQUIPO (El Fetch) */}
      <section>
        <h2 style={{ fontSize: '2rem', borderBottom: '2px solid var(--neon-purple)', paddingBottom: '10px', marginBottom: '30px' }}>
          Conoce a nuestro equipo
        </h2>

        {/* Manejo de estados de la API */}
        {loading && <p style={{ color: 'var(--neon-purple)', fontSize: '1.2rem', textAlign: 'center' }}>Cargando personal del festival...</p>}
        {error && <p style={{ color: '#ff4d4d', textAlign: 'center' }}>Error: {error}</p>}

        {/* Grid para pintar los usuarios cuando ya han cargado */}
        {/* Grid para pintar los usuarios cuando ya han cargado */}
        {!loading && !error && (
          <div style={{ 
            display: 'grid', 
            /* LA MAGIA ESTÁ AQUÍ: Fuerza 4 columnas proporcionales siempre */
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
                  minWidth: 0 /* Súper importante para que el texto encoga sin romper la caja */
                }}
              >
                {/* Foto del empleado adaptable */}
                <img 
                  src={person.picture.large} 
                  alt={`${person.name.first} ${person.name.last}`} 
                  style={{
                    width: '100%', // Se adapta al ancho de su contenedor
                    maxWidth: '100px', // Pero nunca será más grande que esto
                    aspectRatio: '1 / 1', // Mantiene la forma cuadrada para que el radius haga un círculo perfecto
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid var(--neon-purple)',
                    boxShadow: '0 0 15px rgba(176, 38, 255, 0.4)'
                  }}
                />
                
                {/* Datos del empleado */}
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