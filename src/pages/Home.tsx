// src/pages/DashboardPage.tsx
import React from 'react'
import Dashboard from '../components/Dashboard'
import { useAuth } from '../hooks/useAuth'

const Home: React.FC = () => {
  const { isLoading, error } = useAuth() // Verifica se o usuário está autenticado

  if (isLoading) {
    return <div>Loading...</div> // Exibe um loading enquanto verifica a autenticação
  }

  if (error) {
    return <div>Erro: Não autenticado!</div> // Caso ocorra erro na autenticação
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <Dashboard />
    </div>
  )
}

export default Home
