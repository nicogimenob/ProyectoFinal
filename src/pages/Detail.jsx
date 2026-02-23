import { useParams, Link } from 'react-router-dom'
import { useContext } from 'react'
import { products } from '../data/products' 
import { CartContext } from '../context/CartContext'
import Map from '../components/Map' // Importamos tu componente de mapa

export default function Detail() {
  const { id } = useParams() // Sacamos el ID de la URL
  const { addToCart } = useContext(CartContext)

  // Buscamos el producto en nuestra lista de datos
  const product = products.find(p => p.id === parseInt(id) || p.id === id)

  // Si alguien pone un ID falso en la URL, le mostramos un error elegante
  if (!product) {
    return (
      <div style={{ padding: '80px 20px', textAlign: 'center', color: 'white' }}>
        <h2>Entrada no encontrada 😢</h2>
        <p style={{ color: '#aaa', marginBottom: '20px' }}>Parece que este evento ya no existe.</p>
        <Link to="/explore" className="neon-button" style={{ textDecoration: 'none', padding: '10px 20px' }}>
          Volver a Explorar
        </Link>
      </div>
    )
  }

  return (
    <div style={{ padding: '40px 20px', color: 'white', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Botón de volver */}
      <Link to="/explore" style={{ color: 'var(--neon-purple)', textDecoration: 'none', marginBottom: '20px', display: 'inline-block', fontWeight: 'bold' }}>
        ← Volver a Explorar
      </Link>

      {/* SECCIÓN SUPERIOR: Detalles del Producto */}
      <div style={{ 
        display: 'flex', 
        gap: '40px', 
        flexWrap: 'wrap', 
        backgroundColor: 'var(--surface-dark)', 
        padding: '30px', 
        borderRadius: '12px', 
        border: '1px solid var(--border-color)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
      }}>
        
        {/* Imagen */}
        <div style={{ flex: '1 1 300px' }}>
          <img 
            src={product.image || "https://via.placeholder.com/400x500/120e18/b026ff?text=URBAN+FEST"} 
            alt={product.name} 
            style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', border: '1px solid #333' }}
          />
        </div>

        {/* Info y Compra */}
        <div style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '2.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {product.name}
          </h1>
          <p style={{ fontSize: '1.8rem', color: 'var(--neon-purple)', fontWeight: 'bold', margin: 0 }}>
            {product.price} €
          </p>
          
          <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '1.1rem' }}>
            {product.description || "Acceso oficial al Urban Fest. Disfruta de la mejor música urbana, zonas exclusivas de descanso y una experiencia inolvidable. ¡No te quedes sin la tuya y asegura tu sitio en el evento del año!"}
          </p>

          <button 
            className="neon-button" 
            onClick={() => addToCart(product)}
            style={{ alignSelf: 'flex-start', padding: '15px 30px', marginTop: '20px', fontSize: '1.1rem' }}
          >
            Añadir al Carrito 🛒
          </button>
        </div>
      </div>

      {/* SECCIÓN INFERIOR: El Mapa */}
      <div style={{ marginTop: '50px' }}>
        <h2 style={{ borderBottom: '2px solid var(--neon-purple)', paddingBottom: '10px', marginBottom: '20px' }}>
          Ubicación del Evento 📍
        </h2>
        <p style={{ color: '#aaa', marginBottom: '20px' }}>
          El recinto principal se encuentra aquí. ¡Planea tu ruta para no perderte ni un solo concierto!
        </p>
        
        {/* Contenedor del mapa: Le damos un alto fijo y bordes para que no se desmadre */}
        <div style={{ 
          height: '400px', 
          width: '100%', 
          borderRadius: '12px', 
          overflow: 'hidden', 
          border: '2px solid #333',
          boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
        }}>
          {/* Aquí llamamos a tu componente Map.jsx */}
          <Map /> 
        </div>
      </div>

    </div>
  )
}