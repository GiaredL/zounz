import styles from './Charts.module.scss'
import ChartItem from './ChartItem'
import { FC } from 'react'
import { ITestUsers } from '../../types/models/ITestUsers'
import { useUserInfo } from '../../hooks/useUserInfo'
import { useSearch } from '../../context/useSearch'

interface ChartsProps {
  setSelectedArtist: (artist: ITestUsers | null) => void
}

const Charts: FC<ChartsProps> = ({ setSelectedArtist }) => {
  const { userData, isLoading } = useUserInfo()
  const { filteredResults } = useSearch()

  const displayData = filteredResults || userData

  return (
    <div className={styles['charts-container']}>
      {isLoading ? (
        <div>Loading...</div>
      ) : displayData ? (
        displayData.map((user: ITestUsers, rank: number) => (
          <ChartItem key={rank} user={user} rank={rank} setSelectedArtist={setSelectedArtist} />
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  )
}

export default Charts
