import { useEffect, useState } from 'react'
import { CLIENT_ID, CLIENT_SECRET } from '../constants'

const useSpotifyApi = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null)

  useEffect(() => {
    const getAccessToken = async () => {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        },
        body: 'grant_type=client_credentials'
      })

      const data = await response.json()
      setAccessToken(data.access_token)
    }

    getAccessToken()
  }, [])

  return { accessToken }
}

export default useSpotifyApi
