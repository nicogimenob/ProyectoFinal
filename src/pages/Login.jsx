import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Login() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    login('user@email.com')
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="Email" />
      <input placeholder="Password" />
      <button>Entrar</button>
    </form>
  )
}