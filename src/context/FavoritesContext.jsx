import { createContext, useState } from 'react'

export const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  // Esta función hace todo el trabajo
  const toggleFavorite = (product) => {
    setFavorites(prev => {
      const isFav = prev.find(item => item.id === product.id)
      if (isFav) {
        // Si ya está, lo quitamos
        return prev.filter(item => item.id !== product.id)
      } else {
        // Si no está, lo añadimos
        return [...prev, product]
      }
    })
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}