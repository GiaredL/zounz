import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { logo } from '../../assets'
import { useAuth } from '../../context/useAuth'
import { useSearch } from '../../context/useSearch'
import { useUserInfo } from '../../hooks/useUserInfo'

const Header = () => {
  const { isAuthenticated, logout } = useAuth()
  const { searchTerm, setSearchTerm, setFilteredResults } = useSearch()
  const { userData } = useUserInfo()

  const handleLogout = async () => {
    await logout()
    console.log('Logged out', isAuthenticated)
  }

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)

    if (userData && term.length > 0) {
      const results = userData.filter(
        user =>
          user.name.toLowerCase().includes(term.toLowerCase()) ||
          user.city.toLowerCase().includes(term.toLowerCase()) ||
          user.state.toLowerCase().includes(term.toLowerCase())
      )
      setFilteredResults(results)
    } else {
      setFilteredResults(null)
    }
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <input type="text" placeholder="search..." value={searchTerm} onChange={handleSearchInput}></input>
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
