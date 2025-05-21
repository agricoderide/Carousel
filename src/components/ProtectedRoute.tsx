import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import type { RouteProps } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface ProtectedRouteProps {
  component: React.ComponentType<RouteProps> // O componente deve ser tipado como React component com props de rota
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isLoading, error } = useAuth() // Verifica se o usuário está autenticado

  if (isLoading) {
    return <div>Loading...</div> // Exibe um loading enquanto verifica a autenticação
  }

  if (error) {
    return <Navigate to='/login' /> // Usando 'Navigate' para redirecionar para a página de login se não autenticado
  }

  return (
    <Route
      {...rest}
      element={<Component />} // No React Router v6, usamos 'element' para renderizar o componente
    />
  )
}

export default ProtectedRoute
