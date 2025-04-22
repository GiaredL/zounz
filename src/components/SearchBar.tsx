import { useEffect } from 'react'
import { useSearch } from '../context/useSearch'
import styles from './SearchBar.module.scss'

export interface ArtistData {
  id: string
  name: string
  popularity: number
  followers: { total: number }
  images: { url: string }[]
}

interface SearchBarProps {
  onArtistFound: (artist: ArtistData | null) => void
}

const SearchBar = ({ onArtistFound }: SearchBarProps) => {
  const { searchTerm, setSearchTerm } = useSearch()

  const clientCredentials = '0815ec231f0649679fd1c202676dcbb1'
  const clientSecret = '140f5cce1acb430985441129193a2983'

  const searchArtist = async () => {
    try {
      // Get access token
      const authString = `${clientCredentials}:${clientSecret}`
      const base64Auth = btoa(authString)

      const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          Authorization: `Basic ${base64Auth}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
      })

      const tokenData = await tokenResponse.json()

      // Search for artist
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=artist&limit=1`, {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`
        }
      })

      const data = await response.json()
      if (data.artists.items.length > 0) {
        onArtistFound(data.artists.items[0])
      }
    } catch (error) {
      console.error('Error searching for artist:', error)
      onArtistFound(null)
    }
  }

  useEffect(() => {
    if (searchTerm.length > 2) {
      const debounce = setTimeout(() => {
        searchArtist()
      }, 500)
      return () => clearTimeout(debounce)
    }
  }, [searchTerm])

  return (
    <div className={styles.searchContainer}>
      <input
        type="search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search for an artist..."
      />
    </div>
  )
}

export default SearchBar
