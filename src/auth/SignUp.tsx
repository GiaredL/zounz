import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import styles from './SignUp.module.scss'
const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.email || !formData.username || !formData.password || !formData.confirmPassword) {
      return 'All fields are required'
    }
    if (formData.password !== formData.confirmPassword) {
      return 'Passwords do not match'
    }
    if (formData.password.length < 8) {
      return 'Password must be at least 8 characters long'
    }
    return ''
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errorMessage = validateForm()
    if (errorMessage) {
      setError(errorMessage)
      return
    }

    setLoading(true)
    try {
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      })

      const data = await response.json()
      if (response.ok) {
        login(data.user)
        navigate('/dashboard')
      } else {
        setError(data.message || 'Sign-up failed')
      }
    } catch (err) {
      console.log(err)
      setError('Failed to connect to server')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles['sign-up']}>
      <div className={styles['container']}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email..."
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username..."
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password..."
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            className={error ? styles['error'] : ''}
            required
          />
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            placeholder="Confirm password..."
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        {error && <p style={{ color: 'white', marginTop: '20px' }}>{error}</p>}
      </div>
    </div>
  )
}

export default SignUp
