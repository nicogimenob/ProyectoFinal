import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext)

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  if (cart.length === 0) {
    return <h1>Carrito vacío</h1>
  }

  return (
    <div>
      <h1>Carrito</h1>

      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name} – {item.price}€</p>
          <button onClick={() => removeFromCart(item.id)}>Quitar</button>
        </div>
      ))}

      <h3>Total: {total}€</h3>
      <button>Finalizar compra</button>
    </div>
  )
}