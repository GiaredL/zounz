import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />
  }

  return <>{children}</>
}
