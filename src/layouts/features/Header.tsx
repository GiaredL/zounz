import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { logo } from '../../assets'
import { useAuth } from '../../context/useAuth'

const Header = () => {
  const { isAuthenticated, logout } = useAuth()

  const handleLogout = async () => {
    await logout()
    console.log('Logged out', isAuthenticated)
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles['header-body']}>
          <button className={styles['header-button']}>
            <Link to="/profile">
              <p>Profile</p>
            </Link>
          </button>
          <button className={styles['header-button']}>
            <Link to="/about">
              <p>About</p>
            </Link>
          </button>
          {isAuthenticated ? (
            <button className={styles['header-button']} onClick={handleLogout}>
              <Link to="/sign-in">
                <p>Logout</p>
              </Link>
            </button>
          ) : (
            <>
              <button className={styles['header-button']}>
                <Link to="/sign-in">
                  <p>Login</p>
                </Link>
              </button>
              <button className={styles['header-button']}>
                <Link to="/sign-up">
                  <p>Sign Up</p>
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
