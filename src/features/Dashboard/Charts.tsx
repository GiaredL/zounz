import styles from './Charts.module.scss'
import { testUsers } from '../../testUsers'
import ChartItem from './ChartItem'
import { FC } from 'react'
import { ITestUsers } from '../../types/models/ITestUsers'

interface ChartsProps {
  setSelectedArtist: (artist: ITestUsers | null) => void
}

const Charts: FC<ChartsProps> = ({ setSelectedArtist }) => {
  const sortedUsers = [...testUsers].sort((a, b) => {
    const streamsA = parseInt(a.streams)
    const streamsB = parseInt(b.streams)
    return streamsB - streamsA
  })
  return (
    <div className={styles['charts-container']}>
      {sortedUsers.map((user, rank) => {
        return <ChartItem key={rank} user={user} rank={rank} setSelectedArtist={setSelectedArtist} />
      })}
    </div>
  )
}

export default Charts
