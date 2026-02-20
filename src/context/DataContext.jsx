import { createContext, useReducer } from 'react'

export const DataContext = createContext()

const initialState = {
  favorites: [],
  cart: []
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] }

    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== action.payload)
      }

    case 'ADD_CART':
      return { ...state, cart: [...state.cart, action.payload] }

    case 'REMOVE_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }

    default:
      return state
  }
}

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}
