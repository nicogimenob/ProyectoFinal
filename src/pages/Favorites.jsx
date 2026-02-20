import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

export default function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext)

  if (favorites.length === 0) {
    return <h1>No hay favoritos</h1>
  }

  return (
    <div>
      <h1>Favoritos</h1>

      {favorites.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => removeFavorite(item.id)}>Quitar</button>
        </div>
      ))}
    </div>
  )
}