import styles from './Charts.module.scss'
import ChartItem from './ChartItem'
import { FC, useEffect, useState } from 'react'
import { ITestUsers } from '../../types/models/ITestUsers'
import { ITestSong } from '../../types/models/ITestSong'

interface ChartsProps {
  setSelectedArtist: (artist: ITestUsers | null) => void
}

const Charts: FC<ChartsProps> = ({ setSelectedArtist }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<ITestUsers[] | null>(null)

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('http://localhost:5000/api/users/users')
        const fetchedData = await response.json()

        const transformedUsers = fetchedData.users.map((user: ITestUsers) => ({
          id: user.id,
          name: user.name,
          state: user.state,
          city: user.city,
          streams: user.streams,
          location: user.location || { lat: 0, lng: 0 },
          image: user.image || '',
          bio: user.bio || '',
          songs:
            user.songs?.map((song: ITestSong) => ({
              id: song.id || 0,
              title: song.title || '',
              album: song.album || '',
              image: song.image || '',
              streams: song.streams || 0,
              audioUrl: song.audioUrl || ''
            })) || []
        }))
        const sortedUsers = [...transformedUsers].sort((a, b) => {
          const streamsA = parseInt(a.streams.toString())
          const streamsB = parseInt(b.streams.toString())
          return streamsB - streamsA
        })
        setUserData(sortedUsers)
      } catch (error) {
        setIsLoading(false)
        console.error('Error fetching user info:', error)
      } finally {
        setIsLoading(false)
      }
    }

    getUserInfo()
  }, [])

  return (
    <div className={styles['charts-container']}>
      {isLoading ? (
        <div>Loading...</div>
      ) : userData ? (
        userData.map((user: ITestUsers, rank: number) => (
          <ChartItem key={rank} user={user} rank={rank} setSelectedArtist={setSelectedArtist} />
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  )
}

export default Charts
