import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { FavoritesContext } from '../context/FavoritesContext'
import Map from './Map'

export default function Card({ product }) {
  const { addToCart } = useContext(CartContext)
  const { favorites, toggleFavorite } = useContext(FavoritesContext)
  
  const [showDetails, setShowDetails] = useState(false)

  const isFavorite = favorites.some(fav => fav.id === product.id)

  return (
    <div className="festival-card" style={{ 
      backgroundColor: 'var(--surface-dark)',
      borderRadius: '16px',
      border: '1px solid #333',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px'
    }}>
      
      <div style={{ height: '220px', overflow: 'hidden' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div style={{ padding: '20px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: 'white' }}>{product.name}</h3>
        <p style={{ color: 'var(--neon-purple)', fontWeight: 'bold', fontSize: '1.2rem', margin: '0 0 15px 0' }}>
          {product.price} €
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <button 
            onClick={() => addToCart(product)}
            className="neon-button" 
            style={{ flexGrow: 1, padding: '10px' }}
          >
            AÑADIR 🛒
          </button>

          <button 
            onClick={() => setShowDetails(!showDetails)}
            style={{ 
              background: 'none', 
              border: '1px solid var(--neon-purple)', 
              color: 'white', 
              borderRadius: '8px', 
              padding: '0 15px', 
              cursor: 'pointer' 
            }}
          >
            {showDetails ? 'CERRAR' : 'DETALLES'}
          </button>

          <button 
            onClick={() => toggleFavorite(product)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>

        {showDetails && (
          <div style={{ 
            marginTop: '20px', 
            paddingTop: '20px', 
            borderTop: '1px solid #444',
            animation: 'fadeIn 0.5s ease' 
          }}>
            <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '15px' }}>
              {product.description}
            </p>
            
            <div style={{ height: '200px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #333' }}>
              <Map />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}