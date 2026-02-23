import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useContext(CartContext)
  const navigate = useNavigate() 

  const handleCheckout = () => {
    alert('¡Compra finalizada con éxito! 🎫 Recibirás tus entradas en tu email.')
    clearCart() 
    navigate('/') 
  }

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', color: 'white' }}>
        <h2>Tu carrito está vacío 🛒</h2>
        <p>Parece que aún no has elegido tus entradas.</p>
        <Link to="/explore" className="neon-button" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '20px' }}>
          IR A LA TIENDA
        </Link>
      </div>
    )
  }

  return (
    <div style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto', color: 'white' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', textTransform: 'uppercase' }}>Tu Compra</h1>

      <div style={{ backgroundColor: 'var(--surface-dark)', borderRadius: '15px', padding: '20px', border: '1px solid #333' }}>
        {cart.map(item => (
          <div key={item.id} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '20px 0', 
            borderBottom: '1px solid #333',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1 1 300px' }}>
              <img src={item.image} alt={item.name} style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
              <div>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{item.name}</h3>
                <p style={{ margin: 0, color: 'var(--neon-purple)', fontWeight: 'bold' }}>{item.price} €</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: '#111', padding: '5px 15px', borderRadius: '30px' }}>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                style={{ background: 'none', border: 'none', color: 'var(--neon-purple)', fontSize: '1.5rem', cursor: 'pointer', fontWeight: 'bold' }}
              >
                −
              </button>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold', minWidth: '30px', textAlign: 'center' }}>
                {item.quantity}
              </span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                style={{ background: 'none', border: 'none', color: 'var(--neon-purple)', fontSize: '1.5rem', cursor: 'pointer', fontWeight: 'bold' }}
              >
                +
              </button>
            </div>

            <div style={{ textAlign: 'right', flex: '1 1 100px' }}>
              <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>{(item.price * item.quantity).toFixed(2)} €</p>
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{ background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer', fontSize: '0.8rem', marginTop: '5px', textDecoration: 'underline' }}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}

        <div style={{ marginTop: '30px', textAlign: 'right', padding: '20px', borderTop: '2px solid var(--neon-purple)' }}>
          <h2 style={{ fontSize: '2rem' }}>TOTAL: <span style={{ color: 'var(--neon-purple)' }}>{cartTotal.toFixed(2)} €</span></h2>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', marginTop: '20px' }}>
            <button onClick={clearCart} style={{ background: 'none', border: '1px solid #555', color: '#aaa', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>
              VACIAR
            </button>
            
            <button 
              onClick={handleCheckout} 
              className="neon-button" 
              style={{ padding: '10px 30px', cursor: 'pointer' }}
            >
              FINALIZAR PEDIDO 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}