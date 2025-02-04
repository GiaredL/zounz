import { FC } from 'react'
import { ITestUsers } from '../../types/models/ITestUsers'
import styles from './ChartItem.module.scss'

interface IChartItemProps {
  user: ITestUsers
  rank: number
}

const ChartItem: FC<IChartItemProps> = ({ user, rank }) => {
  const scale = Math.max(0.7, 1 - rank * 0.03)
  return (
    <div
      className={styles['chart-item']}
      style={{
        transform: `scaleX(${scale})`,
        transformOrigin: 'left'
      }}
    >
      <div className={styles['item-details']}>
        <h1>{user.name}</h1>
        <p>Streams: {user.streams}</p>
      </div>
      <div className={styles['rank']}>
        <h1>{rank + 1}</h1>
      </div>
    </div>
  )
}

export default ChartItem
