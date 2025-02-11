import styles from './Charts.module.scss'
import { testUsers } from '../../testUsers'
import ChartItem from './ChartItem'
import { FC } from 'react'

interface ChartsProps {
  setSelectedArtist: (artist: any) => void
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
