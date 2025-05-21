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
  const { isLoading, error } = useAuth()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <Navigate to='/login' />
  }

  return <Route {...rest} element={<Component />} />
}

export default ProtectedRoute
