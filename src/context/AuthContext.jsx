import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  // Inicializamos el estado mirando si ya hay un usuario guardado en el navegador (localStorage)
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  // Función para hacer login (simulado)
  const login = (userData) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData)) // Lo guarda para que no se borre al recargar
  }

  // Función para cerrar sesión
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}