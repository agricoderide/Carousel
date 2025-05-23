// src/components/LoginForm.tsx
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      interface LoginResponse {
        access_token: string
      }

      const response = await axios.post<LoginResponse>(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email,
          password,
        },
      )

      // Armazena o token
      localStorage.setItem('token', response.data.access_token)

      // Redireciona para a página do Dashboard
      navigate('/home')
    } catch {
      setError('Credenciais inválidas')
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm
