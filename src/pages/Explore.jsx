import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { products } from '../data/products'
import Card from '../components/Card'

export default function Explore() {
  const marqueeRef = useRef()

  useGSAP(() => {
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1
    })
  })

  const brandLogos = [
    { name: "Nude Project", url: "https://placehold.co/200x80/1a0f2e/ffffff?text=NUDE+PROJECT&font=montserrat" },
    { name: "Scuffers", url: "https://placehold.co/200x80/1a0f2e/ffffff?text=SCUFFERS&font=montserrat" },
    { name: "Cold Culture", url: "https://placehold.co/200x80/1a0f2e/ffffff?text=COLD+CULTURE&font=montserrat" },
    { name: "Blue Banana", url: "https://placehold.co/200x80/1a0f2e/ffffff?text=BLUE+BANANA&font=montserrat" },
    { name: "Urban Fest", url: "https://placehold.co/200x80/1a0f2e/b026ff?text=URBAN+FEST&font=montserrat" },
  ]

  const marqueeContent = [...brandLogos, ...brandLogos, ...brandLogos]

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '10px', fontSize: '2.5rem', textTransform: 'uppercase' }}>
        Tienda Oficial & <span style={{ color: 'var(--neon-purple)' }}>Pop-Up Stores</span>
      </h1>
      <p style={{ color: '#aaa', textAlign: 'center', marginBottom: '40px' }}>
        Consigue tu abono, merch oficial y visita los stands exclusivos en el recinto.
      </p>

      <div style={{ 
        marginBottom: '50px', 
        overflow: 'hidden', 
        borderTop: '2px solid var(--neon-purple)',
        borderBottom: '2px solid var(--neon-purple)',
        padding: '20px 0',
        backgroundColor: 'rgba(26, 15, 46, 0.5)', 
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, var(--bg-black), transparent)', zIndex: 2 }}></div>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, var(--bg-black), transparent)', zIndex: 2 }}></div>

        <div ref={marqueeRef} style={{ display: 'flex', gap: '60px', width: 'max-content' }}>
          {marqueeContent.map((brand, index) => (
            <img 
              key={index} 
              src={brand.url} 
              alt={brand.name}
              style={{ 
                height: '50px', 
                objectFit: 'contain',
                filter: 'grayscale(100%) brightness(0.8) sepia(1) hue-rotate(240deg) saturate(2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                 e.currentTarget.style.filter = 'none'
                 e.currentTarget.style.transform = 'scale(1.1)'
                 e.currentTarget.style.filter = 'drop-shadow(0 0 10px var(--neon-purple))'
              }}
              onMouseOut={(e) => {
                 e.currentTarget.style.filter = 'grayscale(100%) brightness(0.8) sepia(1) hue-rotate(240deg) saturate(2)'
                 e.currentTarget.style.transform = 'scale(1)'
              }}
            />
          ))}
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '30px',
        alignItems: 'start' 
      }}>
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  )
}