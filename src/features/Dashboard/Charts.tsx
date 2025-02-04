import styles from './Charts.module.scss'
import { testUsers } from '../../testUsers'
import ChartItem from './ChartItem'

const Charts = () => {
  const sortedUsers = [...testUsers].sort((a, b) => {
    const streamsA = parseInt(a.streams)
    const streamsB = parseInt(b.streams)
    return streamsB - streamsA
  })
  return (
    <div className={styles['charts-container']}>
      {sortedUsers.map((user, rank) => {
        return <ChartItem key={rank} user={user} rank={rank} />
      })}
    </div>
  )
}

export default Charts
