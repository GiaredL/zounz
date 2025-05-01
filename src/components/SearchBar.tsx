import { useEffect, useCallback } from 'react'
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

  const searchArtist = useCallback(async () => {
    if (!searchTerm.trim()) {
      onArtistFound(null)
      return
    }

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
      } else {
        onArtistFound(null)
      }
    } catch (error) {
      console.error('Error searching for artist:', error)
      onArtistFound(null)
    }
  }, [searchTerm, onArtistFound])

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (searchTerm.length > 2) {
        searchArtist()
      } else if (searchTerm.length === 0) {
        onArtistFound(null)
      }
    }, 300) // Reduced debounce time

    return () => clearTimeout(debounceTimeout)
  }, [searchTerm, searchArtist])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
  }

  const handleClear = () => {
    setSearchTerm('')
    onArtistFound(null)
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInputWrapper}>
        <input
          type="search"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for an artist..."
        />
        {searchTerm && (
          <button onClick={handleClear} className={styles.clearButton}>
            ×
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar
