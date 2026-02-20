import { createContext, useState } from 'react'

export const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  function addFavorite(product) {
    setFavorites(prev => [...prev, product])
  }

  function removeFavorite(id) {
    setFavorites(prev => prev.filter(item => item.id !== id))
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}