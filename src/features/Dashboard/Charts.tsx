import styles from './Charts.module.scss'
import ChartItem from './ChartItem'
import { FC } from 'react'
import { ITestUsers } from '../../types/models/ITestUsers'
import { useSearch } from '../../context/useSearch'
import { testUsers } from '../../testUsers'

interface ChartsProps {
  setSelectedArtist: (artist: ITestUsers | null) => void
}

const Charts: FC<ChartsProps> = ({ setSelectedArtist }) => {
  const { filteredResults } = useSearch()
  const displayData = filteredResults || testUsers

  return (
    <div className={styles['charts-container']}>
      {displayData ? (
        displayData.map((user: ITestUsers, rank: number) => (
          <ChartItem key={user.id} user={user} rank={rank + 1} setSelectedArtist={setSelectedArtist} />
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  )
}

export default Charts
