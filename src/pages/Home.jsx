import { Link } from 'react-router-dom'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Home() {
  const carouselRef = useRef()

  useGSAP(() => {
    gsap.to(carouselRef.current, {
      xPercent: -50, 
      ease: "none",
      duration: 25,
      repeat: -1 
    })
  })

  const carouselImages = [
    "https://i.scdn.co/image/ab6761610000e5eb8d54cd36e5e639bf4d4f5583",
    "https://i.scdn.co/image/ab6761610000e5eb81f47f44084e0a09b5f0fa13",
    "https://i.scdn.co/image/ab6761610000e5eb78a3800c3ef6e6e5f5cfc9a2",
    "https://i.scdn.co/image/ab6775700000ee85a4a12d4696381b41b815e050",
    "https://i.scdn.co/image/ab6761610000e5ebc9961730f0c082259ac0c22a",
    "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da843bf562a618ea6dc967551db1"
  ]
  const duplicatedImages = [...carouselImages, ...carouselImages]

  const lineup = [
    {
      day: "Viernes 12 - Opening",
      stages: [
        { name: "🔥 Main Stage (Urbano)", artists: ["Bad Bunny", "Eladio Carrión", "Jhayco", "Álvaro Díaz", "Jon Z", "Mvrk"] },
        { name: "🎸 Live Stage (Pop/Hits)", artists: ["Alejandro Sanz", "Dani Martín", "Antonio Orozco", "Leiva", "Amaral"] },
        { name: "🎛️ Club Tent (DJs & Club)", artists: ["Paco Osuna", "DJ Nano", "Dennis Cruz"] }
      ]
    },
    {
      day: "Sábado 13 - El Clímax",
      stages: [
        { name: "🔥 Main Stage (Urbano)", artists: ["Rauw Alejandro", "Anuel AA", "Myke Towers", "Bryant Myers", "Omar Courtz", "Hecky"] },
        { name: "🎸 Live Stage (Pop/Hits)", artists: ["David Bisbal", "Melendi", "Manuel Carrasco", "Malú", "El Canto del Loco"] },
        { name: "🎛️ Club Tent (DJs & Club)", artists: ["Wade", "Cuartero", "Fátima Hajji"] }
      ]
    },
    {
      day: "Domingo 14 - Closing Party",
      stages: [
        { name: "🔥 Main Stage (Urbano)", artists: ["Quevedo", "Duki", "Arcángel", "Mora", "Jay Wheeler", "Luar La L", "Pikeras"] },
        { name: "🎸 Live Stage (Pop/Hits)", artists: ["Pablo Alborán", "Dani Fernández", "Estopa", "Siloé", "Rosario"] },
        { name: "🎛️ Club Tent (DJs & Club)", artists: ["Tainy", "Andrés Campo", "Óscar Mulero", "Edu Imbernon"] }
      ]
    }
  ]

  return (
    <div>
      <section style={{ 
        height: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center',
        padding: '20px',
        background: 'linear-gradient(to bottom, rgba(18, 14, 24, 0.4), var(--bg-black)), url("https://images.unsplash.com/photo-1540039155732-68087418a508?q=80&w=1920&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '2px solid var(--neon-purple)'
      }}>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', margin: '0', color: 'white', textTransform: 'uppercase', letterSpacing: '5px', textShadow: '0 0 20px rgba(176, 38, 255, 0.8)' }}>
          Urban Fest <span style={{ color: 'var(--neon-purple)' }}>2026</span>
        </h1>
        <p style={{ color: '#ddd', fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', maxWidth: '800px', margin: '20px 0 40px 0', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
          El mayor crossover de géneros de la historia. Urbano, Pop y Tech-House en 3 días inolvidables. ¿Estás ready?
        </p>
        <Link to="/explore" className="neon-button" style={{ textDecoration: 'none', padding: '20px 40px', fontSize: '1.5rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
          Comprar Entradas 🔥
        </Link>
      </section>

      <section style={{ 
        padding: '40px 0', 
        backgroundColor: 'var(--surface-dark)', 
        overflow: 'hidden',
        borderBottom: '1px solid #333'
      }}>
        <h3 style={{ textAlign: 'center', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '30px' }}>
          Artistas Confirmados
        </h3>
        
        <div 
          ref={carouselRef} 
          style={{ 
            display: 'flex', 
            gap: '20px', 
            width: 'max-content'
          }}
        >
          {duplicatedImages.map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt="Artista" 
              style={{
                width: '250px',
                height: '350px',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                border: '2px solid transparent',
              }}
              onError={(e) => { e.target.src = "https://via.placeholder.com/250x350/120e18/b026ff?text=ARTISTA" }}
            />
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 20px', maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: 'white', fontSize: '3.5rem', textTransform: 'uppercase', marginBottom: '60px', letterSpacing: '2px' }}>
          Line-Up <span style={{ color: 'var(--neon-purple)' }}>Oficial</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {lineup.map((dayData, index) => (
            <div key={index} style={{ backgroundColor: 'var(--surface-dark)', padding: '40px', borderRadius: '16px', border: '1px solid #333', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <h3 style={{ color: 'white', fontSize: '2.5rem', margin: '0 0 30px 0', textTransform: 'uppercase', borderBottom: '2px solid var(--neon-purple)', paddingBottom: '10px', textAlign: 'center' }}>
                {dayData.day}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                {dayData.stages.map((stage, i) => (
                  <div key={i} className="lineup-card" style={{ backgroundColor: 'rgba(0,0,0,0.4)', padding: '25px', borderRadius: '12px', border: '1px solid #222', transition: 'transform 0.3s ease, border-color 0.3s ease' }}>
                    <h4 style={{ color: 'var(--neon-purple)', fontSize: '1.3rem', margin: '0 0 20px 0', letterSpacing: '1px' }}>{stage.name}</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {stage.artists.map((artist, j) => (
                        <li key={j} style={{ 
                          color: j === 0 ? 'white' : '#ccc', 
                          fontSize: j === 0 ? '1.8rem' : '1.1rem', 
                          fontWeight: j === 0 ? '900' : 'normal',
                          marginBottom: j === 0 ? '15px' : '8px',
                          textTransform: j === 0 ? 'uppercase' : 'none'
                        }}>
                          {artist}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--neon-purple)', padding: '40px 20px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase' }}>
        <div>🎵 +30 Artistas TOP</div>
        <div>🎪 3 Escenarios Simultáneos</div>
        <div>⛺ Glamping VIP</div>
        <div>👕 Merch Exclusivo</div>
      </section>
    </div>
  )
}