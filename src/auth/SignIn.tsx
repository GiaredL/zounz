import { Link, useNavigate } from 'react-router-dom'
import styles from './SignIn.module.scss'
import { useState } from 'react'
import { useAuth } from '../context/useAuth'

const SignIn = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('http://localhost:5000/api/session/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ userName, password })
      })

      const data = await response.json()
      console.log('logged out mfer', data)

      if (response.ok) {
        login(data.user)
        navigate('/')
      } else {
        setError(data.message || 'Invalid credentials')
      }
    } catch (err) {
      setError('Failed to connect to server')
    }
  }

  return (
    <div className={styles['sign-in']}>
      <form onSubmit={handleSubmit}>
        <button className={styles['back-button']}>
          <Link to="/">Go Back</Link>
        </button>
        <h1>Sign In</h1>
        <input
          type="text"
          placeholder="username..."
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password..."
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default SignIn
