import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { logo } from '../../assets'

interface HeaderProps {
  children: React.ReactNode
}
const Header = ({ children }: HeaderProps) => {
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
            <Link to="/dashboard">
              <p>Dashboard</p>
            </Link>
          </button>
          <button className={styles['header-button']}>
            <Link to="/about">
              <p>About</p>
            </Link>
          </button>
          <button className={styles['header-button']}>
            <Link to="/sign-in">
              <p>Sign In</p>
            </Link>
          </button>
        </div>
      </div>
      <main>{children}</main>
    </>
  )
}

export default Header
