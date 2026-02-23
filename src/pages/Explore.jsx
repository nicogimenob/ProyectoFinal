import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { products } from '../data/products'
import Card from '../components/Card'

export default function Explore() {
  // 1. Configuración para la animación de los logos (Marquee)
  const marqueeRef = useRef()

  useGSAP(() => {
    // Animación infinita moviendo la cinta hacia la izquierda
    gsap.to(marqueeRef.current, {
      xPercent: -50, // Se mueve la mitad de su ancho total
      ease: "none",
      duration: 20,  // Velocidad (más alto = más lento)
      repeat: -1     // Infinito
    })
  })

  // 2. Los Logos de las Marcas
  // (He usado placeholders que quedan muy bien. Si quieres usar logos reales PNG transparentes, cambia estas URLs)
  const brandLogos = [
    { name: "Nude Project", url: "https://placehold.co/200x80/1a0f2e/ffffff?text=NUDE+PROJECT&font=montserrat" },
    { name: "Scuffers", url: "https://placehold.co/200x80/1a0f2e/ffffff?text=SCUFFERS&font=montserrat" },
    { name: "Cold Culture", url: "https://placehold.co/200x80/1a0f2e/ffffff?text=COLD+CULTURE&font=montserrat" },
    { name: "Blue Banana", url: "https://placehold.co/200x80/1a0f2e/ffffff?text=BLUE+BANANA&font=montserrat" },
    // Repetimos algunas para que la cinta sea larga
    { name: "Urban Fest", url: "https://placehold.co/200x80/1a0f2e/b026ff?text=URBAN+FEST&font=montserrat" },
  ]

  // Duplicamos el array para que el bucle sea infinito sin cortes
  const marqueeContent = [...brandLogos, ...brandLogos, ...brandLogos]


  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Título Principal */}
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '10px', fontSize: '2.5rem', textTransform: 'uppercase' }}>
        Tienda Oficial & <span style={{ color: 'var(--neon-purple)' }}>Pop-Up Stores</span>
      </h1>
      <p style={{ color: '#aaa', textAlign: 'center', marginBottom: '40px' }}>
        Consigue tu abono, merch oficial y visita los stands exclusivos en el recinto.
      </p>

      {/* --- SECCIÓN NUEVA: MARQUEE DE LOGOS --- */}
      <div style={{ 
        marginBottom: '50px', 
        overflow: 'hidden', // Esconde lo que se sale por los lados
        borderTop: '2px solid var(--neon-purple)',
        borderBottom: '2px solid var(--neon-purple)',
        padding: '20px 0',
        backgroundColor: 'rgba(26, 15, 46, 0.5)', // Fondo semitransparente
        position: 'relative'
      }}>
        {/* Sombra lateral para suavizar los bordes */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, var(--bg-black), transparent)', zIndex: 2 }}></div>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, var(--bg-black), transparent)', zIndex: 2 }}></div>

        {/* La cinta que se mueve */}
        <div ref={marqueeRef} style={{ display: 'flex', gap: '60px', width: 'max-content' }}>
          {marqueeContent.map((brand, index) => (
            <img 
              key={index} 
              src={brand.url} 
              alt={brand.name}
              className="brand-logo" // Clase para el efecto hover en CSS
              style={{ 
                height: '50px', // Altura fija para que todos sean iguales
                objectFit: 'contain',
                // Estilo inicial: un poco apagado/morado
                filter: 'grayscale(100%) brightness(0.8) sepia(1) hue-rotate(240deg) saturate(2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              // Efecto Hover inline (para que se "encienda")
              onMouseOver={(e) => {
                 e.currentTarget.style.filter = 'none' // Quita el filtro apagado
                 e.currentTarget.style.transform = 'scale(1.1)'
                 e.currentTarget.style.filter = 'drop-shadow(0 0 10px var(--neon-purple))'
              }}
              onMouseOut={(e) => {
                 // Vuelve al estado apagado
                 e.currentTarget.style.filter = 'grayscale(100%) brightness(0.8) sepia(1) hue-rotate(240deg) saturate(2)'
                 e.currentTarget.style.transform = 'scale(1)'
              }}
            />
          ))}
        </div>
      </div>
      {/* ------------------------------------ */}


      {/* Grid de Productos (Esto sigue igual que antes) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px',
        justifyItems: 'center'
      }}>
        {products.map(product => (
          <div key={product.id} style={{ width: '100%', maxWidth: '380px' }}>
            <Card product={product} />
          </div>
        ))}
      </div>
      
    </div>
  )
}