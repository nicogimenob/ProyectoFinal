import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { FavoritesContext } from '../context/FavoritesContext'
import { Link } from 'react-router-dom'

export default function Card({ product }) {
  const { addToCart } = useContext(CartContext)
  const { favorites, toggleFavorite } = useContext(FavoritesContext)

  // Comprobamos si este producto ya es favorito
  const isFavorite = favorites.some(fav => fav.id === product.id)

  return (
    <div className="festival-card" style={{ 
      backgroundColor: 'var(--surface-dark)',
      borderRadius: '16px',
      border: '1px solid #333',
      overflow: 'hidden',
      transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
      height: '100%', // Para que la tarjeta ocupe todo el alto del grid
      display: 'flex',
      flexDirection: 'column' // Para organizar el contenido verticalmente
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)'
      e.currentTarget.style.borderColor = 'var(--neon-purple)'
      e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(176, 38, 255, 0.3)'
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.borderColor = '#333'
      e.currentTarget.style.boxShadow = 'none'
    }}
    >
      {/* LA SOLUCIÓN ESTÁ AQUÍ:
         Forzamos una altura fija y usamos object-fit: cover
      */}
      <div style={{ height: '220px', overflow: 'hidden' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Esto es la clave: recorta la imagen para rellenar sin deformar
            objectPosition: 'center'
          }}
        />
      </div>

      {/* Contenido de texto */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {/* Título con enlace al detalle */}
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'white' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>
            {product.name}
          </h3>
        </Link>
        
        {/* Precio */}
        <p style={{ color: 'var(--neon-purple)', fontWeight: 'bold', fontSize: '1.3rem', margin: '0 0 20px 0' }}>
          {product.price} €
        </p>

        {/* Botones (se empujan al final) */}
        <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => addToCart(product)}
            className="neon-button" 
            style={{ flexGrow: 1, padding: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}
          >
            AÑADIR
          </button>

          <button 
            onClick={() => toggleFavorite(product)}
            style={{ 
              background: 'none',
              border: '1px solid #333',
              borderRadius: '8px',
              padding: '10px 15px',
              cursor: 'pointer',
              fontSize: '1.2rem',
              transition: 'all 0.3s',
              color: isFavorite ? '#ff4d4d' : 'white', // Rojo si es favorito, blanco si no
              borderColor: isFavorite ? '#ff4d4d' : '#333'
            }}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  )
}