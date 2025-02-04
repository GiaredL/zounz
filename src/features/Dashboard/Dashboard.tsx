import { Header } from '../../layouts/features'
import Charts from './Charts'
import Map from './Map'
import styles from './Dashboard.module.scss'
const Dashboard = () => {
  return (
    <Header>
      <div className={styles['dashboard-wrapper']}>
        <div className={styles['dashboard-container']}>
          <Charts />
          <Map />
        </div>
      </div>
    </Header>
  )
}

export default Dashboard
