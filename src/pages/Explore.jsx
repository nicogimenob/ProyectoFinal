import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'
import { CartContext } from '../context/CartContext'

export default function Explore() {
  const { addFavorite, removeFavorite } = useContext(FavoritesContext)
  const { addToCart } = useContext(CartContext)
  return (
    <div>
      <h1>Explorar Urban Fest</h1>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '12px',
              width: '200px'
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%' }}
            />
            <h3>{product.name}</h3>
            <p>{product.price}€</p>

            <Link to={`/product/${product.id}`}>
              Ver detalle
            </Link>
            <button onClick={() => addFavorite(product)}>
              ❤️ Favorito
            </button>
            <button onClick={() => addToCart(product)}>
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}