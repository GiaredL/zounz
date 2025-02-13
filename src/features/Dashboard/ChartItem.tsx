import { FC } from 'react'
import { ITestUsers } from '../../types/models/ITestUsers'
import styles from './ChartItem.module.scss'

interface IChartItemProps {
  user: ITestUsers
  rank: number
  setSelectedArtist: (artist: ITestUsers | null) => void
}

const ChartItem: FC<IChartItemProps> = ({ user, rank, setSelectedArtist }) => {
  const opacity = Math.max(0.3, 1 - rank * 0.07)
  // const lightness = 30 + (10 - rank) * 5

  return (
    <div
      className={styles['chart-item']}
      style={{
        opacity: opacity
        // backgroundColor: `hsl(, 100%, ${lightness}%)`
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
