import { FC } from 'react'
import Charts from './Charts'
import styles from './Dashboard.module.scss'
import { ITestUsers } from '../../types/models/ITestUsers'
// import UserSearch from './UserSearch'

interface DashboardProps {
  setSelectedArtist: (artist: ITestUsers | null) => void
}
const Dashboard: FC<DashboardProps> = ({ setSelectedArtist }) => {
  return (
    <div className={styles['dashboard-wrapper']}>
      <div className={styles['dashboard-container']}>
        <Charts setSelectedArtist={setSelectedArtist} />
      </div>
    </div>
  )
}

export default Dashboard
