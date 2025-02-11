import { FC } from 'react'
import { ITestUsers } from '../../types/models/ITestUsers'
import styles from './ChartItem.module.scss'

interface IChartItemProps {
  user: ITestUsers
  rank: number
  setSelectedArtist: (artist: any) => void
}

const ChartItem: FC<IChartItemProps> = ({ user, rank, setSelectedArtist }) => {
  const scale = Math.max(0.7, 1 - rank * 0.03)
  return (
    <div
      className={styles['chart-item']}
      style={{
        transform: `scaleX(${scale})`,
        transformOrigin: 'left'
      }}
      onClick={() => setSelectedArtist(user)}
    >
      <div className={styles['item-details']}>
        <p>{user.name}</p>
        <p>Streams: {user.streams}</p>
      </div>
      <div className={styles['rank']}>
        <h1>{rank + 1}</h1>
      </div>
    </div>
  )
}

export default ChartItem
