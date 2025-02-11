import { createContext, useState, ReactNode, useEffect } from 'react'
import { ITestUsers } from '../types/models/ITestUsers'

interface AuthContextType {
  isAuthenticated: boolean
  user: ITestUsers | null
  loading: boolean
  login: (userData: ITestUsers) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<ITestUsers | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log('Checking authentication...')
        const response = await fetch('http://localhost:5000/api/session/check', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (response.ok) {
          const data = await response.json()
          console.log('Auth check response:', data)
          if (data.user) {
            setIsAuthenticated(true)
            setUser(data.user)
          } else {
            console.log('No user data in response')
            setIsAuthenticated(false)
            setUser(null)
          }
        } else {
          console.log('Auth check failed with status:', response.status)
          setIsAuthenticated(false)
          setUser(null)
        }
      } catch (err) {
        console.error('Auth check failed:', err)
        setIsAuthenticated(false)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = (userData: ITestUsers) => {
    setIsAuthenticated(true)
    setUser(userData)
  }

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/session/signout', {
        method: 'POST',
        credentials: 'include'
      })

      if (response.ok) {
        setIsAuthenticated(false)
        setUser(null)
      }
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
