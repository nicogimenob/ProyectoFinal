import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext)

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', color: 'white' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', textTransform: 'uppercase' }}>
        Mis <span style={{ color: 'var(--neon-purple)' }}>Favoritos</span>
      </h1>

      {favorites.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p style={{ fontSize: '1.2rem', color: '#888' }}>Aún no tienes guardada ninguna entrada.</p>
          <Link to="/explore" className="neon-button" style={{ textDecoration: 'none', marginTop: '20px', display: 'inline-block' }}>
            EXPLORAR FESTIVAL
          </Link>
        </div>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '30px' 
        }}>
          {favorites.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}