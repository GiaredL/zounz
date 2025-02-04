import styles from './NotFound.module.scss'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <h2>Dang! That page doesn't exist.</h2>
      <p>
        Try going back to <Link to="/">Home</Link> for now.
      </p>
    </div>
  )
}

export default NotFound
