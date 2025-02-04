import { Link, useNavigate } from 'react-router-dom'
import styles from './SignIn.module.scss'
import { useState } from 'react'
import SignUp from './SignUp'

const SignIn = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  // const [error, setError] = useState('')
  // const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const user = users.find(user => {
    //   return user.username === userName && user.password === password
    // })

    // if (user) {
    //   localStorage.setItem('user', JSON.stringify(user))
    //   navigate('/')
    // } else {
    //   setError('Invalid username or password')
    // }
  }
  return (
    <div className={styles['sign-in']}>
      <form onSubmit={handleSubmit}>
        <button className={styles['back-button']}>
          <Link to="/">Go Back</Link>
        </button>
        <h1>Sign In</h1>
        <input type="" placeholder="email..." value={userName} onChange={e => setUserName(e.target.value)} />
        <input
          type="password"
          placeholder="password..."
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      {/* {error && <p className={styles.error}>{error}</p>} */}
    </div>
  )
}

export default SignIn
